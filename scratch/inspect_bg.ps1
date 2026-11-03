Add-Type -AssemblyName System.Drawing

$bg = [System.Drawing.Bitmap]::FromFile("C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\b4cf9f58-5b5b-489a-a57e-89d816eb27d6\luxury_perfume_white_flowers_background_1793686551695.jpg")
Write-Output "BG Width: $($bg.Width), Height: $($bg.Height)"

for ($y = 400; $y -lt 1100; $y += 50) {
    $c = $bg.GetPixel(448, $y)
    Write-Output "Y=${y} R=$($c.R) G=$($c.G) B=$($c.B)"
}

$bg.Dispose()
