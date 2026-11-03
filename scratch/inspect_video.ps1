$shell = New-Object -ComObject Shell.Application
$folder = $shell.Namespace("D:\Perfume-Project\public\videos")
$file = $folder.ParseName("Video_01.mp4")

for ($i = 0; $i -lt 320; $i++) {
    $name = $folder.GetDetailsOf($null, $i)
    $val = $folder.GetDetailsOf($file, $i)
    if ($val) {
        Write-Host ("{0}: {1} = {2}" -f $i, $name, $val)
    }
}
