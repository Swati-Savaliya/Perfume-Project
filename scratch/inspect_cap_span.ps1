Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile("$PWD/public/images/perfume_coag_antique_dark_marble.jpg")

$minX = 1000
$maxX = -1
for ($x = 0; $x -lt $img.Width; $x++) {
    $c = $img.GetPixel($x, 400)
    # Fake cap is dark R < 30
    if ($c.R -lt 30 -and $c.G -lt 30 -and $c.B -lt 30) {
        if ($x -lt $minX) { $minX = $x }
        if ($x -gt $maxX) { $maxX = $x }
    }
}
Write-Output "Fake cap at Y=400 spans X: $minX .. $maxX (Width = $($maxX - $minX))"

$img.Dispose()

