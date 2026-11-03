Add-Type -AssemblyName System.Drawing

$file = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded\media_1793690920044_f59f85f9.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($file)

# Sample along X=450 (middle vertical)
for ($y = 100; $y -lt $bmp.Height; $y += 30) {
    $p = $bmp.GetPixel(450, $y)
    Write-Host ("Y={0} R={1} G={2} B={3}" -f $y, $p.R, $p.G, $p.B)
}

$bmp.Dispose()

