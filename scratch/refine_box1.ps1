$code = @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;

public class HighEndStudioRenderer
{
    public static void GenerateMasterpiece(string srcPath, string destPath)
    {
        int targetW = 896;
        int targetH = 1200;

        using (Bitmap src = (Bitmap)Image.FromFile(srcPath))
        using (Bitmap dest = new Bitmap(targetW, targetH, PixelFormat.Format32bppArgb))
        using (Graphics g = Graphics.FromImage(dest))
        {
            g.SmoothingMode = SmoothingMode.HighQuality;
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.PixelOffsetMode = PixelOffsetMode.HighQuality;

            // 1. Studio Background: Deep Luxury Noir Velvet / Slate atmosphere
            using (GraphicsPath bgPath = new GraphicsPath())
            {
                bgPath.AddRectangle(new Rectangle(0, 0, targetW, targetH));
                using (PathGradientBrush pgb = new PathGradientBrush(bgPath))
                {
                    pgb.CenterPoint = new PointF(targetW / 2f, 490f);
                    pgb.CenterColor = Color.FromArgb(255, 34, 32, 36); // warm obsidian core
                    pgb.SurroundColors = new Color[] { Color.FromArgb(255, 6, 6, 8) }; // deep midnight noir
                    g.FillPath(pgb, bgPath);
                }
            }

            // Warm golden ambient studio backlight spotlight behind the box
            using (GraphicsPath haloPath = new GraphicsPath())
            {
                haloPath.AddEllipse(targetW / 2f - 340, 240, 680, 560);
                using (PathGradientBrush halo = new PathGradientBrush(haloPath))
                {
                    halo.CenterColor = Color.FromArgb(36, 212, 175, 55); // soft champagne gold
                    halo.SurroundColors = new Color[] { Color.FromArgb(0, 0, 0, 0) };
                    g.FillPath(halo, haloPath);
                }
            }

            // Luxury Polished Ebony Plinth
            int plinthY = 790;
            using (LinearGradientBrush plinthBrush = new LinearGradientBrush(
                new Point(0, plinthY),
                new Point(0, targetH),
                Color.FromArgb(255, 18, 18, 22),
                Color.FromArgb(255, 8, 8, 10)))
            {
                g.FillRectangle(plinthBrush, 0, plinthY, targetW, targetH - plinthY);
            }

            // Architectural Plinth Accent Line (Champagne Gold)
            using (LinearGradientBrush rimBrush = new LinearGradientBrush(
                new Point(0, 0),
                new Point(targetW, 0),
                Color.FromArgb(0, 212, 175, 55),
                Color.FromArgb(0, 212, 175, 55)))
            {
                ColorBlend cb = new ColorBlend();
                cb.Colors = new Color[] {
                    Color.FromArgb(0, 212, 175, 55),
                    Color.FromArgb(80, 212, 175, 55),
                    Color.FromArgb(160, 255, 235, 160),
                    Color.FromArgb(80, 212, 175, 55),
                    Color.FromArgb(0, 212, 175, 55)
                };
                cb.Positions = new float[] { 0f, 0.2f, 0.5f, 0.8f, 1f };
                rimBrush.InterpolationColors = cb;
                using (Pen rimPen = new Pen(rimBrush, 1.5f))
                {
                    g.DrawLine(rimPen, 30, plinthY, targetW - 30, plinthY);
                }
            }

            // Realistic Deep Contact Shadow on the Plinth
            using (GraphicsPath shadowPath = new GraphicsPath())
            {
                shadowPath.AddEllipse(110, plinthY - 35, 670, 240);
                using (PathGradientBrush shadowBrush = new PathGradientBrush(shadowPath))
                {
                    shadowBrush.CenterColor = Color.FromArgb(210, 0, 0, 0);
                    shadowBrush.SurroundColors = new Color[] { Color.FromArgb(0, 0, 0, 0) };
                    g.FillPath(shadowBrush, shadowPath);
                }
            }

            // Ribbon Shadow on Plinth
            using (GraphicsPath ribbonShadowPath = new GraphicsPath())
            {
                ribbonShadowPath.AddEllipse(230, plinthY + 20, 440, 200);
                using (PathGradientBrush rShadow = new PathGradientBrush(ribbonShadowPath))
                {
                    rShadow.CenterColor = Color.FromArgb(170, 0, 0, 0);
                    rShadow.SurroundColors = new Color[] { Color.FromArgb(0, 0, 0, 0) };
                    g.FillPath(rShadow, ribbonShadowPath);
                }
            }

            // 2. Extract Box & Ribbon with Soft Anti-Aliased Alpha Mask
            int srcW = src.Width;
            int srcH = src.Height;

            using (Bitmap boxCutout = new Bitmap(srcW, srcH, PixelFormat.Format32bppArgb))
            {
                for (int y = 0; y < srcH; y++)
                {
                    for (int x = 0; x < srcW; x++)
                    {
                        Color c = src.GetPixel(x, y);
                        float alpha = 0f;

                        if (x >= 140 && x <= 765 && y >= 252 && y <= 1005)
                        {
                            double topY = 254.0;
                            if (x >= 248 && x <= 748)
                            {
                                topY = 254.0 + (x - 248.0) * (270.0 - 254.0) / (748.0 - 248.0);
                            }
                            else if (x < 248)
                            {
                                topY = 254.0 + (248.0 - x) * (650.0 - 254.0) / (248.0 - 144.0);
                            }

                            if (y >= topY - 1)
                            {
                                double leftX = 144.0;
                                if (y < 650)
                                {
                                    leftX = 144.0 + (650.0 - y) * (248.0 - 144.0) / (650.0 - 254.0);
                                }
                                else if (y <= 772)
                                {
                                    leftX = 144.0 + (y - 650.0) * (174.0 - 144.0) / (772.0 - 650.0);
                                }
                                else
                                {
                                    leftX = 230.0;
                                }

                                double rightX = 758.0;

                                if (x >= leftX - 1 && x <= rightX + 1)
                                {
                                    double bright = (c.R * 0.299 + c.G * 0.587 + c.B * 0.114);
                                    bool isText = (x >= 400 && x <= 550 && y >= 400 && y <= 450 && bright > 150);

                                    if (isText)
                                    {
                                        alpha = 1.0f;
                                    }
                                    else if (y < 770 && x >= leftX && x <= rightX)
                                    {
                                        // Transition near boundary
                                        double distToLeft = x - leftX;
                                        double distToTop = y - topY;
                                        double distToRight = rightX - x;

                                        if (bright < 135)
                                        {
                                            alpha = 1.0f;
                                            // Soft edge
                                            if (distToLeft < 2.0) alpha = (float)(distToLeft / 2.0);
                                            if (distToTop < 2.0) alpha = Math.Min(alpha, (float)(distToTop / 2.0));
                                            if (distToRight < 2.0) alpha = Math.Min(alpha, (float)(distToRight / 2.0));
                                        }
                                    }
                                    else if (y >= 770)
                                    {
                                        if (bright < 95 || (bright < 145 && Math.Abs(c.R - c.B) < 15))
                                        {
                                            if ((x >= 240 && x <= 480 && y <= 900) ||
                                                (x >= 480 && x <= 690 && y <= 1000))
                                            {
                                                alpha = 1.0f;
                                                // Feather ribbon tip
                                                if (y > 980) alpha = (float)Math.Max(0.2, (1005 - y) / 25.0);
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        if (alpha > 0.01f)
                        {
                            int intAlpha = Math.Min(255, (int)(alpha * 255));
                            int pixR = Math.Min(255, (int)(c.R * 0.95));
                            int pixG = Math.Min(255, (int)(c.G * 0.95));
                            int pixB = Math.Min(255, (int)(c.B * 1.02));
                            boxCutout.SetPixel(x, y, Color.FromArgb(intAlpha, pixR, pixG, pixB));
                        }
                        else
                        {
                            boxCutout.SetPixel(x, y, Color.FromArgb(0, 0, 0, 0));
                        }
                    }
                }

                // Render Cutout onto Studio Destination
                int drawW = 790;
                int drawH = (int)(drawW * (1024.0 / 935.0));
                int drawX = (targetW - drawW) / 2 + 5;
                int drawY = 160;

                g.DrawImage(boxCutout, new Rectangle(drawX, drawY, drawW, drawH), 0, 0, srcW, srcH, GraphicsUnit.Pixel);
            }

            // Subtle gold corner vitrine accents
            int cLen = 22;
            using (Pen cornerPen = new Pen(Color.FromArgb(160, 212, 175, 55), 2.0f))
            {
                g.DrawLine(cornerPen, 25, 25, 25 + cLen, 25);
                g.DrawLine(cornerPen, 25, 25, 25, 25 + cLen);

                g.DrawLine(cornerPen, targetW - 25, 25, targetW - 25 - cLen, 25);
                g.DrawLine(cornerPen, targetW - 25, 25, targetW - 25, 25 + cLen);

                g.DrawLine(cornerPen, 25, targetH - 25, 25 + cLen, targetH - 25);
                g.DrawLine(cornerPen, 25, targetH - 25, 25, targetH - 25 - cLen);

                g.DrawLine(cornerPen, targetW - 25, targetH - 25, targetW - 25 - cLen, targetH - 25);
                g.DrawLine(cornerPen, targetW - 25, targetH - 25, targetW - 25, targetH - 25 - cLen);
            }

            // Top Studio Ambient Vignette
            using (LinearGradientBrush topGrad = new LinearGradientBrush(
                new Point(0, 0),
                new Point(0, 260),
                Color.FromArgb(160, 5, 5, 7),
                Color.FromArgb(0, 0, 0, 0)))
            {
                g.FillRectangle(topGrad, 0, 0, targetW, 260);
            }

            // Outer Luxury Border / Subtle Glow
            using (Pen borderPen = new Pen(Color.FromArgb(35, 212, 175, 55), 1.5f))
            {
                g.DrawRectangle(borderPen, 1, 1, targetW - 3, targetH - 3);
            }

            dest.Save(destPath, ImageFormat.Jpeg);
            Console.WriteLine("Refined Masterpiece Saved: " + destPath);
        }
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
$appDataDir = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded"
$src = "$appDataDir\media_1793690920044_f59f85f9.jpg"
$dest = "$PWD\scratch\refined_box1_masterpiece.jpg"

[HighEndStudioRenderer]::GenerateMasterpiece($src, $dest)

