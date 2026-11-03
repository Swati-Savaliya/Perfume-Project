Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("$PWD/public/images/perfume_coag_antique_bottle_cutout.png")
Write-Output "Format: $($src.PixelFormat)"
Write-Output "Width: $($src.Width), Height: $($src.Height)"

$minX = $src.Width
$maxX = 0
$minY = $src.Height
$maxY = 0

for ($y = 0; $y -lt $src.Height; $y += 4) {
    for ($x = 0; $x -lt $src.Width; $x += 4) {
        $c = $src.GetPixel($x, $y)
        if ($c.A -gt 20) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Output "Cutout bounds: X: $minX .. $maxX, Y: $minY .. $maxY"
$src.Dispose()

