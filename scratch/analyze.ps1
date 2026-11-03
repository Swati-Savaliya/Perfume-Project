Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::FromFile("$PWD/public/images/perfume_coag_antique_floral.jpg")
$midX = 341

for ($x = 100; $x -lt $midX; $x++) {
    $p = $img.GetPixel($x, 200)
    if ($p.R -lt 70 -and $p.G -lt 70 -and $p.B -lt 70) {
        Write-Host "Cap Left at x=$x"
        break
    }
}
for ($x = 580; $x -gt $midX; $x--) {
    $p = $img.GetPixel($x, 200)
    if ($p.R -lt 70 -and $p.G -lt 70 -and $p.B -lt 70) {
        Write-Host "Cap Right at x=$x"
        break
    }
}

# Gold ring collar at y=295
for ($x = 100; $x -lt $midX; $x++) {
    $p = $img.GetPixel($x, 295)
    if ($p.R -gt 150 -and $p.G -gt 120 -and $p.B -lt 80) {
        Write-Host "Gold Collar Left at x=$x"
        break
    }
}
for ($x = 580; $x -gt $midX; $x--) {
    $p = $img.GetPixel($x, 295)
    if ($p.R -gt 150 -and $p.G -gt 120 -and $p.B -lt 80) {
        Write-Host "Gold Collar Right at x=$x"
        break
    }
}

# Shoulder top of white bottle at midX
for ($y = 280; $y -lt 350; $y++) {
    $p = $img.GetPixel($midX, $y)
    if ($p.R -gt 230 -and $p.G -gt 230 -and $p.B -gt 230) {
        Write-Host "Shoulder Top at y=$y"
        break
    }
}

$img.Dispose()
