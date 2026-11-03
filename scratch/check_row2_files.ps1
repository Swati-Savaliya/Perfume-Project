Add-Type -AssemblyName System.Drawing

$files = @(
    "perfume_noir_still.jpg",
    "perfume_amber.jpg",
    "perfume_rose.jpg",
    "perfume_rose_eternelle_creative.jpg",
    "perfume_coag_square_warm_amber.jpg"
)

foreach ($f in $files) {
    $p = "$PWD/public/images/$f"
    if (Test-Path $p) {
        $bmp = [System.Drawing.Bitmap]::FromFile($p)
        Write-Output "$f -> Width: $($bmp.Width), Height: $($bmp.Height)"
        $bmp.Dispose()
    } else {
        Write-Output "$f not found"
    }
}

