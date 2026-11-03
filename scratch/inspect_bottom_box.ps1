Add-Type -AssemblyName System.Drawing

$file = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded\media_1793690920044_f59f85f9.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($file)

for ($y = 650; $y -le 800; $y += 10) {
    $p = $bmp.GetPixel(220, $y)
    Write-Host ("Y={0} at X=220: R={1} G={2} B={3}" -f $y, $p.R, $p.G, $p.B)
}

# Also at X=700:
for ($y = 650; $y -le 820; $y += 10) {
    $p = $bmp.GetPixel(700, $y)
    Write-Host ("Y={0} at X=700: R={1} G={2} B={3}" -f $y, $p.R, $p.G, $p.B)
}

$bmp.Dispose()

