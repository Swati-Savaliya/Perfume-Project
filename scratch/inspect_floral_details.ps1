Add-Type -AssemblyName System.Drawing

$files = @(
    'perfume_coag_antique_roses.jpg',
    'perfume_coag_king_floral_studio.jpg',
    'perfume_coag_antique_floral.jpg',
    'perfume_coag_square_white_floral.jpg'
)

foreach ($f in $files) {
    $p = "$PWD\public\images\$f"
    if (Test-Path $p) {
        $bmp = [System.Drawing.Bitmap]::FromFile($p)
        Write-Host "--- $f ($($bmp.Width)x$($bmp.Height)) ---"
        Write-Host "Top-left (50, 50): $($bmp.GetPixel(50, 50))"
        Write-Host "Top-center (448, 50): $($bmp.GetPixel(448, 50))"
        Write-Host "Top-right (846, 50): $($bmp.GetPixel(846, 50))"
        Write-Host "Bottom-center (448, 1150): $($bmp.GetPixel(448, 1150))"
        $bmp.Dispose()
    }
}

