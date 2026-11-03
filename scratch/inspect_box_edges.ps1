Add-Type -AssemblyName System.Drawing

$file = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded\media_1793690920044_f59f85f9.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($file)

# Let's inspect box top edge:
# Where does the top edge start?
for ($y = 230; $y -le 275; $y += 5) {
    $p1 = $bmp.GetPixel(300, $y)
    $p2 = $bmp.GetPixel(500, $y)
    $p3 = $bmp.GetPixel(700, $y)
    Write-Host ("Y={0}: (300) R={1} G={2} B={3} | (500) R={4} G={5} B={6} | (700) R={7} G={8} B={9}" -f $y, $p1.R, $p1.G, $p1.B, $p2.R, $p2.G, $p2.B, $p3.R, $p3.G, $p3.B)
}

# Left edge around Y=450:
for ($x = 160; $x -le 220; $x += 5) {
    $p = $bmp.GetPixel($x, 450)
    Write-Host ("X={0} Y=450: R={1} G={2} B={3}" -f $x, $p.R, $p.G, $p.B)
}

# Right edge around Y=450:
for ($x = 730; $x -le 800; $x += 5) {
    $p = $bmp.GetPixel($x, 450)
    Write-Host ("X={0} Y=450: R={1} G={2} B={3}" -f $x, $p.R, $p.G, $p.B)
}

$bmp.Dispose()

