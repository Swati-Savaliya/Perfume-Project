$code = @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;

public class AccessoriesPerfectRenderer
{
    public static void Render(string srcPath, string destPath)
    {
        int targetW = 896;
        int targetH = 1200;

        using (Bitmap src = (Bitmap)Image.FromFile(srcPath))
        using (Bitmap dest = new Bitmap(targetW, targetH, PixelFormat.Format24bppRgb))
        using (Graphics g = Graphics.FromImage(dest))
        {
            g.SmoothingMode = SmoothingMode.HighQuality;
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.PixelOffsetMode = PixelOffsetMode.HighQuality;

            using (SolidBrush bg = new SolidBrush(Color.FromArgb(10, 10, 12)))
            {
                g.FillRectangle(bg, 0, 0, targetW, targetH);
            }

            // Velvet interior in source:
            // X: 48, Y: 270, Width: 697, Height: 725
            int srcCropX = 48;
            int srcCropY = 270;
            int srcCropW = 697;
            int srcCropH = 725;

            double scale = (double)targetW / srcCropW;
            int drawW = targetW;
            int drawH = (int)(srcCropH * scale);
            int drawX = 0;
            int drawY = (targetH - drawH) / 2;

            // Top extension
            using (Bitmap topSlice = new Bitmap(srcCropW, 90, PixelFormat.Format24bppRgb))
            {
                using (Graphics gTop = Graphics.FromImage(topSlice))
                {
                    gTop.DrawImage(src, new Rectangle(0, 0, srcCropW, 90), srcCropX, srcCropY, srcCropW, 90, GraphicsUnit.Pixel);
                }
                topSlice.RotateFlip(RotateFlipType.RotateNoneFlipY);
                g.DrawImage(topSlice, new Rectangle(0, 0, targetW, drawY + 20), 0, 0, srcCropW, 90, GraphicsUnit.Pixel);
            }

            // Bottom extension
            using (Bitmap btmSlice = new Bitmap(srcCropW, 90, PixelFormat.Format24bppRgb))
            {
                using (Graphics gBtm = Graphics.FromImage(btmSlice))
                {
                    gBtm.DrawImage(src, new Rectangle(0, 0, srcCropW, 90), srcCropX, srcCropY + srcCropH - 90, srcCropW, 90, GraphicsUnit.Pixel);
                }
                btmSlice.RotateFlip(RotateFlipType.RotateNoneFlipY);
                int btmY = drawY + drawH - 20;
                g.DrawImage(btmSlice, new Rectangle(0, btmY, targetW, targetH - btmY), 0, 0, srcCropW, 90, GraphicsUnit.Pixel);
            }

            // Contrast & clarity
            using (ImageAttributes attr = new ImageAttributes())
            {
                ColorMatrix cm = new ColorMatrix(new float[][] {
                    new float[] { 1.15f, 0, 0, 0, 0 },
                    new float[] { 0, 1.15f, 0, 0, 0 },
                    new float[] { 0, 0, 1.17f, 0, 0 },
                    new float[] { 0, 0, 0, 1.0f, 0 },
                    new float[] { -0.03f, -0.03f, -0.02f, 0, 1.0f }
                });
                attr.SetColorMatrix(cm, ColorMatrixFlag.Default, ColorAdjustType.Bitmap);

                Rectangle destRect = new Rectangle(drawX, drawY, drawW, drawH);
                g.DrawImage(src, destRect, srcCropX, srcCropY, srcCropW, srcCropH, GraphicsUnit.Pixel, attr);
            }

            // Soft top and bottom edge gradients
            using (LinearGradientBrush topGrad = new LinearGradientBrush(
                new Point(0, 0),
                new Point(0, 160),
                Color.FromArgb(180, 8, 8, 10),
                Color.FromArgb(0, 0, 0, 0)))
            {
                g.FillRectangle(topGrad, 0, 0, targetW, 160);
            }

            using (LinearGradientBrush btmGrad = new LinearGradientBrush(
                new Point(0, targetH - 160),
                new Point(0, targetH),
                Color.FromArgb(0, 0, 0, 0),
                Color.FromArgb(180, 8, 8, 10)))
            {
                g.FillRectangle(btmGrad, 0, targetH - 160, targetW, 160);
            }

            dest.Save(destPath, ImageFormat.Jpeg);
            Console.WriteLine("Clean Accessories Layer Saved: " + destPath);
        }
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
$appDataDir = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded"
$src = "$appDataDir\media_1793690920050_e1560855.jpg"
$dest = "$PWD\scratch\accessories_fullframe.jpg"

[AccessoriesPerfectRenderer]::Render($src, $dest)

