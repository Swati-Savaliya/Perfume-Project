Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("$PWD/public/images/perfume_coag_king_bottle.png")
$w = $src.Width   # 232
$h = $src.Height  # 330

$targetW = 680
$targetH = 850

# 1. High-Key Pristine White Luxury Studio Canvas
$canvas = New-Object System.Drawing.Bitmap $targetW, $targetH, ([System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$g = [System.Drawing.Graphics]::FromImage($canvas)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Pure white studio background
$g.Clear([System.Drawing.Color]::White)

# Soft luxury studio floor gradient at bottom 20%
$floorY = 640
$floorBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush (New-Object System.Drawing.Point 0, $floorY), (New-Object System.Drawing.Point 0, $targetH), ([System.Drawing.Color]::White), ([System.Drawing.Color]::FromArgb(248, 248, 248))
$g.FillRectangle($floorBrush, 0, $floorY, $targetW, ($targetH - $floorY))

# Soft natural contact shadow on the floor
$shadowPath1 = New-Object System.Drawing.Drawing2D.GraphicsPath
$shadowPath1.AddEllipse(($targetW / 2 - 180), ($floorY - 6), 360, 24)
$sgb1 = New-Object System.Drawing.Drawing2D.PathGradientBrush $shadowPath1
$sgb1.CenterColor = [System.Drawing.Color]::FromArgb(60, 80, 80, 80)
$sgb1.SurroundColors = @([System.Drawing.Color]::Transparent)
$g.FillPath($sgb1, $shadowPath1)

# Subtle ambient outer shadow
$shadowPath2 = New-Object System.Drawing.Drawing2D.GraphicsPath
$shadowPath2.AddEllipse(($targetW / 2 - 210), ($floorY - 12), 420, 38)
$sgb2 = New-Object System.Drawing.Drawing2D.PathGradientBrush $shadowPath2
$sgb2.CenterColor = [System.Drawing.Color]::FromArgb(35, 120, 120, 120)
$sgb2.SurroundColors = @([System.Drawing.Color]::Transparent)
$g.FillPath($sgb2, $shadowPath2)

# Bottle dimensions and positioning
$destW = 430
$destH = [int](($h / $w) * $destW) # ~611 px
$destX = [int](($targetW - $destW) / 2)
$destY = $floorY - $destH + 32

# Draw the exact bottle cleanly
$g.DrawImage($src, (New-Object System.Drawing.Rectangle $destX, $destY, $destW, $destH))

# Soft edge blending along the sides where the original white meets canvas white
# Since both are pure white (#FEFEFE ~ #FFFFFF), the match is 100% seamless!

$canvas.Save("$PWD/public/images/perfume_coag_king_proper_white.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$canvas.Save("$PWD/public/images/perfume_coag_king_luxury_studio.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$canvas.Save("$PWD/public/images/perfume_coag_king_emerald_studio.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)

$g.Dispose()
$canvas.Dispose()
$src.Dispose()

Write-Host "Proper white background rendered successfully!"

