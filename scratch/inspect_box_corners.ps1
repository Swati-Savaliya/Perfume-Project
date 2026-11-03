Add-Type -AssemblyName System.Drawing

$file = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded\media_1793690920044_f59f85f9.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($file)

# Let's inspect along Y=250..270 to find the top edge
# Top edge goes from top-left (around X=250, Y=250) to top-right (around X=745, Y=265)
Write-Host "Top-left corner search:"
for ($x = 230; $x -le 270; $x += 5) {
    for ($y = 240; $y -le 270; $y += 2) {
        $p = $bmp.GetPixel($x, $y)
        if ($p.R -lt 120 -and $p.G -lt 120) {
            Write-Host ("Top-left edge at X={0} is Y={1}" -f $x, $y)
            break
        }
    }
}

Write-Host "Top-right corner search:"
for ($x = 730; $x -le 760; $x += 5) {
    for ($y = 250; $y -le 280; $y += 2) {
        $p = $bmp.GetPixel($x, $y)
        if ($p.R -lt 120 -and $p.G -lt 120) {
            Write-Host ("Top-right edge at X={0} is Y={1}" -f $x, $y)
            break
        }
    }
}

Write-Host "Left edge search (X=140..170):"
for ($y = 600; $y -le 700; $y += 20) {
    for ($x = 130; $x -le 170; $x += 2) {
        $p = $bmp.GetPixel($x, $y)
        if ($p.R -lt 120 -and $p.G -lt 120) {
            Write-Host ("Left edge at Y={0} is X={1}" -f $y, $x)
            break
        }
    }
}

Write-Host "Right edge search (X=730..770):"
for ($y = 300; $y -le 750; $y += 50) {
    for ($x = 760; $x -ge 730; $x -= 2) {
        $p = $bmp.GetPixel($x, $y)
        # Check box surface: box surface is bluish-grey (R~80..100, G~85..105, B~105..125)
        # Shadow on ground is darker (R<50) and cement is bright (R>180)
        if ($p.R -gt 65 -and $p.B -gt 85) {
            Write-Host ("Right edge at Y={0} is X={1} (R={2} G={3} B={4})" -f $y, $x, $p.R, $p.G, $p.B)
            break
        }
    }
}

$bmp.Dispose()

