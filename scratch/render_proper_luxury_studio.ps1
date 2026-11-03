$code = @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;

public class LuxuryProperDesignStudio
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

            // ========================================================
            // 1. LUXURY STUDIO BACKGROUND (Atmospheric Fragrance Boutique)
            // ========================================================
            
            // Rich multi-stop dark charcoal & warm amber studio backdrop
            using (GraphicsPath bgPath = new GraphicsPath())
            {
                bgPath.AddRectangle(new Rectangle(0, 0, targetW, targetH));
                using (PathGradientBrush pgb = new PathGradientBrush(bgPath))
                {
                    pgb.CenterPoint = new PointF(targetW / 2f, 430f);
                    pgb.CenterColor = Color.FromArgb(255, 38, 34, 36); // warm deep charcoal center
                    pgb.SurroundColors = new Color[] { Color.FromArgb(255, 12, 11, 14) }; // rich noir edges
                    g.FillPath(pgb, bgPath);
                }
            }

            // Soft radial spotlight glow directly behind the box
            using (GraphicsPath spotPath = new GraphicsPath())
            {
                spotPath.AddEllipse(targetW / 2f - 360, 160, 720, 620);
                using (PathGradientBrush spotBrush = new PathGradientBrush(spotPath))
                {
                    spotBrush.CenterColor = Color.FromArgb(48, 230, 190, 80); // warm champagne gold
                    spotBrush.SurroundColors = new Color[] { Color.FromArgb(0, 0, 0, 0) };
                    g.FillPath(spotBrush, spotPath);
                }
            }

            // ========================================================
            // 2. LUXURY MARBLE PEDESTAL / TABLE SURFACE (from Y=740 to 1200)
            // ========================================================
            int tableY = 740;

            // Draw deep polished Nero Marquina marble surface
            using (LinearGradientBrush tableBrush = new LinearGradientBrush(
                new Point(0, tableY),
                new Point(0, targetH),
                Color.FromArgb(255, 26, 25, 29),
                Color.FromArgb(255, 14, 13, 16)))
            {
                g.FillRectangle(tableBrush, 0, tableY, targetW, targetH - tableY);
            }

            // Draw delicate gold and white marble veining on the table
            using (Pen goldVein = new Pen(Color.FromArgb(28, 212, 175, 55), 1.2f))
            {
                PointF[] v1 = new PointF[] {
                    new PointF(60, tableY + 60), new PointF(180, tableY + 120),
                    new PointF(260, tableY + 110), new PointF(420, tableY + 220),
                    new PointF(580, tableY + 260), new PointF(740, tableY + 380)
                };
                g.DrawCurve(goldVein, v1, 0.4f);

                PointF[] v2 = new PointF[] {
                    new PointF(620, tableY + 40), new PointF(700, tableY + 100),
                    new PointF(780, tableY + 180), new PointF(850, tableY + 280)
                };
                g.DrawCurve(goldVein, v2, 0.5f);
            }

            // Polished Table Edge Bevel (Champagne Gold Rim Light)
            using (LinearGradientBrush tableRimBrush = new LinearGradientBrush(
                new Point(0, 0),
                new Point(targetW, 0),
                Color.FromArgb(0, 212, 175, 55),
                Color.FromArgb(0, 212, 175, 55)))
            {
                ColorBlend cb = new ColorBlend();
                cb.Colors = new Color[] {
                    Color.FromArgb(0, 212, 175, 55),
                    Color.FromArgb(90, 212, 175, 55),
                    Color.FromArgb(170, 255, 235, 160),
                    Color.FromArgb(90, 212, 175, 55),
                    Color.FromArgb(0, 212, 175, 55)
                };
                cb.Positions = new float[] { 0f, 0.2f, 0.5f, 0.8f, 1f };
                tableRimBrush.InterpolationColors = cb;
                using (Pen rimPen = new Pen(tableRimBrush, 2.0f))
                {
                    g.DrawLine(rimPen, 20, tableY, targetW - 20, tableY);
                }
            }

            // ========================================================
            // 3. CONTACT SHADOW & GROUND PERSPECTIVE
            // ========================================================
            
            // Soft wide ambient occlusion shadow under the box
            using (GraphicsPath wideShadow = new GraphicsPath())
            {
                wideShadow.AddEllipse(80, tableY - 40, 740, 260);
                using (PathGradientBrush wsb = new PathGradientBrush(wideShadow))
                {
                    wsb.CenterColor = Color.FromArgb(200, 0, 0, 0);
                    wsb.SurroundColors = new Color[] { Color.FromArgb(0, 0, 0, 0) };
                    g.FillPath(wsb, wideShadow);
                }
            }

            // Deep tight contact shadow directly under box base
            using (GraphicsPath tightShadow = new GraphicsPath())
            {
                tightShadow.AddEllipse(140, tableY - 15, 620, 140);
                using (PathGradientBrush tsb = new PathGradientBrush(tightShadow))
                {
                    tsb.CenterColor = Color.FromArgb(235, 0, 0, 0);
                    tsb.SurroundColors = new Color[] { Color.FromArgb(0, 0, 0, 0) };
                    g.FillPath(tsb, tightShadow);
                }
            }

            // Ribbon tail shadow on table
            using (GraphicsPath ribbonShadow = new GraphicsPath())
            {
                ribbonShadow.AddEllipse(220, tableY + 40, 460, 220);
                using (PathGradientBrush rsb = new PathGradientBrush(ribbonShadow))
                {
                    rsb.CenterColor = Color.FromArgb(180, 0, 0, 0);
                    rsb.SurroundColors = new Color[] { Color.FromArgb(0, 0, 0, 0) };
                    g.FillPath(rsb, ribbonShadow);
                }
            }

            // ========================================================
            // 4. PRECISE BOX EXTRACTION (WITH TRUE UNBROKEN GEOMETRY)
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

                        // 1. Top Lid Polygon:
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
                        // 2. Base below lid:
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
                        // 3. Ribbon Loops & Tails:
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
                                pixR = Math.Min(255, (int)(c.R * 1.15));
                                pixG = Math.Min(255, (int)(c.G * 1.15));
                                pixB = Math.Min(255, (int)(c.B * 1.20));
                            }
                            else
                            {
                                pixR = Math.Min(255, (int)(c.R * 0.90));
                                pixG = Math.Min(255, (int)(c.G * 0.90));
                                pixB = Math.Min(255, (int)(c.B * 0.98));
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

                // ========================================================
                // 5. RENDER GROUND REFLECTION ON POLISHED TABLE
                // ========================================================
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
                        cmRef.Matrix33 = 0.18f;
                        refAttr.SetColorMatrix(cmRef, ColorMatrixFlag.Default, ColorAdjustType.Bitmap);

                        int refTargetH = 140;
                        g.DrawImage(reflection, new Rectangle(drawX, tableY, drawW, refTargetH), 0, 0, srcW, 200, GraphicsUnit.Pixel, refAttr);
                    }
                }

                // ========================================================
                // 6. DRAW THE BEAUTIFUL BOX ONTO THE STAGE
                // ========================================================
                g.DrawImage(boxCutout, new Rectangle(drawX, drawY, drawW, drawH), 0, 0, srcW, srcH, GraphicsUnit.Pixel);
            }

            // ========================================================
            // 7. LUXURY STUDIO POLISH & ATMOSPHERIC LIGHTING
            // ========================================================

            // Subtle warm golden light rim on top edge of the box
            using (LinearGradientBrush topEdgeGlow = new LinearGradientBrush(
                new Point(0, drawY + 30),
                new Point(targetW, drawY + 30),
                Color.FromArgb(0, 255, 235, 170),
                Color.FromArgb(0, 255, 235, 170)))
            {
                ColorBlend cbGlow = new ColorBlend();
                cbGlow.Colors = new Color[] {
                    Color.FromArgb(0, 255, 235, 170),
                    Color.FromArgb(70, 255, 235, 170),
                    Color.FromArgb(130, 255, 250, 210),
                    Color.FromArgb(70, 255, 235, 170),
                    Color.FromArgb(0, 255, 235, 170)
                };
                cbGlow.Positions = new float[] { 0f, 0.25f, 0.5f, 0.75f, 1f };
                topEdgeGlow.InterpolationColors = cbGlow;
                using (Pen glowPen = new Pen(topEdgeGlow, 2.0f))
                {
                    g.DrawLine(glowPen, drawX + 180, drawY + 50, drawX + 580, drawY + 62);
                }
            }

            // Delicate luxury champagne gold corner brackets
            int bLen = 24;
            using (Pen borderPen = new Pen(Color.FromArgb(140, 212, 175, 55), 1.8f))
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

            // Very subtle outer vitrine frame
            using (Pen outerFrame = new Pen(Color.FromArgb(30, 255, 255, 255), 1.0f))
            {
                g.DrawRectangle(outerFrame, 1, 1, targetW - 3, targetH - 3);
            }

            // Top ambient studio vignette
            using (LinearGradientBrush topVignette = new LinearGradientBrush(
                new Point(0, 0),
                new Point(0, 220),
                Color.FromArgb(120, 5, 5, 8),
                Color.FromArgb(0, 0, 0, 0)))
            {
                g.FillRectangle(topVignette, 0, 0, targetW, 220);
            }

            dest.Save(destPath, ImageFormat.Jpeg);
            Console.WriteLine("Proper Luxury Studio Design Saved: " + destPath);
        }
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
$appDataDir = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded"
$src = "$appDataDir\media_1793690920044_f59f85f9.jpg"
$dest = "$PWD\scratch\proper_luxury_box_studio.jpg"

[LuxuryProperDesignStudio]::Render($src, $dest)
