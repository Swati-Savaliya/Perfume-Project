Add-Type -AssemblyName System.Drawing

$srcPath = "$PWD/public/images/perfume_fleur_blanche_floral.jpg"
$macroPath = "$PWD/public/images/perfume_fleur_blanche_macro.jpg"
$stillPath = "$PWD/public/images/perfume_fleur_blanche_still.jpg"

$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$targetW = 896
$targetH = 1200

# 1. Macro Shot of Fleur Blanche
$macroCanvas = New-Object System.Drawing.Bitmap $targetW, $targetH, ([System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$gMacro = [System.Drawing.Graphics]::FromImage($macroCanvas)
$gMacro.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gMacro.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gMacro.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

$cropW = 540
$cropH = 720
$cropX = [int](448 - ($cropW / 2))
$cropY = 320 # cap and rose crystal body

$srcRect = New-Object System.Drawing.Rectangle $cropX, $cropY, $cropW, $cropH
$destRect = New-Object System.Drawing.Rectangle 0, 0, $targetW, $targetH
$gMacro.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$macroCanvas.Save($macroPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
Write-Output "Saved Rose Macro: $macroPath"
$gMacro.Dispose()
$macroCanvas.Dispose()

# 2. Still Shot of Fleur Blanche
$stillCanvas = New-Object System.Drawing.Bitmap $targetW, $targetH, ([System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$gStill = [System.Drawing.Graphics]::FromImage($stillCanvas)
$gStill.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gStill.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gStill.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

$crop3W = 760
$crop3H = 1013
$crop3X = [int](448 - ($crop3W / 2))
$crop3Y = 150

$src3Rect = New-Object System.Drawing.Rectangle $crop3X, $crop3Y, $crop3W, $crop3H
$dest3Rect = New-Object System.Drawing.Rectangle 0, 0, $targetW, $targetH
$gStill.DrawImage($src, $dest3Rect, $src3Rect, [System.Drawing.GraphicsUnit]::Pixel)

$stillCanvas.Save($stillPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
Write-Output "Saved Rose Still: $stillPath"
$gStill.Dispose()
$stillCanvas.Dispose()
$src.Dispose()

