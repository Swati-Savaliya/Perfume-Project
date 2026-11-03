Add-Type -AssemblyName System.Drawing

$p1 = "D:\Perfume-Project\public\images\gift_package_packing_1.jpg"
$p2 = "D:\Perfume-Project\public\images\gift_package_1.jpg"

$bmp1 = [System.Drawing.Bitmap]::FromFile($p1)
Write-Host "gift_package_packing_1.jpg: $($bmp1.Width)x$($bmp1.Height)"
Write-Host "Corner pixel:" ($bmp1.GetPixel(10, 10))
Write-Host "Center pixel:" ($bmp1.GetPixel([int]($bmp1.Width/2), [int]($bmp1.Height/2)))
$bmp1.Dispose()

$bmp2 = [System.Drawing.Bitmap]::FromFile($p2)
Write-Host "gift_package_1.jpg: $($bmp2.Width)x$($bmp2.Height)"
Write-Host "Corner pixel:" ($bmp2.GetPixel(10, 10))
Write-Host "Center pixel:" ($bmp2.GetPixel([int]($bmp2.Width/2), [int]($bmp2.Height/2)))
$bmp2.Dispose()

