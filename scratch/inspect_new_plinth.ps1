Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::FromFile("C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\b4cf9f58-5b5b-489a-a57e-89d816eb27d6\luxury_perfume_podium_background_1793688336865.jpg")

for ($y = 450; $y -lt 1150; $y += 40) {
    $c = $img.GetPixel(448, $y)
    Write-Output "Y=${y}: R=$($c.R), G=$($c.G), B=$($c.B)"
}

$img.Dispose()

