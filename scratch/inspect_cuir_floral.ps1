Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile("$PWD/public/images/perfume_cuir_majestueux_floral.jpg")
Write-Output "Size: $($img.Width) x $($img.Height)"

# Sample center vertical line to locate cap, logo, and base
for ($y = 100; $y -lt 1100; $y += 50) {
    $c = $img.GetPixel(448, $y)
    Write-Output "Y=${y}: R=$($c.R), G=$($c.G), B=$($c.B)"
}

$img.Dispose()

