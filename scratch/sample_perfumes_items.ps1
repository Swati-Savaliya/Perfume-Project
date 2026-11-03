Add-Type -AssemblyName System.Drawing

$file = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded\media_1793690920051_eccd3641.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($file)

# The King bottle cap is at top-left:
# Antique tester is at top-right:
# Lagacy tester is at bottom-left:
# Antique bottle is at bottom-right:
Write-Host "Finding top of King bottle cap around X=380, Y=250..350:"
for ($y = 250; $y -le 350; $y += 10) {
    $p = $bmp.GetPixel(380, $y)
    Write-Host ("Y={0}: {1}" -f $y, $p)
}

# The Antique tester spray at top-right is around X=550..700, Y=320..420
# The Lagacy tester spray at bottom-left is around X=150..500, Y=700..780
# The Antique square bottle is around X=550..720, Y=480..850

$bmp.Dispose()

