Add-Type -AssemblyName System.Drawing

$p = "$PWD\scratch\test_box1_render.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($p)

Write-Host "Ribbon bottom check at Y=900:"
for ($x = 450; $x -le 650; $x += 20) {
    $c = $bmp.GetPixel($x, 900)
    Write-Host ("X={0}: R={1} G={2} B={3}" -f $x, $c.R, $c.G, $c.B)
}

Write-Host "Ribbon bottom check at Y=950:"
for ($x = 480; $x -le 620; $x += 20) {
    $c = $bmp.GetPixel($x, 950)
    Write-Host ("X={0}: R={1} G={2} B={3}" -f $x, $c.R, $c.G, $c.B)
}

$bmp.Dispose()

