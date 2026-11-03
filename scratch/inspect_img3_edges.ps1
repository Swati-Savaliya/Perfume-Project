Add-Type -AssemblyName System.Drawing

$file = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded\media_1793690920051_eccd3641.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($file)

# Let's inspect edges: Top, Bottom, Left, Right
Write-Host "Top edge (Y=0..20, X=380):"
for ($y = 0; $y -le 20; $y += 5) {
    Write-Host ("Y={0}: {1}" -f $y, $bmp.GetPixel(380, $y))
}

Write-Host "Bottom edge (Y=1000..1023, X=380):"
for ($y = 1000; $y -le 1023; $y += 5) {
    Write-Host ("Y={0}: {1}" -f $y, $bmp.GetPixel(380, $y))
}

Write-Host "Left edge (X=0..20, Y=500):"
for ($x = 0; $x -le 20; $x += 5) {
    Write-Host ("X={0}: {1}" -f $x, $bmp.GetPixel($x, 500))
}

Write-Host "Right edge (X=750..770, Y=500):"
for ($x = 750; $x -le 770; $x += 5) {
    Write-Host ("X={0}: {1}" -f $x, $bmp.GetPixel($x, 500))
}

$bmp.Dispose()

