Add-Type -AssemblyName System.Drawing

$p = "$PWD\scratch\test_box1_render.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($p)

# Sample across horizontal line Y=550 from X=100 to 300 (left transition)
Write-Host "Left transition at Y=550:"
for ($x = 100; $x -le 260; $x += 10) {
    $c = $bmp.GetPixel($x, 550)
    Write-Host ("X={0}: R={1} G={2} B={3}" -f $x, $c.R, $c.G, $c.B)
}

# Sample across horizontal line Y=550 from X=650 to 800 (right transition)
Write-Host "Right transition at Y=550:"
for ($x = 680; $x -le 800; $x += 10) {
    $c = $bmp.GetPixel($x, 550)
    Write-Host ("X={0}: R={1} G={2} B={3}" -f $x, $c.R, $c.G, $c.B)
}

# Sample across vertical line X=448 from Y=250 to 380 (top transition)
Write-Host "Top transition at X=448:"
for ($y = 250; $y -le 380; $y += 10) {
    $c = $bmp.GetPixel(448, $y)
    Write-Host ("Y={0}: R={1} G={2} B={3}" -f $y, $c.R, $c.G, $c.B)
}

$bmp.Dispose()

