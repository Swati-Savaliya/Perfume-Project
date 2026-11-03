$code = @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;

public class BoxSegmenter
{
    public static void Segment(string srcPath, string maskPath)
    {
        using (Bitmap src = (Bitmap)Image.FromFile(srcPath))
        {
            int w = src.Width;
            int h = src.Height;

            using (Bitmap mask = new Bitmap(w, h, PixelFormat.Format32bppArgb))
            {
                for (int y = 0; y < h; y++)
                {
                    for (int x = 0; x < w; x++)
                    {
                        Color c = src.GetPixel(x, y);
                        
                        // Check if pixel belongs to cement floor
                        // Cement is warm/grey: R > 130, G > 115, B > 95
                        // Box is dark: R < 125, G < 125, B < 140
                        // Ribbon is very dark (< 80) except satin highlights (where R=G=B but < 170)
                        
                        bool isCement = false;
                        
                        // If near top (y < 235), it's all cement
                        if (y < 235) isCement = true;
                        // If far left (x < 140) and outside box shadow
                        else if (x < 135) isCement = true;
                        // If far right (x > 820)
                        else if (x > 820) isCement = true;
                        // If bottom (y > 990) and not ribbon
                        else if (y > 990 && (x < 570 || x > 620)) isCement = true;
                        else
                        {
                            // Concrete has high brightness and warm tint (R >= G >= B usually)
                            double brightness = (c.R * 0.299 + c.G * 0.587 + c.B * 0.114);
                            if (brightness > 135 && c.R > 125 && c.G > 110)
                            {
                                isCement = true;
                            }
                        }
                        
                        if (isCement)
                        {
                            mask.SetPixel(x, y, Color.FromArgb(0, 0, 0, 0));
                        }
                        else
                        {
                            mask.SetPixel(x, y, Color.FromArgb(255, 255, 255, 255));
                        }
                    }
                }
                
                mask.Save(maskPath, ImageFormat.Png);
            }
        }
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
$appDataDir = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded"
$src = "$appDataDir\media_1793690920044_f59f85f9.jpg"
$out = "$PWD\scratch\box1_mask.png"

[BoxSegmenter]::Segment($src, $out)
Write-Host "Mask created at $out"

