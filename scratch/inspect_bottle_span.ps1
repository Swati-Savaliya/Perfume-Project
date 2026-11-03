Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile("$PWD/public/images/perfume_coag_antique_dark_marble.jpg")

$minX = 1000
$maxX = -1
for ($x = 0; $x -lt $img.Width; $x++) {
    $c = $img.GetPixel($x, 750)
    # White bottle body is R > 150
    if ($c.R -gt 150 -and $c.G -gt 150 -and $c.B -gt 150) {
        if ($x -lt $minX) { $minX = $x }
        if ($x -gt $maxX) { $maxX = $x }
    }
}
Write-Output "Bottle at Y=750 spans X: $minX .. $maxX (Width = $($maxX - $minX))"

$img.Dispose()

