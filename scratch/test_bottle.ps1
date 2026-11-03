Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("$PWD/public/images/perfume_coag_king_bottle.png")
Write-Output "Format: $($src.PixelFormat)"
Write-Output "Width: $($src.Width), Height: $($src.Height)"

# Sample top-left, top-right, bottom-left, bottom-right
Write-Output "Top-Left (5,5): $($src.GetPixel(5,5))"
Write-Output "Top-Right (225,5): $($src.GetPixel(225,5))"
Write-Output "Bottom-Left (5,325): $($src.GetPixel(5,325))"
Write-Output "Bottom-Right (225,325): $($src.GetPixel(225,325))"

# Check where the bottle actually is (bounding box of non-white pixels)
$minX = $src.Width
$maxX = 0
$minY = $src.Height
$maxY = 0

for ($y = 0; $y -lt $src.Height; $y++) {
    for ($x = 0; $x -lt $src.Width; $x++) {
        $c = $src.GetPixel($x, $y)
        # If not pure white
        if ($c.R -lt 245 -or $c.G -lt 245 -or $c.B -lt 245) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Output "Bottle bounds: X: $minX .. $maxX, Y: $minY .. $maxY"
$src.Dispose()

