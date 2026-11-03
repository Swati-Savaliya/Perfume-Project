Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("$PWD/public/images/perfume_coag_king_bottle.png")

# Let's inspect rows around the bottom of the bottle at X=115 (center)
for ($y = 290; $y -lt 330; $y += 2) {
    $c = $src.GetPixel(115, $y)
    Write-Output "Pixel (115, $y): R=$($c.R), G=$($c.G), B=$($c.B)"
}

$src.Dispose()

