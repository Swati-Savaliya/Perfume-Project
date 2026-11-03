$code = @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;

public class PerfumeSuiteRenderer
{
    public static void RenderPerfumes(string srcPath, string destPath)
    {
        int targetW = 896;
        int targetH = 1200;

        using (Bitmap src = (Bitmap)Image.FromFile(srcPath))
        using (Bitmap dest = new Bitmap(targetW, targetH, PixelFormat.Format32bppArgb))
        using (Graphics gDest = Graphics.FromImage(dest))
        {
            gDest.SmoothingMode = SmoothingMode.HighQuality;
            gDest.InterpolationMode = InterpolationMode.HighQualityBicubic;
            gDest.PixelOffsetMode = PixelOffsetMode.HighQuality;

            // Opulent Luxury Charcoal & Noir Studio Vitrine Canvas
            using (LinearGradientBrush bgBrush = new LinearGradientBrush(
                new Point(0, 0),
                new Point(0, targetH),
                Color.FromArgb(255, 18, 18, 22),
                Color.FromArgb(255, 6, 6, 8)))
            {
                gDest.FillRectangle(bgBrush, 0, 0, targetW, targetH);
            }

            // Radial golden warmth behind the centerpiece flacons
            using (GraphicsPath haloPath = new GraphicsPath())
            {
                haloPath.AddEllipse(targetW / 2f - 300, targetH / 2f - 300, 600, 600);
                using (PathGradientBrush halo = new PathGradientBrush(haloPath))
                {
                    halo.CenterColor = Color.FromArgb(28, 212, 175, 55);
                    halo.SurroundColors = new Color[] { Color.FromArgb(0, 0, 0, 0) };
                    gDest.FillPath(halo, haloPath);
                }
            }

            // Clean interior crop of the coffret bed:
            // Source: 771 x 1024
            // Inside the box rim: X: 15..755, Y: 140..990
            int cropX = 18;
            int cropY = 150;
            int cropW = 735;
            int cropH = 835;

            // Frame inside destination with luxury margins
            int destMarginX = 35;
            int destMarginY = 60;
            int destBoxW = targetW - (destMarginX * 2); // 826
            int destBoxH = targetH - (destMarginY * 2); // 1080

            // Draw box interior
            Rectangle srcRect = new Rectangle(cropX, cropY, cropW, cropH);
            Rectangle destRect = new Rectangle(destMarginX, destMarginY, destBoxW, destBoxH);

            // Enhance contrast & clarity of flacons & silk
            using (ImageAttributes wrapAttr = new ImageAttributes())
            {
                // Slight contrast boost: 1.08 scale, -0.04 offset
                ColorMatrix cm = new ColorMatrix(new float[][] {
                    new float[] { 1.08f, 0, 0, 0, 0 },
                    new float[] { 0, 1.08f, 0, 0, 0 },
                    new float[] { 0, 0, 1.10f, 0, 0 },
                    new float[] { 0, 0, 0, 1.0f, 0 },
                    new float[] { -0.03f, -0.03f, -0.02f, 0, 1.0f }
                });
                wrapAttr.SetColorMatrix(cm, ColorMatrixFlag.Default, ColorAdjustType.Bitmap);

                gDest.DrawImage(src, destRect, cropX, cropY, cropW, cropH, GraphicsUnit.Pixel, wrapAttr);
            }

            // Inner Shadow & Vignette over the silk bed to create deep coffret perspective
            using (GraphicsPath innerVignette = new GraphicsPath())
            {
                innerVignette.AddRectangle(destRect);
                using (PathGradientBrush pgb = new PathGradientBrush(innerVignette))
                {
                    pgb.CenterPoint = new PointF(destMarginX + destBoxW / 2f, destMarginY + destBoxH / 2f);
                    pgb.CenterColor = Color.FromArgb(0, 0, 0, 0);
                    pgb.SurroundColors = new Color[] { Color.FromArgb(170, 0, 0, 0) };
                    gDest.FillPath(pgb, innerVignette);
                }
            }

            // Subtle gold rim frame around the coffret bed
            using (Pen goldInnerPen = new Pen(Color.FromArgb(90, 212, 175, 55), 1.5f))
            {
                gDest.DrawRectangle(goldInnerPen, destRect);
            }

            // Outer bevel rim
            using (Pen outerPen = new Pen(Color.FromArgb(40, 255, 255, 255), 1.0f))
            {
                gDest.DrawRectangle(outerPen, destMarginX - 4, destMarginY - 4, destBoxW + 8, destBoxH + 8);
            }

            // Architectural corner brackets in muted champagne gold
            int cLen = 22;
            using (Pen cornerPen = new Pen(Color.FromArgb(180, 212, 175, 55), 2.0f))
            {
                // Top-Left
                gDest.DrawLine(cornerPen, destMarginX - 8, destMarginY - 8, destMarginX - 8 + cLen, destMarginY - 8);
                gDest.DrawLine(cornerPen, destMarginX - 8, destMarginY - 8, destMarginX - 8, destMarginY - 8 + cLen);

                // Top-Right
                gDest.DrawLine(cornerPen, destMarginX + destBoxW + 8, destMarginY - 8, destMarginX + destBoxW + 8 - cLen, destMarginY - 8);
                gDest.DrawLine(cornerPen, destMarginX + destBoxW + 8, destMarginY - 8, destMarginX + destBoxW + 8, destMarginY - 8 + cLen);

                // Bottom-Left
                gDest.DrawLine(cornerPen, destMarginX - 8, destMarginY + destBoxH + 8, destMarginX - 8 + cLen, destMarginY + destBoxH + 8);
                gDest.DrawLine(cornerPen, destMarginX - 8, destMarginY + destBoxH + 8, destMarginX - 8, destMarginY + destBoxH + 8 - cLen);

                // Bottom-Right
                gDest.DrawLine(cornerPen, destMarginX + destBoxW + 8, destMarginY + destBoxH + 8, destMarginX + destBoxW + 8 - cLen, destMarginY + destBoxH + 8);
                gDest.DrawLine(cornerPen, destMarginX + destBoxW + 8, destMarginY + destBoxH + 8, destMarginX + destBoxW + 8, destMarginY + destBoxH + 8 - cLen);
            }

            dest.Save(destPath, ImageFormat.Jpeg);
            Console.WriteLine("Saved studio perfume suite: " + destPath);
        }
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
$appDataDir = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded"
$src = "$appDataDir\media_1793690920051_eccd3641.jpg"
$dest = "$PWD\scratch\test_perfumes_render.jpg"

[PerfumeSuiteRenderer]::RenderPerfumes($src, $dest)

