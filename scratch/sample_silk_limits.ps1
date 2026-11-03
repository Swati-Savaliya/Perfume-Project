Add-Type -AssemblyName System.Drawing

$file = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded\media_1793690920051_eccd3641.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($file)

# Check top flap from Y=0 to 220
Write-Host "Top region:"
for ($y = 10; $y -le 220; $y += 30) {
    Write-Host ("Y={0}: {1}" -f $y, $bmp.GetPixel(385, $y))
}

# The silk fabric actually begins around Y=210!
# At the bottom, where does the silk fabric end?
Write-Host "Bottom region:"
for ($y = 800; $y -le 1000; $y += 30) {
    Write-Host ("Y={0}: {1}" -f $y, $bmp.GetPixel(385, $y))
}

$bmp.Dispose()

