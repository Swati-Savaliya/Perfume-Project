Add-Type -AssemblyName System.Drawing

$srcPath = "$PWD/public/images/perfume_noir_absolu_floral.jpg"
$macroPath = "$PWD/public/images/perfume_noir_absolu_macro.jpg"
$stillPath = "$PWD/public/images/perfume_noir_absolu_still.jpg"

$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$targetW = 896
$targetH = 1200

# 1. Generate Shot 2: Luxury Macro Flacon & Gold Collar Detail
$macroCanvas = New-Object System.Drawing.Bitmap $targetW, $targetH, ([System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$gMacro = [System.Drawing.Graphics]::FromImage($macroCanvas)
$gMacro.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gMacro.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gMacro.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Crop around the cap, gold collar, and front logo
# Center X = 448, Y = 450
$cropW = 540
$cropH = 720 # 3:4 aspect ratio
$cropX = [int](448 - ($cropW / 2)) # 178
$cropY = 160 # from cap down across COAG logo and facets

$srcRect = New-Object System.Drawing.Rectangle $cropX, $cropY, $cropW, $cropH
$destRect = New-Object System.Drawing.Rectangle 0, 0, $targetW, $targetH
$gMacro.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$macroCanvas.Save($macroPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
Write-Output "Saved Macro: $macroPath"

$gMacro.Dispose()
$macroCanvas.Dispose()

# 2. Generate Shot 3: Refined Dramatic Low-Angle with Enhanced Golden Backlight
$stillCanvas = New-Object System.Drawing.Bitmap $targetW, $targetH, ([System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$gStill = [System.Drawing.Graphics]::FromImage($stillCanvas)
$gStill.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gStill.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gStill.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Slightly tighter cinematic framing (X: 68..828, Y: 80..1090)
$crop3W = 760
$crop3H = 1013
$crop3X = [int](448 - ($crop3W / 2)) # 68
$crop3Y = 90

$src3Rect = New-Object System.Drawing.Rectangle $crop3X, $crop3Y, $crop3W, $crop3H
$dest3Rect = New-Object System.Drawing.Rectangle 0, 0, $targetW, $targetH
$gStill.DrawImage($src, $dest3Rect, $src3Rect, [System.Drawing.GraphicsUnit]::Pixel)

# Add subtle warm golden rim-light vignette in corners for distinct atmospheric depth
$vignetteBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush (
    (New-Object System.Drawing.Point 0, 0),
    (New-Object System.Drawing.Point 0, $targetH),
    [System.Drawing.Color]::FromArgb(40, 20, 15, 10),
    [System.Drawing.Color]::FromArgb(60, 5, 5, 8)
)
# Soft blend
$gStill.FillRectangle($vignetteBrush, 0, 0, $targetW, $targetH)
$vignetteBrush.Dispose()

$stillCanvas.Save($stillPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
Write-Output "Saved Still: $stillPath"

$gStill.Dispose()
$stillCanvas.Dispose()
$src.Dispose()

