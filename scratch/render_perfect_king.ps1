Add-Type -AssemblyName System.Drawing

$cutoutPath = "$PWD/public/images/perfume_coag_king_cutout_perfect.png"
$cutout = [System.Drawing.Bitmap]::FromFile($cutoutPath)

$w = $cutout.Width
$h = $cutout.Height

$targetW = 680
$targetH = 850

# Scale bottle to fit nicely on the canvas with breathing room
$destW = 420
$destH = [int](($h / $w) * $destW) # ~597 px
$destX = [int](($targetW - $destW) / 2)
$pedestalY = 660
$destY = $pedestalY - $destH + 35

# ==========================================
# 1. LUXURY WARM CHAMPAGNE STUDIO BACKGROUND
# ==========================================
$canvas1 = New-Object System.Drawing.Bitmap $targetW, $targetH, ([System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$g1 = [System.Drawing.Graphics]::FromImage($canvas1)
$g1.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g1.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# Studio wall gradient
$wallBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush (New-Object System.Drawing.Point 0, 0), (New-Object System.Drawing.Point 0, $targetH), ([System.Drawing.Color]::FromArgb(248, 246, 242)), ([System.Drawing.Color]::FromArgb(228, 222, 214))
$g1.FillRectangle($wallBrush, 0, 0, $targetW, $targetH)

# Golden radial spotlight behind bottle
$spotPath = New-Object System.Drawing.Drawing2D.GraphicsPath
$spotPath.AddEllipse(($targetW / 2 - 280), 120, 560, 560)
$pgb = New-Object System.Drawing.Drawing2D.PathGradientBrush $spotPath
$pgb.CenterColor = [System.Drawing.Color]::FromArgb(65, 255, 235, 180)
$pgb.SurroundColors = @([System.Drawing.Color]::Transparent)
$g1.FillPath($pgb, $spotPath)

# Architectural Pedestal
$pedBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush (New-Object System.Drawing.Point 0, $pedestalY), (New-Object System.Drawing.Point 0, $targetH), ([System.Drawing.Color]::FromArgb(236, 230, 220)), ([System.Drawing.Color]::FromArgb(208, 200, 188))
$g1.FillRectangle($pedBrush, 0, $pedestalY, $targetW, ($targetH - $pedestalY))

# Edge line highlight
$lineBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush (New-Object System.Drawing.Point 40, $pedestalY), (New-Object System.Drawing.Point ($targetW - 40), $pedestalY), ([System.Drawing.Color]::Transparent), ([System.Drawing.Color]::FromArgb(210, 255, 255, 255))
$lineBrush.SetBlendTriangularShape(0.5)
$linePen = New-Object System.Drawing.Pen $lineBrush, 2.0
$g1.DrawLine($linePen, 40, $pedestalY, ($targetW - 40), $pedestalY)

# Contact Shadow
$shadowPath = New-Object System.Drawing.Drawing2D.GraphicsPath
$shadowPath.AddEllipse(($targetW / 2 - 180), ($pedestalY - 8), 360, 32)
$sgb = New-Object System.Drawing.Drawing2D.PathGradientBrush $shadowPath
$sgb.CenterColor = [System.Drawing.Color]::FromArgb(120, 60, 50, 40)
$sgb.SurroundColors = @([System.Drawing.Color]::Transparent)
$g1.FillPath($sgb, $shadowPath)

# Floor reflection
$flipped = $cutout.Clone()
$flipped.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipY)
$cm = New-Object System.Drawing.Imaging.ColorMatrix
$cm.Matrix33 = 0.15
$ia = New-Object System.Drawing.Imaging.ImageAttributes
$ia.SetColorMatrix($cm)
$g1.DrawImage($flipped, (New-Object System.Drawing.Rectangle $destX, $pedestalY, $destW, 110), 0, ($h - 90), $w, 90, [System.Drawing.GraphicsUnit]::Pixel, $ia)

# Draw the cutout bottle cleanly
$g1.DrawImage($cutout, $destX, $destY, $destW, $destH)

$canvas1.Save("$PWD/public/images/perfume_coag_king_luxury_studio.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$g1.Dispose()
$canvas1.Dispose()

# ==========================================
# 2. ÉMERAUDE NOIR LUXURY DARK STUDIO
# ==========================================
$canvas2 = New-Object System.Drawing.Bitmap $targetW, $targetH, ([System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$g2 = [System.Drawing.Graphics]::FromImage($canvas2)
$g2.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# Dark wall
$darkWall = New-Object System.Drawing.Drawing2D.LinearGradientBrush (New-Object System.Drawing.Point 0, 0), (New-Object System.Drawing.Point 0, $targetH), ([System.Drawing.Color]::FromArgb(20, 26, 24)), ([System.Drawing.Color]::FromArgb(8, 12, 10))
$g2.FillRectangle($darkWall, 0, 0, $targetW, $targetH)

# Emerald glow
$glowPath = New-Object System.Drawing.Drawing2D.GraphicsPath
$glowPath.AddEllipse(($targetW / 2 - 260), 140, 520, 520)
$pgb2 = New-Object System.Drawing.Drawing2D.PathGradientBrush $glowPath
$pgb2.CenterColor = [System.Drawing.Color]::FromArgb(50, 16, 185, 129)
$pgb2.SurroundColors = @([System.Drawing.Color]::Transparent)
$g2.FillPath($pgb2, $glowPath)

# Pedestal
$ped2 = New-Object System.Drawing.Drawing2D.LinearGradientBrush (New-Object System.Drawing.Point 0, $pedestalY), (New-Object System.Drawing.Point 0, $targetH), ([System.Drawing.Color]::FromArgb(28, 36, 32)), ([System.Drawing.Color]::FromArgb(10, 14, 12))
$g2.FillRectangle($ped2, 0, $pedestalY, $targetW, ($targetH - $pedestalY))

# Gold accent line
$lineBrush2 = New-Object System.Drawing.Drawing2D.LinearGradientBrush (New-Object System.Drawing.Point 40, $pedestalY), (New-Object System.Drawing.Point ($targetW - 40), $pedestalY), ([System.Drawing.Color]::Transparent), ([System.Drawing.Color]::FromArgb(190, 245, 190, 80))
$lineBrush2.SetBlendTriangularShape(0.5)
$linePen2 = New-Object System.Drawing.Pen $lineBrush2, 2.0
$g2.DrawLine($linePen2, 40, $pedestalY, ($targetW - 40), $pedestalY)

# Shadow
$shadowPath2 = New-Object System.Drawing.Drawing2D.GraphicsPath
$shadowPath2.AddEllipse(($targetW / 2 - 180), ($pedestalY - 8), 360, 32)
$sgb2 = New-Object System.Drawing.Drawing2D.PathGradientBrush $shadowPath2
$sgb2.CenterColor = [System.Drawing.Color]::FromArgb(180, 0, 0, 0)
$sgb2.SurroundColors = @([System.Drawing.Color]::Transparent)
$g2.FillPath($sgb2, $shadowPath2)

# Reflection
$cm2 = New-Object System.Drawing.Imaging.ColorMatrix
$cm2.Matrix33 = 0.20
$ia2 = New-Object System.Drawing.Imaging.ImageAttributes
$ia2.SetColorMatrix($cm2)
$g2.DrawImage($flipped, (New-Object System.Drawing.Rectangle $destX, $pedestalY, $destW, 110), 0, ($h - 90), $w, 90, [System.Drawing.GraphicsUnit]::Pixel, $ia2)

# Draw bottle
$g2.DrawImage($cutout, $destX, $destY, $destW, $destH)

$canvas2.Save("$PWD/public/images/perfume_coag_king_emerald_studio.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$g2.Dispose()
$canvas2.Dispose()

$cutout.Dispose()
$flipped.Dispose()

Write-Host "Both images rendered without any white box halo!"

