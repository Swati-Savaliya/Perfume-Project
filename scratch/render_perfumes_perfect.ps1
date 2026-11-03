$code = @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;

public class PerfumesPerfectRenderer
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

            // Fill background with rich dark silk noir
            using (SolidBrush bg = new SolidBrush(Color.FromArgb(12, 12, 14)))
            {
                g.FillRectangle(bg, 0, 0, targetW, targetH);
            }

            // The silk bed with perfumes in source:
            // X: 22, Y: 215, Width: 710, Height: 755
            int srcCropX = 22;
            int srcCropY = 215;
            int srcCropW = 710;
            int srcCropH = 755;

            // Fit the silk bed prominently across the target canvas:
            // We want it to fill edge-to-edge with maximum size and detail!
            // Target width is 896.
            // Let's draw it spanning full width 896!
            double scale = (double)targetW / srcCropW; // ~1.262
            int drawW = targetW;
            int drawH = (int)(srcCropH * scale); // ~953
            int drawX = 0;
            int drawY = (targetH - drawH) / 2; // ~123 px from top

            // 1. First, create top and bottom extended silk extensions so the entire 1200px height is seamless silk
            // Top extension (from 0 to drawY + 30)
            using (Bitmap topSlice = new Bitmap(srcCropW, 100, PixelFormat.Format24bppRgb))
            {
                using (Graphics gTop = Graphics.FromImage(topSlice))
                {
                    gTop.DrawImage(src, new Rectangle(0, 0, srcCropW, 100), srcCropX, srcCropY, srcCropW, 100, GraphicsUnit.Pixel);
                }
                // Flip vertically for seamless continuation
                topSlice.RotateFlip(RotateFlipType.RotateNoneFlipY);
                g.DrawImage(topSlice, new Rectangle(0, 0, targetW, drawY + 20), 0, 0, srcCropW, 100, GraphicsUnit.Pixel);
            }

            // Bottom extension (from drawY + drawH - 30 to targetH)
            using (Bitmap btmSlice = new Bitmap(srcCropW, 100, PixelFormat.Format24bppRgb))
            {
                using (Graphics gBtm = Graphics.FromImage(btmSlice))
                {
                    gBtm.DrawImage(src, new Rectangle(0, 0, srcCropW, 100), srcCropX, srcCropY + srcCropH - 100, srcCropW, 100, GraphicsUnit.Pixel);
                }
                btmSlice.RotateFlip(RotateFlipType.RotateNoneFlipY);
                int btmY = drawY + drawH - 20;
                g.DrawImage(btmSlice, new Rectangle(0, btmY, targetW, targetH - btmY), 0, 0, srcCropW, 100, GraphicsUnit.Pixel);
            }

            // 2. High-End Image Quality Attributes:
            // Enhance contrast, glass clarity, liquid refraction, and metallic typography!
            using (ImageAttributes attr = new ImageAttributes())
            {
                // Gamma and contrast matrix:
                // Boost bright highlights (+18%), deepen true blacks, slightly elevate midtone clarity
                ColorMatrix cm = new ColorMatrix(new float[][] {
                    new float[] { 1.18f, 0, 0, 0, 0 },
                    new float[] { 0, 1.18f, 0, 0, 0 },
                    new float[] { 0, 0, 1.20f, 0, 0 },
                    new float[] { 0, 0, 0, 1.0f, 0 },
                    new float[] { -0.04f, -0.04f, -0.03f, 0, 1.0f }
                });
                attr.SetColorMatrix(cm, ColorMatrixFlag.Default, ColorAdjustType.Bitmap);

                // Draw the main silk flacon suite
                Rectangle destRect = new Rectangle(drawX, drawY, drawW, drawH);
                g.DrawImage(src, destRect, srcCropX, srcCropY, srcCropW, srcCropH, GraphicsUnit.Pixel, attr);
            }

            // 3. Seamless Vignette at top and bottom edges (soft natural gradient)
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

            // Soft radial spotlight to make center bottles pop with luxury brilliance
            using (GraphicsPath centerAura = new GraphicsPath())
            {
                centerAura.AddEllipse(targetW / 2f - 340, targetH / 2f - 340, 680, 680);
                using (PathGradientBrush auraBrush = new PathGradientBrush(centerAura))
                {
                    auraBrush.CenterColor = Color.FromArgb(25, 255, 240, 200);
                    auraBrush.SurroundColors = new Color[] { Color.FromArgb(0, 0, 0, 0) };
                    g.FillPath(auraBrush, centerAura);
                }
            }

            // Notice: NO PAINTED CORNER BRACKETS!
            // The UI provides the luxury frame dynamically!

            dest.Save(destPath, ImageFormat.Jpeg);
            Console.WriteLine("Clean, High-Res Full Frame Perfume Suite Saved: " + destPath);
        }
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
$appDataDir = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded"
$src = "$appDataDir\media_1793690920051_eccd3641.jpg"
$dest = "$PWD\scratch\perfumes_fullframe.jpg"

[PerfumesPerfectRenderer]::Render($src, $dest)

