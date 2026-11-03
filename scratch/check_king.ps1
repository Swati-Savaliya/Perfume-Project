Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::FromFile("$PWD/public/images/perfume_coag_king_bottle.png")
Write-Host "Width: $($img.Width) Height: $($img.Height)"

# Check top-left corner
$tl = $img.GetPixel(5, 5)
Write-Host "Top-left (5,5): R=$($tl.R), G=$($tl.G), B=$($tl.B), A=$($tl.A)"

# Find cap top at midX
$midX = [int]($img.Width / 2)
for ($y = 0; $y -lt 100; $y++) {
    $p = $img.GetPixel($midX, $y)
    if ($p.R -lt 50 -and $p.G -lt 50 -and $p.B -lt 50) {
        Write-Host "Cap top at y=$y"
        break
    }
}

# Find bottle bottom at midX
for ($y = $img.Height - 1; $y -gt 200; $y--) {
    $p = $img.GetPixel($midX, $y)
    if ($p.R -lt 240 -or $p.G -lt 240 -or $p.B -lt 240) {
        Write-Host "Bottle bottom at y=$y"
        break
    }
}

# Find left and right edges at y=200
for ($x = 0; $x -lt $midX; $x++) {
    $p = $img.GetPixel($x, 200)
    if ($p.R -lt 240 -or $p.G -lt 240 -or $p.B -lt 240) {
        Write-Host "Bottle left at x=$x"
        break
    }
}
for ($x = $img.Width - 1; $x -gt $midX; $x--) {
    $p = $img.GetPixel($x, 200)
    if ($p.R -lt 240 -or $p.G -lt 240 -or $p.B -lt 240) {
        Write-Host "Bottle right at x=$x"
        break
    }
}

$img.Dispose()

