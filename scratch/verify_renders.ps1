Add-Type -AssemblyName System.Drawing

$files = @(
    "$PWD\scratch\test_box1_render.jpg",
    "$PWD\scratch\test_perfumes_render.jpg",
    "$PWD\scratch\test_accessories_render.jpg"
)

foreach ($f in $files) {
    $bmp = [System.Drawing.Bitmap]::FromFile($f)
    Write-Host "$([System.IO.Path]::GetFileName($f)): $($bmp.Width)x$($bmp.Height)"
    $bmp.Dispose()
}

