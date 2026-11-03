Add-Type -AssemblyName System.Drawing

$p1 = "$PWD\public\images\perfume_coag_square_white_floral.jpg"
$b1 = [System.Drawing.Bitmap]::FromFile($p1)

# Check bottle location vs flower location
# Where are the non-white pixels?
for ($y = 100; $y -le 1100; $y += 100) {
    $minX = -1; $maxX = -1
    for ($x = 0; $x -lt $b1.Width; $x += 10) {
        $p = $b1.GetPixel($x, $y)
        # Not pure white:
        if ($p.R -lt 240 -or $p.G -lt 240 -or $p.B -lt 240) {
            if ($minX -eq -1) { $minX = $x }
            $maxX = $x
        }
    }
    Write-Host ("Y={0}: Content from X={1} to {2}" -f $y, $minX, $maxX)
}
$b1.Dispose()

