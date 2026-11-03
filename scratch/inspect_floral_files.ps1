Add-Type -AssemblyName System.Drawing

foreach ($name in @('perfume_coag_square_white_floral.jpg', 'perfume_fleur_blanche_floral.jpg', 'perfume_coag_king_floral_studio.jpg', 'perfume_coag_antique_roses.jpg')) {
    $p = "$PWD\public\images\$name"
    if (Test-Path $p) {
        $bmp = [System.Drawing.Bitmap]::FromFile($p)
        Write-Host ("{0}: {1}x{2}" -f $name, $bmp.Width, $bmp.Height)
        Write-Host ("  Top 100,100: {0}" -f $bmp.GetPixel(100, 100))
        Write-Host ("  Center: {0}" -f $bmp.GetPixel([int]($bmp.Width/2), [int]($bmp.Height/2)))
        $bmp.Dispose()
    }
}
