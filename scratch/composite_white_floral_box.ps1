$code = @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;

public class WhiteFloralGiftBoxRenderer
{
    public static void Render(string srcBoxPath, string bgPath, string destPath)
    {
        int targetW = 896;
        int targetH = 1200;

        using (Bitmap bg = (Bitmap)Image.FromFile(bgPath))
        using (Bitmap srcBox = (Bitmap)Image.FromFile(srcBoxPath))
        using (Bitmap dest = new Bitmap(targetW, targetH, PixelFormat.Format32bppArgb))
        using (Graphics g = Graphics.FromImage(dest))
        {
            g.SmoothingMode = SmoothingMode.HighQuality;
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.PixelOffsetMode = PixelOffsetMode.HighQuality;

            // 1. Draw the Gorgeous White Flowers Background
            g.DrawImage(bg, new Rectangle(0, 0, targetW, targetH), 0, 0, bg.Width, bg.Height, GraphicsUnit.Pixel);

            // Subtle top/corner studio vignette for depth
            using (GraphicsPath vigPath = new GraphicsPath())
            {
                vigPath.AddRectangle(new Rectangle(0, 0, targetW, targetH));
                using (PathGradientBrush vigBrush = new PathGradientBrush(vigPath))
                {
                    vigBrush.CenterPoint = new PointF(targetW / 2f, 480f);
                    vigBrush.CenterColor = Color.FromArgb(0, 0, 0, 0);
                    vigBrush.SurroundColors = new Color[] { Color.FromArgb(60, 20, 20, 15) };
                    g.FillPath(vigBrush, vigPath);
                }
            }

            // 2. Position and Scale for the Box
            // Pedestal top is at Y ≈ 760..770
            // Source box dimensions: 935 x 1024
            // In source: base is at Y=775, ribbon hangs to Y=1000
            int boxDrawW = 590;
            int boxDrawH = (int)(boxDrawW * (1024.0 / 935.0)); // ~646
            int boxDrawX = (targetW - boxDrawW) / 2; // ~153
            
            // We want source base (Y=775 in src) to align with pedestal (Y=765 in dest)
            // Scale factor = boxDrawH / 1024.0 = 646.0 / 1024.0 ≈ 0.6308
            // Base Y in dest = boxDrawY + (775 * 0.6308) = boxDrawY + 489
            // boxDrawY = 765 - 489 = 276
            int boxDrawY = 276;
            int pedestalY = 765;

            // 3. Realistic Soft Contact Shadow on White Stone Pedestal
            // Multi-layered soft ambient occlusion shadow
            for (int i = 18; i >= 1; i--)
            {
                int alpha = (int)(110 / (1 + i * 0.85));
                using (SolidBrush shadowBrush = new SolidBrush(Color.FromArgb(alpha, 45, 40, 35)))
                {
                    float padX = i * 4.2f;
                    float padY = i * 1.6f;
                    float shadowW = boxDrawW * 0.90f + padX * 2;
                    float shadowH = 22f + padY * 2;
                    float shadowX = boxDrawX + (boxDrawW - shadowW) / 2;
                    float shadowY = pedestalY - 10 + (i * 0.4f);
                    g.FillEllipse(shadowBrush, shadowX, shadowY, shadowW, shadowH);
                }
            }

            // Crisp contact occlusion line right under the base
            using (SolidBrush contactBrush = new SolidBrush(Color.FromArgb(170, 30, 25, 20)))
            {
                g.FillRectangle(contactBrush, boxDrawX + 60, pedestalY - 4, boxDrawW - 120, 6);
            }

            // Ribbon tail shadow on the front stone of the pedestal
            using (GraphicsPath ribbonShadow = new GraphicsPath())
            {
                ribbonShadow.AddEllipse(boxDrawX + 130, pedestalY + 15, boxDrawW - 260, 130);
                using (PathGradientBrush rsb = new PathGradientBrush(ribbonShadow))
                {
                    rsb.CenterColor = Color.FromArgb(130, 35, 30, 25);
                    rsb.SurroundColors = new Color[] { Color.FromArgb(0, 0, 0, 0) };
                    g.FillPath(rsb, ribbonShadow);
                }
            }

            // 4. Precise Box Cutout with Smooth Anti-Aliasing
            int srcW = srcBox.Width;
            int srcH = srcBox.Height;

            using (Bitmap boxCutout = new Bitmap(srcW, srcH, PixelFormat.Format32bppArgb))
            {
                for (int y = 0; y < srcH; y++)
                {
                    for (int x = 0; x < srcW; x++)
                    {
                        Color c = srcBox.GetPixel(x, y);

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
                            if (dEdge < 1.8) edgeFactor = (float)Math.Max(0.15, dEdge / 1.8);
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
                                if (dEdge < 1.8) edgeFactor = (float)Math.Max(0.15, dEdge / 1.8);
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
                                // Crisp silver typography
                                pixR = Math.Min(255, (int)(c.R * 1.15));
                                pixG = Math.Min(255, (int)(c.G * 1.15));
                                pixB = Math.Min(255, (int)(c.B * 1.18));
                            }
                            else
                            {
                                // Deep matte luxury noir
                                pixR = Math.Min(255, (int)(c.R * 0.92));
                                pixG = Math.Min(255, (int)(c.G * 0.92));
                                pixB = Math.Min(255, (int)(c.B * 0.96));
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

                // 5. Draw the Box onto the White Floral Pedestal
                g.DrawImage(boxCutout, new Rectangle(boxDrawX, boxDrawY, boxDrawW, boxDrawH), 0, 0, srcW, srcH, GraphicsUnit.Pixel);
            }

            // 6. Luxury Champagne Gold Corner Accents & Subtle Vitrine Border
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

            // Subtle outer border
            using (Pen outerFrame = new Pen(Color.FromArgb(40, 200, 160, 60), 1.0f))
            {
                g.DrawRectangle(outerFrame, 1, 1, targetW - 3, targetH - 3);
            }

            dest.Save(destPath, ImageFormat.Jpeg);
            Console.WriteLine("White Floral Gift Box Masterpiece Saved: " + destPath);
        }
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
$appDataDir = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded"
$srcBox = "$appDataDir\media_1793690920044_f59f85f9.jpg"
$bg = "$PWD\public\images\white_flowers_bg.jpg"
$dest = "$PWD\scratch\white_floral_gift_box.jpg"

[WhiteFloralGiftBoxRenderer]::Render($srcBox, $bg, $dest)

