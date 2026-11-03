Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile("$PWD/public/images/perfume_rose_eternelle_creative.jpg")
Write-Output "Size: $($img.Width) x $($img.Height)"
Write-Output "Center pixel (448, 600): $($img.GetPixel(448, 600))"
$img.Dispose()

