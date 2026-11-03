$code = @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;

public class FestiveGiftBackgroundRenderer
{
    public static void Render(string srcPath, string destPath)
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

            int drawW = 750;
            int drawH = (int)(drawW * (1024.0 / 935.0)); // ~821
            int drawX = (targetW - drawW) / 2; // ~73
            int drawY = 150;
            int tableY = 740;

            // ========================================================
            // 1. FESTIVE LUXURY GIFT BACKGROUND (Deep Royal Burgundy & Ruby)
            // ========================================================
            // Deep rich crimson red / royal wine gradient - high contrast against the black box!
            using (GraphicsPath bgPath = new GraphicsPath())
            {
                bgPath.AddRectangle(new Rectangle(0, 0, targetW, targetH));
                using (PathGradientBrush pgb = new PathGradientBrush(bgPath))
                {
                    pgb.CenterPoint = new PointF(targetW / 2f, 420f);
                    // Center: Rich Royal Burgundy/Crimson
                    pgb.CenterColor = Color.FromArgb(255, 95, 15, 26);
                    // Edges: Deep Velvet Noir Wine
                    pgb.SurroundColors = new Color[] { Color.FromArgb(255, 28, 4, 8) };
                    g.FillPath(pgb, bgPath);
                }
            }

            // Warm Golden Celebration Spotlight Aura
            using (GraphicsPath goldAura = new GraphicsPath())
            {
                goldAura.AddEllipse(targetW / 2f - 380, 140, 760, 640);
                using (PathGradientBrush auraBrush = new PathGradientBrush(goldAura))
                {
                    auraBrush.CenterColor = Color.FromArgb(70, 255, 205, 85);
                    auraBrush.SurroundColors = new Color[] { Color.FromArgb(0, 0, 0, 0) };
                    g.FillPath(auraBrush, goldAura);
                }
            }

            // ========================================================
            // 2. FESTIVE GOLDEN BOKEH ORBS & CELEBRATION LIGHTS
            // ========================================================
            // Draw soft golden glowing floating bokeh lights in background
            var bokehs = new[] {
                new { X = 120f, Y = 220f, R = 45f, A = 55 },
                new { X = 200f, Y = 140f, R = 32f, A = 45 },
                new { X = 740f, Y = 200f, R = 50f, A = 55 },
                new { X = 800f, Y = 320f, R = 38f, A = 40 },
                new { X = 90f,  Y = 380f, R = 28f, A = 35 },
                new { X = 160f, Y = 460f, R = 22f, A = 30 },
                new { X = 770f, Y = 480f, R = 34f, A = 35 },
                new { X = 280f, Y = 100f, R = 25f, A = 40 },
                new { X = 650f, Y = 120f, R = 30f, A = 45 },
                new { X = 110f, Y = 620f, R = 36f, A = 30 },
                new { X = 780f, Y = 640f, R = 42f, A = 35 }
            };

            foreach (var b in bokehs)
            {
                using (GraphicsPath orbPath = new GraphicsPath())
                {
                    orbPath.AddEllipse(b.X - b.R, b.Y - b.R, b.R * 2, b.R * 2);
                    using (PathGradientBrush orbBrush = new PathGradientBrush(orbPath))
                    {
                        orbBrush.CenterColor = Color.FromArgb(b.A, 255, 230, 150);
                        orbBrush.SurroundColors = new Color[] { Color.FromArgb(0, 0, 0, 0) };
                        g.FillPath(orbBrush, orbPath);
                    }
                }
            }

            // Tiny Celebration Golden Dust Sparkles
            var sparkles = new[] {
                new PointF(150, 180), new PointF(720, 160), new PointF(230, 280),
                new PointF(700, 290), new PointF(180, 520), new PointF(730, 420),
                new PointF(100, 290), new PointF(820, 240), new PointF(620, 190)
            };
            using (SolidBrush starBrush = new SolidBrush(Color.FromArgb(160, 255, 240, 180)))
            {
                foreach (var sp in sparkles)
                {
                    g.FillEllipse(starBrush, sp.X - 1.5f, sp.Y - 1.5f, 3f, 3f);
                }
            }

