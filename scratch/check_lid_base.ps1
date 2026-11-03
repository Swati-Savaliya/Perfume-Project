Add-Type -AssemblyName System.Drawing

$p = "$PWD\scratch\proper_luxury_box_studio.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($p)

# In scratch/render_proper_luxury_studio.ps1:
# drawX = 73, drawY = 150
# Source lidBottom was around Y=660, in target that is 150 + 660 * (821 / 1024) ≈ 150 + 529 = 679!
# Let's inspect horizontal lines Y=660, 680, 700, 720, 740 across X=100 to 250 (left side)
for ($y = 660; $y -le 740; $y += 20) {
    Write-Host ("--- Target Y={0} ---" -f $y)
    for ($x = 140; $x -le 240; $x += 20) {
        $c = $bmp.GetPixel($x, $y)
        Write-Host ("  X={0}: R={1} G={2} B={3}" -f $x, $c.R, $c.G, $c.B)
    }
}

$bmp.Dispose()

