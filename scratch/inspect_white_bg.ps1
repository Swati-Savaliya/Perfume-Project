Add-Type -AssemblyName System.Drawing

$p = "$PWD\public\images\white_flowers_bg.jpg"
$b = [System.Drawing.Bitmap]::FromFile($p)
Write-Host "white_flowers_bg.jpg: $($b.Width)x$($b.Height)"
Write-Host "Top-left (50, 50): $($b.GetPixel(50, 50))"
Write-Host "Top-center (448, 50): $($b.GetPixel(448, 50))"
Write-Host "Center (448, 600): $($b.GetPixel(448, 600))"
Write-Host "Pedestal (448, 770): $($b.GetPixel(448, 770))"
Write-Host "Bottom-center (448, 1150): $($b.GetPixel(448, 1150))"
$b.Dispose()

