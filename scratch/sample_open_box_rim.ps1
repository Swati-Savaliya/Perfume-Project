Add-Type -AssemblyName System.Drawing

$file = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded\media_1793690920051_eccd3641.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($file)

# Let's inspect along Y=200..250 to see the top wall of the open box
for ($y = 190; $y -le 250; $y += 10) {
    $p = $bmp.GetPixel(385, $y)
    Write-Host ("Top Y={0}: R={1} G={2} B={3}" -f $y, $p.R, $p.G, $p.B)
}

# Left wall around X=10..40:
for ($x = 0; $x -le 40; $x += 5) {
    $p = $bmp.GetPixel($x, 500)
    Write-Host ("Left X={0}: R={1} G={2} B={3}" -f $x, $p.R, $p.G, $p.B)
}

# Right wall around X=720..760:
for ($x = 720; $x -le 765; $x += 5) {
    $p = $bmp.GetPixel($x, 500)
    Write-Host ("Right X={0}: R={1} G={2} B={3}" -f $x, $p.R, $p.G, $p.B)
}

# Bottom wall around Y=960..1015:
for ($y = 960; $y -le 1015; $y += 10) {
    $p = $bmp.GetPixel(385, $y)
    Write-Host ("Bottom Y={0}: R={1} G={2} B={3}" -f $y, $p.R, $p.G, $p.B)
}

$bmp.Dispose()