            // ========================================================
            // 3. WARM CHAMPAGNE GOLD / OPULENT MARBLE PEDESTAL
            // ========================================================
            // Luxury warm dark champagne-tinted marble plinth
            using (LinearGradientBrush tableBrush = new LinearGradientBrush(
                new Point(0, tableY),
                new Point(0, targetH),
                Color.FromArgb(255, 36, 10, 16),
                Color.FromArgb(255, 18, 4, 7)))
            {
                g.FillRectangle(tableBrush, 0, tableY, targetW, targetH - tableY);
            }

            // Golden Ribbon of Light across the pedestal edge
            using (LinearGradientBrush tableRimBrush = new LinearGradientBrush(
                new Point(0, 0),
                new Point(targetW, 0),
                Color.FromArgb(0, 255, 215, 0),
                Color.FromArgb(0, 255, 215, 0)))
            {
                ColorBlend cb = new ColorBlend();
                cb.Colors = new Color[] {
                    Color.FromArgb(0, 255, 215, 0),
                    Color.FromArgb(120, 255, 215, 0),
                    Color.FromArgb(220, 255, 245, 190),
                    Color.FromArgb(120, 255, 215, 0),
                    Color.FromArgb(0, 255, 215, 0)
                };
                cb.Positions = new float[] { 0f, 0.2f, 0.5f, 0.8f, 1f };
                tableRimBrush.InterpolationColors = cb;
                using (Pen rimPen = new Pen(tableRimBrush, 2.5f))
                {
                    g.DrawLine(rimPen, 15, tableY, targetW - 15, tableY);
                }
            }

            // ========================================================
            // 4. CONTACT SHADOW UNDER BOX & RIBBON
            // ========================================================
            using (GraphicsPath wideShadow = new GraphicsPath())
            {
                wideShadow.AddEllipse(80, tableY - 40, 740, 260);
                using (PathGradientBrush wsb = new PathGradientBrush(wideShadow))
                {
                    wsb.CenterColor = Color.FromArgb(220, 0, 0, 0);
                    wsb.SurroundColors = new Color[] { Color.FromArgb(0, 0, 0, 0) };
                    g.FillPath(wsb, wideShadow);
                }
            }

            using (GraphicsPath tightShadow = new GraphicsPath())
            {
                tightShadow.AddEllipse(140, tableY - 15, 620, 140);
                using (PathGradientBrush tsb = new PathGradientBrush(tightShadow))
                {
                    tsb.CenterColor = Color.FromArgb(250, 0, 0, 0);
                    tsb.SurroundColors = new Color[] { Color.FromArgb(0, 0, 0, 0) };
                    g.FillPath(tsb, tightShadow);
                }
            }

            using (GraphicsPath ribbonShadow = new GraphicsPath())
            {
                ribbonShadow.AddEllipse(220, tableY + 40, 460, 220);
                using (PathGradientBrush rsb = new PathGradientBrush(ribbonShadow))
                {
                    rsb.CenterColor = Color.FromArgb(200, 0, 0, 0);
                    rsb.SurroundColors = new Color[] { Color.FromArgb(0, 0, 0, 0) };
                    g.FillPath(rsb, ribbonShadow);
                }
            }

            // ========================================================
            // 5. UNBROKEN BOX CUTOUT & PLACEMENT
            // ========================================================
            int srcW = src.Width;
            int srcH = src.Height;

