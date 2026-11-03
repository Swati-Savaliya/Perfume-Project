Add-Type -AssemblyName System.Drawing

$file = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded\media_1793690920050_e1560855.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($file)
Write-Host "Image 2 Size: $($bmp.Width)x$($bmp.Height)"

# Sample horizontal line Y=500
for ($x = 10; $x -lt $bmp.Width; $x += 40) {
    $p = $bmp.GetPixel($x, 500)
    Write-Host ("X={0} Y=500: R={1} G={2} B={3}" -f $x, $p.R, $p.G, $p.B)
}

# Sample vertical line X=380
for ($y = 10; $y -lt $bmp.Height; $y += 50) {
    $p = $bmp.GetPixel(380, $y)
    Write-Host ("Y={0} X=380: R={1} G={2} B={3}" -f $y, $p.R, $p.G, $p.B)
}

$bmp.Dispose()

