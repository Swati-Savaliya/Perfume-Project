Add-Type -AssemblyName System.Drawing

$bgPath = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\b4cf9f58-5b5b-489a-a57e-89d816eb27d6\antique_rose_pedestal_display_1793687400970.jpg"
$cutoutPath = "$PWD/public/images/perfume_coag_antique_bottle_cutout.png"
$outputPath = "$PWD/public/images/perfume_coag_antique_roses.jpg"

$bg = [System.Drawing.Bitmap]::FromFile($bgPath)
$cutoutFull = [System.Drawing.Bitmap]::FromFile($cutoutPath)

# 1. Tightly crop bottle: only the bottle body, cap and base (exclude old table at bottom)
$cropX = 130
$cropY = 104
$cropW = 426
$cropH = 714 # strictly up to bottom of porcelain bottle

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

# Draw background
$g.DrawImage($bg, 0, 0, $bg.Width, $bg.Height)

# Position bottle on the pedestal
$targetHeight = 550
$targetWidth = [int]($targetHeight * ($cropW / $cropH)) # ~328
$targetX = [int](($bg.Width - $targetWidth) / 2) # Center = 284
$targetY = 215 # Base sits at 215 + 550 = 765 on the pedestal stone

# 3. Soft, natural contact shadow directly on the pedestal stone
$shadowBaseY = $targetY + $targetHeight - 4
for ($i = 16; $i -ge 1; $i--) {
    $alpha = [int](130 / (1 + $i * 0.9))
    $brush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb($alpha, 40, 25, 18))
    $padX = $i * 3.2
    $padY = $i * 1.1
    $g.FillEllipse($brush, ($targetX - $padX), ($shadowBaseY - 4 - $padY/3), ($targetWidth + $padX*2), (14 + $padY))
    $brush.Dispose()
}

# Fine dark contact line right where porcelain meets stone
$darkLineBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(160, 30, 20, 15))
$g.FillRectangle($darkLineBrush, ($targetX + 22), ($shadowBaseY), ($targetWidth - 44), 4)
$darkLineBrush.Dispose()

# 4. Draw the clean COAG ANTIQUE bottle (NO fake beige rectangle!)
$g.DrawImage($bottle, $targetX, $targetY, $targetWidth, $targetHeight)

# 5. Save image
$canvas.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
Write-Output "Successfully updated: $outputPath"

$g.Dispose()
$canvas.Dispose()
$bottle.Dispose()
$cutoutFull.Dispose()
$bg.Dispose()
