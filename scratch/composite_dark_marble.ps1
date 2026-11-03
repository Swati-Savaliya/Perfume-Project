Add-Type -AssemblyName System.Drawing

$bgPath = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\b4cf9f58-5b5b-489a-a57e-89d816eb27d6\luxury_perfume_podium_background_1793688336865.jpg"
$cutoutPath = "$PWD/public/images/perfume_coag_antique_bottle_cutout.png"
$outputPath = "$PWD/public/images/perfume_coag_antique_dark_marble.jpg"

$bg = [System.Drawing.Bitmap]::FromFile($bgPath)
$cutoutFull = [System.Drawing.Bitmap]::FromFile($cutoutPath)

# 1. Tightly crop authentic COAG ANTIQUE bottle (same as the first 2 images)
$cropX = 130
$cropY = 104
$cropW = 426
$cropH = 714

$bottle = New-Object System.Drawing.Bitmap $cropW, $cropH, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gBottle = [System.Drawing.Graphics]::FromImage($bottle)
$srcRect = New-Object System.Drawing.Rectangle $cropX, $cropY, $cropW, $cropH
$destRect = New-Object System.Drawing.Rectangle 0, 0, $cropW, $cropH
$gBottle.DrawImage($cutoutFull, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$gBottle.Dispose()

# 2. Main Canvas (896 x 1200)
$canvas = New-Object System.Drawing.Bitmap $bg.Width, $bg.Height, ([System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$g = [System.Drawing.Graphics]::FromImage($canvas)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Draw the background
$g.DrawImage($bg, 0, 0, $bg.Width, $bg.Height)

# Position bottle on the plinth
$targetHeight = 550
$targetWidth = [int]($targetHeight * ($cropW / $cropH)) # ~328
$targetX = [int](($bg.Width - $targetWidth) / 2) # Center = 284
$targetY = 205 # Base lands at 205 + 550 = 755 on the top of the dark obsidian plinth

# 3. Soft, realistic contact shadow on the plinth
$shadowBaseY = $targetY + $targetHeight - 5
for ($i = 20; $i -ge 1; $i--) {
    $alpha = [int](170 / (1 + $i * 0.8))
    $brush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb($alpha, 12, 10, 8))
    $padX = $i * 3.4
    $padY = $i * 1.1
    $g.FillEllipse($brush, ($targetX - $padX), ($shadowBaseY - 4 - $padY/3), ($targetWidth + $padX*2), (16 + $padY))
    $brush.Dispose()
}

# Dark contact line under the bottle base
$darkLineBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(210, 8, 8, 8))
$g.FillRectangle($darkLineBrush, ($targetX + 22), ($shadowBaseY), ($targetWidth - 44), 4)
$darkLineBrush.Dispose()

# 4. Subtle glossy reflection on dark polished marble
$refH = 40
$refRect = New-Object System.Drawing.Rectangle $targetX, ($shadowBaseY + 4), $targetWidth, $refH
$g.DrawImage($bottle, $refRect, 0, ($cropH - 60), $cropW, 60, [System.Drawing.GraphicsUnit]::Pixel)

for ($r = 0; $r -lt $refH; $r++) {
    $blendAlpha = [int](170 + ($r / $refH) * 85)
    $blendBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb($blendAlpha, 15, 12, 10))
    $g.FillRectangle($blendBrush, ($targetX - 5), ($shadowBaseY + 4 + $r), ($targetWidth + 10), 1)
    $blendBrush.Dispose()
}

# 5. Draw the crisp authentic COAG ANTIQUE bottle
$g.DrawImage($bottle, $targetX, $targetY, $targetWidth, $targetHeight)

# 6. Save image
$canvas.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
Write-Output "Successfully generated: $outputPath"

$g.Dispose()
$canvas.Dispose()
$bottle.Dispose()
$cutoutFull.Dispose()
$bg.Dispose()