            using (Bitmap boxCutout = new Bitmap(srcW, srcH, PixelFormat.Format32bppArgb))
            {
                for (int y = 0; y < srcH; y++)
                {
                    for (int x = 0; x < srcW; x++)
                    {
                        Color c = src.GetPixel(x, y);

                        bool inside = false;
                        float edgeFactor = 1.0f;

                        // Lid:
                        double lidTopY = 256.0 + (x - 250.0) * (270.0 - 256.0) / (748.0 - 250.0);
                        double lidLeftX = 250.0 - (y - 256.0) * (250.0 - 146.0) / (660.0 - 256.0);
                        double lidRightX = 748.0 + (y - 270.0) * (752.0 - 748.0) / (690.0 - 270.0);
                        double lidBottomY = 660.0 + (x - 146.0) * (690.0 - 660.0) / (752.0 - 146.0);

                        if (y >= lidTopY && y <= lidBottomY && x >= lidLeftX && x <= lidRightX)
                        {
                            inside = true;
                            double dTop = y - lidTopY;
                            double dLeft = x - lidLeftX;
                            double dRight = lidRightX - x;
                            double dEdge = Math.Min(dTop, Math.Min(dLeft, dRight));
                            if (dEdge < 1.5) edgeFactor = (float)Math.Max(0.1, dEdge / 1.5);
                        }
                        // Base below lid:
                        else if (y > lidBottomY && y <= 778)
                        {
                            double baseLeftX = 146.0 + (y - 660.0) * (185.0 - 146.0) / (775.0 - 660.0);
                            double baseRightX = 752.0 + (y - 690.0) * (755.0 - 752.0) / (775.0 - 690.0);

                            if (x >= baseLeftX && x <= baseRightX)
                            {
                                inside = true;
                                double dLeft = x - baseLeftX;
                                double dRight = baseRightX - x;
                                double dBottom = 778 - y;
                                double dEdge = Math.Min(dLeft, Math.Min(dRight, dBottom));
                                if (dEdge < 1.5) edgeFactor = (float)Math.Max(0.1, dEdge / 1.5);
                            }
                        }
                        // Ribbon:
                        else if (y > 600 && y <= 1005)
                        {
                            bool inRibbonArea = (x >= 240 && x <= 480 && y <= 905) ||
                                               (x >= 470 && x <= 695 && y <= 1005);

                            if (inRibbonArea)
                            {
                                double bright = (c.R * 0.299 + c.G * 0.587 + c.B * 0.114);
                                if (bright < 90 || (bright < 150 && Math.Abs(c.R - c.B) < 18))
                                {
                                    inside = true;
                                    if (y > 980) edgeFactor = (float)Math.Max(0.2, (1005 - y) / 25.0);
                                }
                            }
                        }

                        if (inside)
                        {
                            bool isLogo = (x >= 400 && x <= 560 && y >= 400 && y <= 455 && c.R > 140);
                            
                            int pixR, pixG, pixB;
                            if (isLogo)
                            {
                                // Crisp bright silver logo
                                pixR = Math.Min(255, (int)(c.R * 1.20));
                                pixG = Math.Min(255, (int)(c.G * 1.20));
                                pixB = Math.Min(255, (int)(c.B * 1.25));
                            }
                            else
                            {
                                // Deep matte obsidian black
                                pixR = Math.Min(255, (int)(c.R * 0.88));
                                pixG = Math.Min(255, (int)(c.G * 0.88));
                                pixB = Math.Min(255, (int)(c.B * 0.94));
                            }

                            int alpha = Math.Min(255, (int)(edgeFactor * 255));
                            boxCutout.SetPixel(x, y, Color.FromArgb(alpha, pixR, pixG, pixB));
                        }
                        else
                        {
                            boxCutout.SetPixel(x, y, Color.FromArgb(0, 0, 0, 0));
                        }
                    }
                }

                // Ground Reflection
                using (Bitmap reflection = new Bitmap(srcW, 200, PixelFormat.Format32bppArgb))
                {
                    using (Graphics gRef = Graphics.FromImage(reflection))
                    {
                        Rectangle refSrc = new Rectangle(0, 600, srcW, 200);
                        Rectangle refDst = new Rectangle(0, 200, srcW, -200);
                        gRef.DrawImage(boxCutout, refDst, refSrc, GraphicsUnit.Pixel);
                    }

                    using (ImageAttributes refAttr = new ImageAttributes())
                    {
                        ColorMatrix cmRef = new ColorMatrix();
                        cmRef.Matrix33 = 0.20f;
                        refAttr.SetColorMatrix(cmRef, ColorMatrixFlag.Default, ColorAdjustType.Bitmap);

                        int refTargetH = 140;
                        g.DrawImage(reflection, new Rectangle(drawX, tableY, drawW, refTargetH), 0, 0, srcW, 200, GraphicsUnit.Pixel, refAttr);
                    }
                }

                // Draw Box
                g.DrawImage(boxCutout, new Rectangle(drawX, drawY, drawW, drawH), 0, 0, srcW, srcH, GraphicsUnit.Pixel);
            }

