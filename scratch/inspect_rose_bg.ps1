Add-Type -AssemblyName System.Drawing

$bg = [System.Drawing.Bitmap]::FromFile("C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\b4cf9f58-5b5b-489a-a57e-89d816eb27d6\antique_rose_pedestal_display_1793687400970.jpg")

for ($y = 450; $y -lt 1150; $y += 50) {
    $c = $bg.GetPixel(448, $y)
    Write-Output "Y=${y} R=$($c.R) G=$($c.G) B=$($c.B)"
}

$bg.Dispose()

