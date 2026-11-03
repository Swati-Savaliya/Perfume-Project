Add-Type -AssemblyName System.Drawing

$bgPath = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\b4cf9f58-5b5b-489a-a57e-89d816eb27d6\luxury_perfume_white_flowers_background_1793686551695.jpg"
$bottlePath = "$PWD/public/images/perfume_coag_king_bottle.png"
$outputPath = "$PWD/public/images/perfume_coag_king_floral_studio.jpg"

$bg = [System.Drawing.Bitmap]::FromFile($bgPath)
$src = [System.Drawing.Bitmap]::FromFile($bottlePath)

# Bottle bounds in src: X: 35..193, Y: 33..309
$cropX = 35
$cropY = 32
$cropW = 160
$cropH = 278

$cutout = New-Object System.Drawing.Bitmap $cropW, $cropH, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $cropH; $y++) {
    $srcY = $cropY + $y
    for ($x = 0; $x -lt $cropW; $x++) {
        $srcX = $cropX + $x
        if ($srcX -ge $src.Width -or $srcY -ge $src.Height) { continue }
        
        $p = $src.GetPixel($srcX, $srcY)
        
        # Cap width check
        $isOutside = $false
        if ($y -lt 78) {
            if ($x -lt 18 -or $x -gt 142) {
                $isOutside = $true
            }
        }
        
        $lum = ($p.R * 0.299 + $p.G * 0.587 + $p.B * 0.114)
        
        if ($isOutside -or ($lum -gt 250 -and ($x -lt 8 -or $x -gt 152 -or $y -lt 3 -or $y -gt 274))) {
            $cutout.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
        } elseif ($lum -gt 246 -and ($x -lt 12 -or $x -gt 148 -or $y -lt 5)) {
            $alpha = [int]([Math]::Max(0, [Math]::Min(255, (254 - $lum) * 30)))
            $cutout.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $p.R, $p.G, $p.B))
        } else {
            $cutout.SetPixel($x, $y, $p)
        }
    }
}

# Canvas is 896 x 1200
$canvas = New-Object System.Drawing.Bitmap $bg.Width, $bg.Height, ([System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$g = [System.Drawing.Graphics]::FromImage($canvas)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Draw background
$g.DrawImage($bg, 0, 0, $bg.Width, $bg.Height)

# Position bottle on podium
$bWidth = 320
$bHeight = [int]($bWidth * ($cropH / $cropW)) # ~556
$bX = [int](($bg.Width - $bWidth) / 2) # Center = 288
$bY = 220 # Base sits at 220 + 556 = 776

# Realistic soft contact shadow using concentric ellipses
$shadowBaseY = $bY + $bHeight - 8
for ($i = 20; $i -ge 1; $i--) {
    $alpha = [int](140 / (1 + $i * 0.8))
    $brush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb($alpha, 60, 50, 40))
    $padX = $i * 3
    $padY = $i * 1.2
    $g.FillEllipse($brush, ($bX - $padX), ($shadowBaseY - 4 - $padY/3), ($bWidth + $padX*2), (18 + $padY))
    $brush.Dispose()
}

# Dark contact line directly under bottle base
$darkLineBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(180, 40, 30, 25))
$g.FillRectangle($darkLineBrush, ($bX + 18), ($shadowBaseY + 2), ($bWidth - 36), 5)
$darkLineBrush.Dispose()

# Draw bottle
$g.DrawImage($cutout, $bX, $bY, $bWidth, $bHeight)

# Save
$canvas.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
Write-Output "Successfully generated: $outputPath"

$g.Dispose()
$canvas.Dispose()
$cutout.Dispose()
$src.Dispose()
$bg.Dispose()