            // ========================================================
            // 6. FESTIVE CELEBRATION EMBELLISHMENTS & GOLD ACCENTS
            // ========================================================
            // Warm golden rim-light glow on top edge of the box
            using (LinearGradientBrush topEdgeGlow = new LinearGradientBrush(
                new Point(0, drawY + 30),
                new Point(targetW, drawY + 30),
                Color.FromArgb(0, 255, 235, 170),
                Color.FromArgb(0, 255, 235, 170)))
            {
                ColorBlend cbGlow = new ColorBlend();
                cbGlow.Colors = new Color[] {
                    Color.FromArgb(0, 255, 235, 170),
                    Color.FromArgb(90, 255, 235, 170),
                    Color.FromArgb(160, 255, 250, 210),
                    Color.FromArgb(90, 255, 235, 170),
                    Color.FromArgb(0, 255, 235, 170)
                };
                cbGlow.Positions = new float[] { 0f, 0.25f, 0.5f, 0.75f, 1f };
                topEdgeGlow.InterpolationColors = cbGlow;
                using (Pen glowPen = new Pen(topEdgeGlow, 2.2f))
                {
                    g.DrawLine(glowPen, drawX + 180, drawY + 50, drawX + 580, drawY + 62);
                }
            }

            // Luxury Festive Gold Filigree Corner Brackets
            int bLen = 28;
            using (Pen borderPen = new Pen(Color.FromArgb(170, 230, 190, 75), 2.0f))
            {
                g.DrawLine(borderPen, 22, 22, 22 + bLen, 22);
                g.DrawLine(borderPen, 22, 22, 22, 22 + bLen);
                g.DrawLine(borderPen, targetW - 22, 22, targetW - 22 - bLen, 22);
                g.DrawLine(borderPen, targetW - 22, 22, targetW - 22, 22 + bLen);
                g.DrawLine(borderPen, 22, targetH - 22, 22 + bLen, targetH - 22);
                g.DrawLine(borderPen, 22, targetH - 22, 22, targetH - 22 - bLen);
                g.DrawLine(borderPen, targetW - 22, targetH - 22, targetW - 22 - bLen, targetH - 22);
                g.DrawLine(borderPen, targetW - 22, targetH - 22, targetW - 22, targetH - 22 - bLen);
            }

            // Soft Gold Vitrine Border
            using (Pen outerFrame = new Pen(Color.FromArgb(45, 255, 215, 80), 1.2f))
            {
                g.DrawRectangle(outerFrame, 1, 1, targetW - 3, targetH - 3);
            }

            // Soft Top Vignette
            using (LinearGradientBrush topVignette = new LinearGradientBrush(
                new Point(0, 0),
                new Point(0, 200),
                Color.FromArgb(100, 15, 2, 4),
                Color.FromArgb(0, 0, 0, 0)))
            {
                g.FillRectangle(topVignette, 0, 0, targetW, 200);
            }

            dest.Save(destPath, ImageFormat.Jpeg);
            Console.WriteLine("Festive Gift Background Saved: " + destPath);
        }
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
$appDataDir = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded"
$src = "$appDataDir\media_1793690920044_f59f85f9.jpg"
$dest = "$PWD\scratch\festive_gift_box_studio.jpg"

[FestiveGiftBackgroundRenderer]::Render($src, $dest)

