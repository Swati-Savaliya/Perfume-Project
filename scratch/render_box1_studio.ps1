$code = @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;

public class LuxuryStudioRenderer
{
    public static void RenderClosedBox(string srcPath, string destPath)
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

            // 1. Draw Opulent Studio Background
            // Dark luxury charcoal / noir with warm amber radial studio glow behind the box
            using (GraphicsPath bgPath = new GraphicsPath())
            {
                bgPath.AddRectangle(new Rectangle(0, 0, targetW, targetH));
                using (PathGradientBrush pgb = new PathGradientBrush(bgPath))
                {
                    pgb.CenterPoint = new PointF(targetW / 2f, 480f);
                    pgb.CenterColor = Color.FromArgb(255, 38, 35, 38); // warm charcoal core
                    pgb.SurroundColors = new Color[] { Color.FromArgb(255, 7, 7, 9) }; // deep noir corners
                    g.FillPath(pgb, bgPath);
                }
            }

            // Subtle warm golden backlight halo
            using (GraphicsPath haloPath = new GraphicsPath())
            {
                haloPath.AddEllipse(targetW / 2f - 320, 260, 640, 520);
                using (PathGradientBrush halo = new PathGradientBrush(haloPath))
                {
                    halo.CenterColor = Color.FromArgb(32, 212, 175, 55); // soft gold
                    halo.SurroundColors = new Color[] { Color.FromArgb(0, 0, 0, 0) };
                    g.FillPath(halo, haloPath);
                }
            }

            // Luxury Dark Marble / Ebony Plinth at the base (from Y=780 to 1200)
            int plinthY = 760;
            using (LinearGradientBrush plinthBrush = new LinearGradientBrush(
                new Point(0, plinthY),
                new Point(0, targetH),
                Color.FromArgb(255, 22, 22, 26),
                Color.FromArgb(255, 10, 10, 12)))
            {
                g.FillRectangle(plinthBrush, 0, plinthY, targetW, targetH - plinthY);
            }

            // Subtle rim line on plinth edge
            using (LinearGradientBrush rimBrush = new LinearGradientBrush(
                new Point(0, 0),
                new Point(targetW, 0),
                Color.FromArgb(0, 212, 175, 55),
                Color.FromArgb(0, 212, 175, 55)))
            {
                ColorBlend cb = new ColorBlend();
                cb.Colors = new Color[] {
                    Color.FromArgb(0, 212, 175, 55),
                    Color.FromArgb(90, 212, 175, 55),
                    Color.FromArgb(140, 255, 230, 150),
                    Color.FromArgb(90, 212, 175, 55),
                    Color.FromArgb(0, 212, 175, 55)
                };
                cb.Positions = new float[] { 0f, 0.25f, 0.5f, 0.75f, 1f };
                rimBrush.InterpolationColors = cb;
                using (Pen rimPen = new Pen(rimBrush, 1.5f))
                {
                    g.DrawLine(rimPen, 40, plinthY, targetW - 40, plinthY);
                }
            }

            // Contact Shadow for the box and ribbon on the plinth
            using (GraphicsPath shadowPath = new GraphicsPath())
            {
                shadowPath.AddEllipse(120, plinthY - 30, 650, 220);
                using (PathGradientBrush shadowBrush = new PathGradientBrush(shadowPath))
                {
                    shadowBrush.CenterColor = Color.FromArgb(190, 0, 0, 0);
                    shadowBrush.SurroundColors = new Color[] { Color.FromArgb(0, 0, 0, 0) };
                    g.FillPath(shadowBrush, shadowPath);
                }
            }

            // 2. Cutout Box & Ribbon from source
            // Source dimensions: 935 x 1024
            // Define source polygon / mask
            int srcW = src.Width;
            int srcH = src.Height;

