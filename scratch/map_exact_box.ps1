Add-Type -AssemblyName System.Drawing

$file = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded\media_1793690920044_f59f85f9.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($file)

# Let's inspect vertical slices to find the exact top edge of the lid
# Cement has R>160, G>140, B>120 (cement is brownish/tan)
# Box lid has R~60..100, G~65..110, B~80..130 (dark charcoal/slate blue)
for ($x = 200; $x -le 780; $x += 40) {
    for ($y = 220; $y -le 320; $y++) {
        $p = $bmp.GetPixel($x, $y)
        # Check when we enter the box
        # Cement brightness > 150 and R > 150
        if ($p.R -lt 140 -and $p.G -lt 140) {
            Write-Host ("Top edge at X={0} is Y={1} (R={2} G={3} B={4})" -f $x, $y, $p.R, $p.G, $p.B)
            break
        }
    }
}

# Left edge: scan from X=100 towards right at various Y
for ($y = 260; $y -le 800; $y += 40) {
    for ($x = 100; $x -le 260; $x++) {
        $p = $bmp.GetPixel($x, $y)
        if ($p.R -lt 140 -and $p.G -lt 140) {
            Write-Host ("Left edge at Y={0} is X={1} (R={2} G={3} B={4})" -f $y, $x, $p.R, $p.G, $p.B)
            break
        }
    }
}

# Right edge of the box (distinguishing box from right shadow on cement):
# In direct sunlight, the right side of the box has a vertical edge.
# Let's inspect along Y=350, 450, 550, 650, 750 around X=730..800
for ($y = 350; $y -le 750; $y += 50) {
    Write-Host ("--- Y={0} ---" -f $y)
    for ($x = 730; $x -le 770; $x += 5) {
        $p = $bmp.GetPixel($x, $y)
        Write-Host ("  X={0}: R={1} G={2} B={3}" -f $x, $p.R, $p.G, $p.B)
    }
}

$bmp.Dispose()

