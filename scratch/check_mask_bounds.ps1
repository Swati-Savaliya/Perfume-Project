Add-Type -AssemblyName System.Drawing

$mask = [System.Drawing.Bitmap]::FromFile("$PWD\scratch\box1_mask.png")

for ($y = 300; $y -le 850; $y += 50) {
    $minX = -1; $maxX = -1
    for ($x = 0; $x -lt $mask.Width; $x++) {
        $p = $mask.GetPixel($x, $y)
        if ($p.A -gt 128) {
            if ($minX -eq -1) { $minX = $x }
            $maxX = $x
        }
    }
    Write-Host ("Y={0}: minX={1} maxX={2}" -f $y, $minX, $maxX)
}

$mask.Dispose()

