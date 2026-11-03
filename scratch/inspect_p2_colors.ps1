Add-Type -AssemblyName System.Drawing

$b = [System.Drawing.Bitmap]::FromFile("$PWD\public\images\gift_package_packing_2.jpg")
Write-Host "gift_package_packing_2:"
Write-Host "  Top 100,100:" ($b.GetPixel(100, 100))
Write-Host "  Mid 600,200:" ($b.GetPixel(600, 200))
Write-Host "  Bottom 600,700:" ($b.GetPixel(600, 700))
$b.Dispose()

