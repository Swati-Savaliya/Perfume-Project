Add-Type -AssemblyName System.Drawing

$file = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded\media_1793690920044_f59f85f9.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($file)

Write-Host "Top-left 10,10:" $bmp.GetPixel(10, 10)
Write-Host "Center 467,512:" $bmp.GetPixel(467, 512)
Write-Host "Bottom-left 10,1000:" $bmp.GetPixel(10, 1000)

for ($x = 50; $x -lt $bmp.Width; $x += 50) {
    $p = $bmp.GetPixel($x, 500)
    Write-Host ("X={0} R={1} G={2} B={3}" -f $x, $p.R, $p.G, $p.B)
}

$bmp.Dispose()
