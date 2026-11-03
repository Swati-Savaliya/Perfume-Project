Add-Type -AssemblyName System.Drawing

$file = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded\media_1793690920044_f59f85f9.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($file)

# Scan bottom from Y=800 to 1020, find darkest pixels (ribbon)
for ($y = 820; $y -lt 1010; $y += 20) {
    $minX = -1; $maxX = -1
    for ($x = 200; $x -lt 700; $x++) {
        $p = $bmp.GetPixel($x, $y)
        # Ribbon is dark or sparkles: brightness < 80 or high blueish satin
        # Cement is warm R>150, G>140, B>120
        if ($p.R -lt 120 -and $p.G -lt 120 -and $p.B -lt 130) {
            if ($minX -eq -1) { $minX = $x }
            $maxX = $x
        }
    }
    Write-Host ("Y={0}: Ribbon minX={1} maxX={2}" -f $y, $minX, $maxX)
}

$bmp.Dispose()

