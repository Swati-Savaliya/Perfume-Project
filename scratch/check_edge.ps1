Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("$PWD/public/images/perfume_coag_king_bottle.png")

for ($x = 180; $x -lt 232; $x += 5) {
    $c = $src.GetPixel($x, 300)
    Write-Output "Pixel ($x, 300): R=$($c.R), G=$($c.G), B=$($c.B)"
}

$src.Dispose()

