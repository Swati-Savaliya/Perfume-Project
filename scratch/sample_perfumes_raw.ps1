Add-Type -AssemblyName System.Drawing

$file = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded\media_1793690920051_eccd3641.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($file)
Write-Host "Source: $($bmp.Width)x$($bmp.Height)"

# Where are the outer box edges?
# In media_1793690920051_eccd3641.jpg:
# Top flap: Y=0..200
# Silk bed starts around Y=230?
# Let's inspect along vertical line X=385
for ($y = 150; $y -le 350; $y += 20) {
    Write-Host ("Y={0}: {1}" -f $y, $bmp.GetPixel(385, $y))
}

# Bottom:
for ($y = 850; $y -le 1020; $y += 20) {
    Write-Host ("Y={0}: {1}" -f $y, $bmp.GetPixel(385, $y))
}

# Left:
for ($x = 0; $x -le 100; $x += 15) {
    Write-Host ("X={0} at Y=500: {1}" -f $x, $bmp.GetPixel($x, 500))
}

# Right:
for ($x = 680; $x -le 770; $x += 15) {
    Write-Host ("X={0} at Y=500: {1}" -f $x, $bmp.GetPixel($x, 500))
}

$bmp.Dispose()

