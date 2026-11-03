Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile("$PWD/public/images/perfume_noir_absolu_floral.jpg")
Write-Output "Size: $($img.Width) x $($img.Height)"

# Sample center vertical line
for ($y = 100; $y -lt 1100; $y += 50) {
    $c = $img.GetPixel(448, $y)
    Write-Output "Y=${y}: R=$($c.R), G=$($c.G), B=$($c.B)"
}

$img.Dispose()

