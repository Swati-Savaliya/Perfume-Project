Add-Type -AssemblyName System.Drawing

$p1 = "$PWD\public\images\gift_package_packing_2.jpg"
$p2 = "$PWD\public\images\gift_package_2_box.jpg"

$b1 = [System.Drawing.Bitmap]::FromFile($p1)
Write-Host "gift_package_packing_2: $($b1.Width)x$($b1.Height)"
Write-Host "Corner 10,10:" ($b1.GetPixel(10, 10))
Write-Host "Center:" ($b1.GetPixel([int]($b1.Width/2), [int]($b1.Height/2)))
$b1.Dispose()

$b2 = [System.Drawing.Bitmap]::FromFile($p2)
Write-Host "gift_package_2_box: $($b2.Width)x$($b2.Height)"
Write-Host "Corner 10,10:" ($b2.GetPixel(10, 10))
Write-Host "Center:" ($b2.GetPixel([int]($b2.Width/2), [int]($b2.Height/2)))
$b2.Dispose()

