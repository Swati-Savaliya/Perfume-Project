Add-Type -AssemblyName System.Drawing

$p = "$PWD\scratch\test_box1_render.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($p)
Write-Host "Image size: $($bmp.Width)x$($bmp.Height)"
Write-Host "Box top-center (448, 400):" ($bmp.GetPixel(448, 400))
Write-Host "Box ribbon knot (448, 860):" ($bmp.GetPixel(448, 860))
Write-Host "Studio background top (448, 100):" ($bmp.GetPixel(448, 100))
Write-Host "Studio background left (50, 500):" ($bmp.GetPixel(50, 500))
Write-Host "Plinth corner (50, 1000):" ($bmp.GetPixel(50, 1000))
$bmp.Dispose()

