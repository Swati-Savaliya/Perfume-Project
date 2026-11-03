Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("$PWD/public/images/perfume_coag_antique_floral.jpg")
$w = $src.Width
$h = $src.Height

# Create 32-bit ARGB bitmap
$out = New-Object System.Drawing.Bitmap $w, $h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Helper function to check if point (x,y) is inside the bottle
function Test-InsideBottle($x, $y) {
    # 1. Cap: rounded cylinder (x: 232..454, y: 104..290)
    if ($y -ge 104 -and $y -le 290) {
        $capLeft = 232
        $capRight = 454
        # Rounded top corners
        if ($y -lt 120) {
            $dy = 120 - $y
            if ($x -lt ($capLeft + $dy) -or $x -gt ($capRight - $dy)) { return 0 }
        }
        if ($x -ge $capLeft -and $x -le $capRight) { return 1 }
    }

    # 2. Gold Neck / Collar (x: 256..430, y: 288..314)
    if ($y -ge 288 -and $y -le 314) {
        if ($x -ge 256 -and $x -le 430) { return 1 }
    }

    # 3. Main Bottle Body (x: 130..558, y: 312..842)
    if ($y -ge 312 -and $y -le 842) {
        $bodyLeft = 130
        $bodyRight = 558
        $cornerR = 26

        # Top-left corner
        if ($x -lt ($bodyLeft + $cornerR) -and $y -lt (312 + $cornerR)) {
            $dx = ($bodyLeft + $cornerR) - $x
            $dy = (312 + $cornerR) - $y
            if (($dx*$dx + $dy*$dy) -gt ($cornerR*$cornerR)) { return 0 }
        }
        # Top-right corner
        if ($x -gt ($bodyRight - $cornerR) -and $y -lt (312 + $cornerR)) {
            $dx = $x - ($bodyRight - $cornerR)
            $dy = (312 + $cornerR) - $y
            if (($dx*$dx + $dy*$dy) -gt ($cornerR*$cornerR)) { return 0 }
        }
        # Bottom-left corner
        if ($x -lt ($bodyLeft + $cornerR) -and $y -gt (842 - $cornerR)) {
            $dx = ($bodyLeft + $cornerR) - $x
            $dy = $y - (842 - $cornerR)
            if (($dx*$dx + $dy*$dy) -gt ($cornerR*$cornerR)) { return 0 }
        }
        # Bottom-right corner
        if ($x -gt ($bodyRight - $cornerR) -and $y -gt (842 - $cornerR)) {
            $dx = $x - ($bodyRight - $cornerR)
            $dy = $y - (842 - $cornerR)
            if (($dx*$dx + $dy*$dy) -gt ($cornerR*$cornerR)) { return 0 }
        }

        if ($x -ge $bodyLeft -and $x -le $bodyRight) { return 1 }
    }

    return 0
}

Write-Host "Extracting bottle..."
# Use LockBits for high speed
$rect = New-Object System.Drawing.Rectangle 0, 0, $w, $h
$srcData = $src.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$outData = $out.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::WriteOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

$bytes = $w * $h * 4
$pixelBuf = New-Object byte[] $bytes
[System.Runtime.InteropServices.Marshal]::Copy($srcData.Scan0, $pixelBuf, 0, $bytes)

$outBuf = New-Object byte[] $bytes

for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $idx = ($y * $w + $x) * 4
        $inside = Test-InsideBottle $x $y

        if ($inside -eq 1) {
            # Check edge distance for 2px soft anti-aliased feathering
            $edge = 0
            if ((Test-InsideBottle ($x-1) $y) -eq 0 -or (Test-InsideBottle ($x+1) $y) -eq 0 -or
                (Test-InsideBottle $x ($y-1)) -eq 0 -or (Test-InsideBottle $x ($y+1)) -eq 0) {
                $edge = 1
            }

            $outBuf[$idx] = $pixelBuf[$idx]         # Blue
            $outBuf[$idx + 1] = $pixelBuf[$idx + 1] # Green
            $outBuf[$idx + 2] = $pixelBuf[$idx + 2] # Red
            if ($edge -eq 1) {
                $outBuf[$idx + 3] = 180              # Soft Alpha on edge
            } else {
                $outBuf[$idx + 3] = 255              # Full Alpha
            }
        } else {
            $outBuf[$idx] = 0
            $outBuf[$idx + 1] = 0
            $outBuf[$idx + 2] = 0
            $outBuf[$idx + 3] = 0                   # Transparent
        }
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($outBuf, 0, $outData.Scan0, $bytes)
$src.UnlockBits($srcData)
$out.UnlockBits($outData)

$out.Save("$PWD/public/images/coag_antique_cutout_clean.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved coag_antique_cutout_clean.png successfully!"

$src.Dispose()
$out.Dispose()

