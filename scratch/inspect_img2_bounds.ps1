Add-Type -AssemblyName System.Drawing

$file = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded\media_1793690920050_e1560855.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($file)

# Let's inspect where the open box interior is:
# The box has outer rim and lid.
# Let's check X=0..771, Y=0..1024
# Where does the velvet start?
Write-Host "Image 2: $($bmp.Width)x$($bmp.Height)"

# Top lid is at Y=0..280?
for ($y = 200; $y -le 350; $y += 20) {
    $p = $bmp.GetPixel(300, $y)
    Write-Host ("Y={0} at X=300: R={1} G={2} B={3}" -f $y, $p.R, $p.G, $p.B)
}

# Left edge:
for ($x = 0; $x -le 100; $x += 10) {
    $p = $bmp.GetPixel($x, 600)
    Write-Host ("X={0} at Y=600: R={1} G={2} B={3}" -f $x, $p.R, $p.G, $p.B)
}

# Right edge:
for ($x = 680; $x -le 770; $x += 10) {
    $p = $bmp.GetPixel($x, 600)
    Write-Host ("X={0} at Y=600: R={1} G={2} B={3}" -f $x, $p.R, $p.G, $p.B)
}

# Bottom edge:
for ($y = 900; $y -le 1020; $y += 20) {
    $p = $bmp.GetPixel(300, $y)
    Write-Host ("Y={0} at X=300: R={1} G={2} B={3}" -f $y, $p.R, $p.G, $p.B)
}

$bmp.Dispose()

