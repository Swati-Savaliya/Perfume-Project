Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile("$PWD/public/images/perfume_coag_antique_dark_marble.jpg")

$minX = 1000
$maxX = -1
for ($x = 350; $x -le 550; $x++) {
    $c = $img.GetPixel($x, 400)
    if ($c.R -lt 30) {
        if ($x -lt $minX) { $minX = $x }
        if ($x -gt $maxX) { $maxX = $x }
    }
}
Write-Output "Fake cap near center spans X: $minX .. $maxX (Width = $($maxX - $minX))"

$img.Dispose()

