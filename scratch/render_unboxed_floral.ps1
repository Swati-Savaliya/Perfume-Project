$code = @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;

public class UnboxedFloralRenderer
{
    public static void Render(string srcPerfumesPath, string bgPath, string destPath)
    {
        int targetW = 896;
        int targetH = 1200;

        using (Bitmap bg = (Bitmap)Image.FromFile(bgPath))
        using (Bitmap src = (Bitmap)Image.FromFile(srcPerfumesPath))
        using (Bitmap dest = new Bitmap(targetW, targetH, PixelFormat.Format32bppArgb))
        using (Graphics g = Graphics.FromImage(dest))
        {
            g.SmoothingMode = SmoothingMode.HighQuality;
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.PixelOffsetMode = PixelOffsetMode.HighQuality;

            // 1. Draw the High-End White Floral Background
            g.DrawImage(bg, new Rectangle(0, 0, targetW, targetH), 0, 0, bg.Width, bg.Height, GraphicsUnit.Pixel);

            // Subtle atmospheric lighting / vignette
            using (GraphicsPath vigPath = new GraphicsPath())
            {
                vigPath.AddRectangle(new Rectangle(0, 0, targetW, targetH));
                using (PathGradientBrush vigBrush = new PathGradientBrush(vigPath))
                {
                    vigBrush.CenterPoint = new PointF(targetW / 2f, 460f);
                    vigBrush.CenterColor = Color.FromArgb(0, 0, 0, 0);
                    vigBrush.SurroundColors = new Color[] { Color.FromArgb(45, 20, 20, 15) };
                    g.FillPath(vigBrush, vigPath);
                }
            }

            // 2. Open Box Placement on the Pedestal
            // Pedestal top is at Y ≈ 770
            int boxDrawW = 580;
            int boxDrawH = 638; // 1.1 aspect ratio
            int boxDrawX = (targetW - boxDrawW) / 2; // 158
            int boxDrawY = 765 - boxDrawH + 10; // 137
            int pedestalY = 765;

            // 3. Multi-Layer Realistic Ambient Contact Shadow on Stone Pedestal
            for (int i = 20; i >= 1; i--)
            {
                int alpha = (int)(120 / (1 + i * 0.8));
                using (SolidBrush shadowBrush = new SolidBrush(Color.FromArgb(alpha, 40, 35, 30)))
                {
                    float padX = i * 4.5f;
                    float padY = i * 1.8f;
                    float shadowW = boxDrawW * 0.94f + padX * 2;
                    float shadowH = 24f + padY * 2;
                    float shadowX = boxDrawX + (boxDrawW - shadowW) / 2;
                    float shadowY = pedestalY - 12 + (i * 0.4f);
                    g.FillEllipse(shadowBrush, shadowX, shadowY, shadowW, shadowH);
                }
            }

            // Dark contact line directly where the box base meets the stone
            using (SolidBrush contactBrush = new SolidBrush(Color.FromArgb(190, 25, 20, 18)))
            {
                g.FillRectangle(contactBrush, boxDrawX + 25, pedestalY - 4, boxDrawW - 50, 7);
            }

            // 4. Extract the Open Box with Clean Architectural Walls
            // Source: 771 x 1024
            // Inside the box rim: X: 16 to 714, Y: 212 to 980
            int cropX = 16;
            int cropY = 212;
            int cropW = 698;
            int cropH = 768;

            using (Bitmap boxCutout = new Bitmap(boxDrawW, boxDrawH, PixelFormat.Format32bppArgb))
            {
                using (Graphics gBox = Graphics.FromImage(boxCutout))
                {
                    gBox.SmoothingMode = SmoothingMode.HighQuality;
                    gBox.InterpolationMode = InterpolationMode.HighQualityBicubic;
                    gBox.PixelOffsetMode = PixelOffsetMode.HighQuality;

                    // Draw solid luxury matte black outer box walls/chassis
                    using (SolidBrush wallBrush = new SolidBrush(Color.FromArgb(18, 18, 20)))
                    {
                        // Draw rounded rectangle box outer chassis
                        using (GraphicsPath outerBoxPath = new GraphicsPath())
                        {
                            int r = 16;
                            outerBoxPath.AddArc(0, 0, r * 2, r * 2, 180, 90);
                            outerBoxPath.AddArc(boxDrawW - r * 2, 0, r * 2, r * 2, 270, 90);
                            outerBoxPath.AddArc(boxDrawW - r * 2, boxDrawH - r * 2, r * 2, r * 2, 0, 90);
                            outerBoxPath.AddArc(0, boxDrawH - r * 2, r * 2, r * 2, 90, 90);
                            outerBoxPath.CloseFigure();
                            gBox.FillPath(wallBrush, outerBoxPath);
                        }
                    }

                    // Inner border of the open box where silk is fitted
                    int innerMargin = 8;
                    Rectangle innerRect = new Rectangle(innerMargin, innerMargin, boxDrawW - innerMargin * 2, boxDrawH - innerMargin * 2);

                    // Enhanced Image Attributes for the Silk Bed & Crystal Perfumes
                    using (ImageAttributes attr = new ImageAttributes())
                    {
                        // Boost clarity (+20%), deepen noir blacks, enhance silver foil typography
                        ColorMatrix cm = new ColorMatrix(new float[][] {
                            new float[] { 1.20f, 0, 0, 0, 0 },
                            new float[] { 0, 1.20f, 0, 0, 0 },
                            new float[] { 0, 0, 1.22f, 0, 0 },
                            new float[] { 0, 0, 0, 1.0f, 0 },
                            new float[] { -0.03f, -0.03f, -0.02f, 0, 1.0f }
                        });
                        attr.SetColorMatrix(cm, ColorMatrixFlag.Default, ColorAdjustType.Bitmap);

                        // Draw silk & perfumes interior
                        gBox.DrawImage(src, innerRect, cropX, cropY, cropW, cropH, GraphicsUnit.Pixel, attr);
                    }

                    // Inner shadow inside the box rim for 3D depth
                    using (GraphicsPath innerShadowPath = new GraphicsPath())
                    {
                        innerShadowPath.AddRectangle(innerRect);
                        using (PathGradientBrush isb = new PathGradientBrush(innerShadowPath))
                        {
                            isb.CenterPoint = new PointF(boxDrawW / 2f, boxDrawH / 2f);
                            isb.CenterColor = Color.FromArgb(0, 0, 0, 0);
                            isb.SurroundColors = new Color[] { Color.FromArgb(130, 0, 0, 0) };
                            gBox.FillPath(isb, innerShadowPath);
                        }
                    }

                    // Elegant subtle gold rim around the open box lip
                    using (Pen lipPen = new Pen(Color.FromArgb(90, 212, 175, 55), 1.5f))
                    {
                        gBox.DrawRectangle(lipPen, innerMargin, innerMargin, boxDrawW - innerMargin * 2, boxDrawH - innerMargin * 2);
                    }

                    // Beveled outer box edge
                    using (Pen outerLipPen = new Pen(Color.FromArgb(50, 255, 255, 255), 1.0f))
                    {
                        gBox.DrawRectangle(outerLipPen, 1, 1, boxDrawW - 3, boxDrawH - 3);
                    }
                }

                // Draw the complete open box on the stage
                g.DrawImage(boxCutout, boxDrawX, boxDrawY, boxDrawW, boxDrawH);
            }

            // 5. Subtle Glass Reflection on the Pedestal
            using (Bitmap reflection = new Bitmap(boxDrawW, 100, PixelFormat.Format32bppArgb))
            {
                using (Graphics gRef = Graphics.FromImage(reflection))
                {
                    Rectangle refSrc = new Rectangle(cropX, cropY + cropH - 120, cropW, 120);
                    Rectangle refDst = new Rectangle(0, 100, boxDrawW, -100);
                    gRef.DrawImage(src, refDst, refSrc, GraphicsUnit.Pixel);
                }

                using (ImageAttributes refAttr = new ImageAttributes())
                {
                    ColorMatrix cmRef = new ColorMatrix();
                    cmRef.Matrix33 = 0.12f;
                    refAttr.SetColorMatrix(cmRef, ColorMatrixFlag.Default, ColorAdjustType.Bitmap);

                    int refTargetH = 70;
                    g.DrawImage(reflection, new Rectangle(boxDrawX, pedestalY, boxDrawW, refTargetH), 0, 0, boxDrawW, 100, GraphicsUnit.Pixel, refAttr);
                }
            }

            // 6. Champagne Gold Filigree Framing Accents
            int bLen = 26;
            using (Pen borderPen = new Pen(Color.FromArgb(180, 200, 160, 60), 1.8f))
            {
                g.DrawLine(borderPen, 24, 24, 24 + bLen, 24);
                g.DrawLine(borderPen, 24, 24, 24, 24 + bLen);
                g.DrawLine(borderPen, targetW - 24, 24, targetW - 24 - bLen, 24);
                g.DrawLine(borderPen, targetW - 24, 24, targetW - 24, 24 + bLen);
                g.DrawLine(borderPen, 24, targetH - 24, 24 + bLen, targetH - 24);
                g.DrawLine(borderPen, 24, targetH - 24, 24, targetH - 24 - bLen);
                g.DrawLine(borderPen, targetW - 24, targetH - 24, targetW - 24 - bLen, targetH - 24);
                g.DrawLine(borderPen, targetW - 24, targetH - 24, targetW - 24, targetH - 24 - bLen);
            }

            using (Pen outerFrame = new Pen(Color.FromArgb(40, 200, 160, 60), 1.0f))
            {
                g.DrawRectangle(outerFrame, 1, 1, targetW - 3, targetH - 3);
            }

            dest.Save(destPath, ImageFormat.Jpeg);
            Console.WriteLine("Unboxed Floral Perfume Masterpiece Saved: " + destPath);
        }
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
$appDataDir = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded"
$src = "$appDataDir\media_1793690920051_eccd3641.jpg"
$bg = "$PWD\public\images\white_flowers_bg.jpg"
$dest = "$PWD\scratch\unboxed_floral_perfume_suite.jpg"

[UnboxedFloralRenderer]::Render($src, $bg, $dest)

