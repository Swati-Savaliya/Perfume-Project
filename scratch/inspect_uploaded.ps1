Add-Type -AssemblyName System.Drawing

$appDataDir = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded"
$img1 = "$appDataDir\media_1793690920044_f59f85f9.jpg"
$img2 = "$appDataDir\media_1793690920050_e1560855.jpg"
$img3 = "$appDataDir\media_1793690920051_eccd3641.jpg"

foreach ($file in @($img1, $img2, $img3)) {
    $bmp = [System.Drawing.Bitmap]::FromFile($file)
    Write-Host "File: $([System.IO.Path]::GetFileName($file)) Width: $($bmp.Width) Height: $($bmp.Height)"
    $bmp.Dispose()
}

