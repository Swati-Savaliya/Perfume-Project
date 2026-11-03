Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("$PWD/public/images/perfume_coag_antique_bottle_cutout.png")

# Check X bounds across rows 810 to 845
for ($y = 810; $y -le 842; $y += 4) {
    $minX = 1000
    $maxX = -1
    for ($x = 0; $x -lt $src.Width; $x++) {
        $c = $src.GetPixel($x, $y)
        if ($c.A -gt 20) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
        }
    }
    Write-Output "Y=${y}: X span = ${minX} .. ${maxX}"
}

$src.Dispose()

