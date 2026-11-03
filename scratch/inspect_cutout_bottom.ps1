Add-Type -AssemblyName System.Drawing

$cutout = [System.Drawing.Bitmap]::FromFile("$PWD/public/images/perfume_coag_antique_bottle_cutout.png")

Write-Output "Checking bottom rows of cutout..."
for ($y = 800; $y -lt 850; $y += 5) {
    $c = $cutout.GetPixel(341, $y)
    Write-Output "Y=${y} A=$($c.A) R=$($c.R) G=$($c.G) B=$($c.B)"
}

$cutout.Dispose()
