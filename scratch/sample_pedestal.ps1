Add-Type -AssemblyName System.Drawing

$p = "$PWD\public\images\white_flowers_bg.jpg"
$b = [System.Drawing.Bitmap]::FromFile($p)

for ($y = 650; $y -le 850; $y += 20) {
    $p1 = $b.GetPixel(448, $y)
    Write-Host ("Y={0} at X=448: R={1} G={2} B={3}" -f $y, $p1.R, $p1.G, $p1.B)
}

# Left and right bounds of pedestal around Y=780
for ($x = 100; $x -le 800; $x += 50) {
    $p1 = $b.GetPixel($x, 780)
    Write-Host ("X={0} at Y=780: R={1} G={2} B={3}" -f $x, $p1.R, $p1.G, $p1.B)
}

$b.Dispose()

