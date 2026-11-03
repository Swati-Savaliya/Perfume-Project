$code = @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public class KingBottleVariants
{
    public static void Process(string srcPath, string outStudioPath, string outEmeraldPath)
    {
        int targetW = 680;
        int targetH = 850;

        using (Bitmap src = (Bitmap)Image.FromFile(srcPath))
        {
            int bottleSrcX = 30;
            int bottleSrcY = 32;
            int bottleSrcW = 172;
            int bottleSrcH = 290;

            using (Bitmap bottleCutout = new Bitmap(bottleSrcW, bottleSrcH, PixelFormat.Format32bppArgb))
            {
                for (int by = 0; by < bottleSrcH; by++)
                {
                    for (int bx = 0; bx < bottleSrcW; bx++)
                    {
                        Color c = src.GetPixel(bottleSrcX + bx, bottleSrcY + by);
                        bool isOuterMargin = (bx < 6 || bx > bottleSrcW - 6 || by < 6);
                        
                        if (c.R > 250 && c.G > 250 && c.B > 250 && isOuterMargin)
                        {
                            bottleCutout.SetPixel(bx, by, Color.Transparent);
                        }
                        else
                        {
                            if (c.R > 248 && c.G > 248 && c.B > 248 && (bx < 10 || bx > bottleSrcW - 10 || by < 10))
                            {
                                int a = Math.Max(0, 255 - (c.R - 240) * 16);
                                bottleCutout.SetPixel(bx, by, Color.FromArgb(a, c.R, c.G, c.B));
                            }
                            else
                            {
                                bottleCutout.SetPixel(bx, by, c);
                            }
                        }
                    }
                }

                int destW = 390;
                int destH = (int)((double)bottleSrcH / bottleSrcW * destW);
                int destX = (targetW - destW) / 2;
                int pedestalY = 660;
                int destY = pedestalY - destH + 20;

                // ==========================================
                // VARIANT 1: Luxury Warm Champagne Studio
                // ==========================================
                using (Bitmap canvas = new Bitmap(targetW, targetH, PixelFormat.Format24bppRgb))
                using (Graphics g = Graphics.FromImage(canvas))
                {
                    g.SmoothingMode = SmoothingMode.HighQuality;
                    g.InterpolationMode = InterpolationMode.HighQualityBicubic;

                    using (LinearGradientBrush wall = new LinearGradientBrush(
                        new Point(0, 0), new Point(0, targetH),
                        Color.FromArgb(246, 244, 240), Color.FromArgb(228, 222, 214)))
                    {
                        g.FillRectangle(wall, 0, 0, targetW, targetH);
                    }

                    using (GraphicsPath spotlightPath = new GraphicsPath())
                    {
                        spotlightPath.AddEllipse(targetW / 2 - 280, 140, 560, 560);
                        using (PathGradientBrush pgb = new PathGradientBrush(spotlightPath))
                        {
                            pgb.CenterColor = Color.FromArgb(60, 255, 235, 180);
                            pgb.SurroundColors = new Color[] { Color.Transparent };
                            g.FillPath(pgb, spotlightPath);
                        }
                    }

                    using (LinearGradientBrush pedestal = new LinearGradientBrush(
                        new Point(0, pedestalY), new Point(0, targetH),
                        Color.FromArgb(236, 230, 220), Color.FromArgb(210, 202, 190)))
                    {
                        g.FillRectangle(pedestal, 0, pedestalY, targetW, targetH - pedestalY);
                    }

                    using (LinearGradientBrush edgeLine = new LinearGradientBrush(
                        new Point(40, pedestalY), new Point(targetW - 40, pedestalY),
                        Color.Transparent, Color.FromArgb(210, 255, 255, 255)))
                    {
                        edgeLine.SetBlendTriangularShape(0.5f);
                        using (Pen p = new Pen(edgeLine, 2f))
                        {
                            g.DrawLine(p, 40, pedestalY, targetW - 40, pedestalY);
                        }
                    }

                    using (GraphicsPath shadowPath = new GraphicsPath())
                    {
                        shadowPath.AddEllipse(targetW / 2 - 200, pedestalY - 10, 400, 36);
                        using (PathGradientBrush sgb = new PathGradientBrush(shadowPath))
                        {
                            sgb.CenterColor = Color.FromArgb(110, 50, 45, 40);
                            sgb.SurroundColors = new Color[] { Color.Transparent };
                            g.FillPath(sgb, shadowPath);
                        }
                    }

                    using (Bitmap flipped = (Bitmap)bottleCutout.Clone())
                    {
                        flipped.RotateFlip(RotateFlipType.RotateNoneFlipY);
                        ColorMatrix cm = new ColorMatrix { Matrix33 = 0.14f };
                        using (ImageAttributes ia = new ImageAttributes())
                        {
                            ia.SetColorMatrix(cm);
                            g.DrawImage(flipped,
                                new Rectangle(destX, pedestalY, destW, 120),
                                0, bottleSrcH - 80, bottleSrcW, 80,
                                GraphicsUnit.Pixel, ia);
                        }
                    }

                    g.DrawImage(bottleCutout, new Rectangle(destX, destY, destW, destH));
                    canvas.Save(outStudioPath, ImageFormat.Jpeg);
                }

                // ==========================================
                // VARIANT 2: Émeraude Noir Luxury Dark Studio
                // ==========================================
                using (Bitmap canvas = new Bitmap(targetW, targetH, PixelFormat.Format24bppRgb))
                using (Graphics g = Graphics.FromImage(canvas))
                {
                    g.SmoothingMode = SmoothingMode.HighQuality;
                    g.InterpolationMode = InterpolationMode.HighQualityBicubic;

                    using (LinearGradientBrush wall = new LinearGradientBrush(
                        new Point(0, 0), new Point(0, targetH),
                        Color.FromArgb(18, 24, 22), Color.FromArgb(8, 12, 11)))
                    {
                        g.FillRectangle(wall, 0, 0, targetW, targetH);
                    }

                    // Soft emerald / golden radial glow
                    using (GraphicsPath glowPath = new GraphicsPath())
                    {
                        glowPath.AddEllipse(targetW / 2 - 260, 160, 520, 520);
                        using (PathGradientBrush pgb = new PathGradientBrush(glowPath))
                        {
                            pgb.CenterColor = Color.FromArgb(55, 16, 185, 129); // emerald glow
                            pgb.SurroundColors = new Color[] { Color.Transparent };
                            g.FillPath(pgb, glowPath);
                        }
                    }

                    // Polished black marble pedestal
                    using (LinearGradientBrush pedestal = new LinearGradientBrush(
                        new Point(0, pedestalY), new Point(0, targetH),
                        Color.FromArgb(28, 35, 32), Color.FromArgb(10, 14, 13)))
                    {
                        g.FillRectangle(pedestal, 0, pedestalY, targetW, targetH - pedestalY);
                    }

                    // Gold accent line
                    using (LinearGradientBrush edgeLine = new LinearGradientBrush(
                        new Point(40, pedestalY), new Point(targetW - 40, pedestalY),
                        Color.Transparent, Color.FromArgb(180, 245, 190, 80)))
                    {
                        edgeLine.SetBlendTriangularShape(0.5f);
                        using (Pen p = new Pen(edgeLine, 2f))
                        {
                            g.DrawLine(p, 40, pedestalY, targetW - 40, pedestalY);
                        }
                    }

                    // Shadow
                    using (GraphicsPath shadowPath = new GraphicsPath())
                    {
                        shadowPath.AddEllipse(targetW / 2 - 200, pedestalY - 10, 400, 36);
                        using (PathGradientBrush sgb = new PathGradientBrush(shadowPath))
                        {
                            sgb.CenterColor = Color.FromArgb(180, 0, 0, 0);
                            sgb.SurroundColors = new Color[] { Color.Transparent };
                            g.FillPath(sgb, shadowPath);
                        }
                    }

                    // Reflection
                    using (Bitmap flipped = (Bitmap)bottleCutout.Clone())
                    {
                        flipped.RotateFlip(RotateFlipType.RotateNoneFlipY);
                        ColorMatrix cm = new ColorMatrix { Matrix33 = 0.20f };
                        using (ImageAttributes ia = new ImageAttributes())
                        {
                            ia.SetColorMatrix(cm);
                            g.DrawImage(flipped,
                                new Rectangle(destX, pedestalY, destW, 120),
                                0, bottleSrcH - 80, bottleSrcW, 80,
                                GraphicsUnit.Pixel, ia);
                        }
                    }

                    g.DrawImage(bottleCutout, new Rectangle(destX, destY, destW, destH));
                    canvas.Save(outEmeraldPath, ImageFormat.Jpeg);
                }
            }
        }
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
[KingBottleVariants]::Process(
    "$PWD/public/images/perfume_coag_king_bottle.png",
    "$PWD/public/images/perfume_coag_king_luxury_studio.jpg",
    "$PWD/public/images/perfume_coag_king_emerald_studio.jpg"
)
Write-Host "Both King bottle variants generated successfully!"
