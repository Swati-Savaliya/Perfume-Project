Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile("$PWD/public/images/perfume_rose_eternelle_creative.jpg")
Write-Output "Size: $($img.Width) x $($img.Height)"
for ($y = 200; $y -lt 1100; $y += 100) {
    $c = $img.GetPixel(448, $y)
    Write-Output "Y=${y}: R=$($c.R), G=$($c.G), B=$($c.B)"
}
$img.Dispose()

