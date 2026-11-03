Add-Type -AssemblyName System.Drawing

$file = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded\media_1793690920044_f59f85f9.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($file)

# Let's inspect the left base from X=140 to 300, Y=650 to 800
for ($y = 650; $y -le 780; $y += 20) {
    for ($x = 140; $x -le 240; $x += 20) {
        $p = $bmp.GetPixel($x, $y)
        Write-Host ("Y={0} X={1}: R={2} G={3} B={4}" -f $y, $x, $p.R, $p.G, $p.B)
    }
}

# Let's inspect the right base from X=700 to 760, Y=650 to 800
for ($y = 650; $y -le 780; $y += 20) {
    for ($x = 700; $x -le 760; $x += 20) {
        $p = $bmp.GetPixel($x, $y)
        Write-Host ("Y={0} X={1}: R={2} G={3} B={4}" -f $y, $x, $p.R, $p.G, $p.B)
    }
}

$bmp.Dispose()

