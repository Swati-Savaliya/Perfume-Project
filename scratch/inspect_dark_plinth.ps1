Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile("$PWD/public/images/perfume_coag_antique_dark_marble.jpg")

for ($y = 200; $y -lt 1100; $y += 40) {
    $c = $img.GetPixel(448, $y)
    Write-Output "Y=${y}: R=$($c.R), G=$($c.G), B=$($c.B)"
}

$img.Dispose()