            using (Bitmap boxCutout = new Bitmap(srcW, srcH, PixelFormat.Format32bppArgb))
            {
                // Box lid vertices approx:
                // Top-Left: (248, 254), Top-Right: (748, 270)
                // Far-Left Lid: (144, 650), Front center ribbon: (450..580, 700..995)
                // Far-Right Lid: (758, 680)

                for (int y = 0; y < srcH; y++)
                {
                    for (int x = 0; x < srcW; x++)
                    {
                        Color c = src.GetPixel(x, y);

                        // Is this pixel part of the box or ribbon?
                        bool inside = false;

                        // Check bounding box region of interest
                        if (x >= 140 && x <= 765 && y >= 252 && y <= 1005)
                        {
                            // Test top boundary line from (248, 254) to (748, 270)
                            double topY = 254.0 + (y - 254.0); // baseline
                            if (x >= 248 && x <= 748)
                            {
                                topY = 254.0 + (x - 248.0) * (270.0 - 254.0) / (748.0 - 248.0);
                            }
                            else if (x < 248)
                            {
                                // Top-left slant from (144, 650) to (248, 254)
                                topY = 254.0 + (248.0 - x) * (650.0 - 254.0) / (248.0 - 144.0);
                            }

                            if (y >= topY - 1)
                            {
                                // Inside top polygon!
                                // Check left slant line from (144, 650) to (174, 772)
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
                                    // Ribbon bottom left area
                                    leftX = 230.0;
                                }

                                // Check right vertical edge around 758
                                double rightX = 758.0;

                                if (x >= leftX - 2 && x <= rightX + 2)
                                {
                                    // Concrete check: concrete is bright warm grey (brightness > 130 and R>120, G>105)
                                    // Box & ribbon are dark (brightness < 125)
                                    double bright = (c.R * 0.299 + c.G * 0.587 + c.B * 0.114);
                                    
                                    // Top face of box has brightness around 80-110, text has 190+
                                    bool isText = (x >= 400 && x <= 550 && y >= 400 && y <= 450 && bright > 150);
                                    
                                    if (isText)
                                    {
                                        inside = true;
                                    }
                                    else if (y < 770 && x >= leftX && x <= rightX)
                                    {
                                        // Main box body
                                        if (bright < 135 || (c.B > c.R - 10))
                                        {
                                            inside = true;
                                        }
                                    }
                                    else if (y >= 770)
                                    {
                                        // Ribbon tails hanging down
                                        // Ribbon is black satin (bright < 80, or satin sparkle < 140 with low warm tint)
                                        if (bright < 95 || (bright < 145 && Math.Abs(c.R - c.B) < 15))
                                        {
                                            // Ensure we are within ribbon footprint
                                            if ((x >= 240 && x <= 480 && y <= 900) ||
                                                (x >= 480 && x <= 690 && y <= 1000))
                                            {
                                                inside = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        if (inside)
                        {
                            // Boost contrast and enrich black tones for luxury depth
                            int pixR = Math.Min(255, (int)(c.R * 0.95));
                            int pixG = Math.Min(255, (int)(c.G * 0.95));
                            int pixB = Math.Min(255, (int)(c.B * 1.02)); // subtle cool navy/black luxury sheen
                            boxCutout.SetPixel(x, y, Color.FromArgb(255, pixR, pixG, pixB));
                        }
                        else
                        {
                            boxCutout.SetPixel(x, y, Color.FromArgb(0, 0, 0, 0));
                        }
                    }
                }

                // Render Cutout onto Studio Destination
                // Scale and center box attractively on canvas
                // Source box width is ~620, height is ~750
                // Target width is 896, height is 1200
                int drawW = 780;
                int drawH = (int)(drawW * (1024.0 / 935.0));
                int drawX = (targetW - drawW) / 2 + 5;
                int drawY = 150;

                g.DrawImage(boxCutout, new Rectangle(drawX, drawY, drawW, drawH), 0, 0, srcW, srcH, GraphicsUnit.Pixel);
            }

            // Top Studio Ambient Vignette
            using (LinearGradientBrush topGrad = new LinearGradientBrush(
                new Point(0, 0),
                new Point(0, 280),
                Color.FromArgb(160, 5, 5, 7),
                Color.FromArgb(0, 0, 0, 0)))
            {
                g.FillRectangle(topGrad, 0, 0, targetW, 280);
            }

            // Outer Luxury Border / Subtle Glow
            using (Pen borderPen = new Pen(Color.FromArgb(35, 212, 175, 55), 1.5f))
            {
                g.DrawRectangle(borderPen, 1, 1, targetW - 3, targetH - 3);
            }

            dest.Save(destPath, ImageFormat.Jpeg);
            Console.WriteLine("Saved studio box 1: " + destPath);
        }
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
$appDataDir = "C:\Users\YIIT ACADEMY\.gemini\antigravity\brain\a42ee900-3391-48f4-8f54-3802f2d906f1\.user_uploaded"
$src = "$appDataDir\media_1793690920044_f59f85f9.jpg"
$dest = "$PWD\scratch\test_box1_render.jpg"

[LuxuryStudioRenderer]::RenderClosedBox($src, $dest)
