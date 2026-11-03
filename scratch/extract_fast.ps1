$code = @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public class BottleCompositor
{
    private static bool InsideBottle(int x, int y)
    {
        // 1. Cap: rounded cylinder (x: 230..452, y: 104..290)
        if (y >= 104 && y <= 290)
        {
            int capLeft = 230, capRight = 452;
            if (y < 122)
            {
                int dy = 122 - y;
                if (x < (capLeft + dy) || x > (capRight - dy)) return false;
            }
            if (x >= capLeft && x <= capRight) return true;
        }

        // 2. Gold Neck Collar (x: 254..428, y: 288..314)
        if (y >= 288 && y <= 314)
        {
            if (x >= 254 && x <= 428) return true;
        }

        // 3. Main Bottle Body (x: 130..556, y: 312..842)
        if (y >= 312 && y <= 842)
        {
            int bLeft = 130, bRight = 556, r = 26;
            // Top-left corner
            if (x < (bLeft + r) && y < (312 + r))
            {
                int dx = (bLeft + r) - x, dy = (312 + r) - y;
                if ((dx * dx + dy * dy) > (r * r)) return false;
            }
            // Top-right corner
            if (x > (bRight - r) && y < (312 + r))
            {
                int dx = x - (bRight - r), dy = (312 + r) - y;
                if ((dx * dx + dy * dy) > (r * r)) return false;
            }
            // Bottom-left corner
            if (x < (bLeft + r) && y > (842 - r))
            {
                int dx = (bLeft + r) - x, dy = y - (842 - r);
                if ((dx * dx + dy * dy) > (r * r)) return false;
            }
            // Bottom-right corner
            if (x > (bRight - r) && y > (842 - r))
            {
                int dx = x - (bRight - r), dy = y - (842 - r);
                if ((dx * dx + dy * dy) > (r * r)) return false;
            }

            if (x >= bLeft && x <= bRight) return true;
        }

        return false;
    }

    public static void Process(string srcPath, string outCutoutPath, string outStudioPath, string outObsidianPath)
    {
        using (Bitmap src = (Bitmap)Image.FromFile(srcPath))
        {
            int w = src.Width, h = src.Height;
            Bitmap cutout = new Bitmap(w, h, PixelFormat.Format32bppArgb);

            BitmapData srcData = src.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
            BitmapData outData = cutout.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);

            int bytes = w * h * 4;
            byte[] srcBuf = new byte[bytes];
            byte[] outBuf = new byte[bytes];
            Marshal.Copy(srcData.Scan0, srcBuf, 0, bytes);

            for (int y = 0; y < h; y++)
            {
                for (int x = 0; x < w; x++)
                {
                    int idx = (y * w + x) * 4;
                    if (InsideBottle(x, y))
                    {
                        bool isEdge = !InsideBottle(x - 1, y) || !InsideBottle(x + 1, y) ||
                                      !InsideBottle(x, y - 1) || !InsideBottle(x, y + 1);

                        outBuf[idx] = srcBuf[idx];         // B
                        outBuf[idx + 1] = srcBuf[idx + 1]; // G
                        outBuf[idx + 2] = srcBuf[idx + 2]; // R
                        outBuf[idx + 3] = isEdge ? (byte)190 : (byte)255; // A
                    }
                }
            }

            Marshal.Copy(outBuf, 0, outData.Scan0, bytes);
            src.UnlockBits(srcData);
            cutout.UnlockBits(outData);

            cutout.Save(outCutoutPath, ImageFormat.Png);

            // ==========================================
            // DESIGN 1: Luxury Dark Obsidian Studio Background
            // ==========================================
            using (Bitmap obsidian = new Bitmap(w, h, PixelFormat.Format24bppRgb))
            using (Graphics g = Graphics.FromImage(obsidian))
            {
                g.SmoothingMode = SmoothingMode.HighQuality;
                g.InterpolationMode = InterpolationMode.HighQualityBicubic;

                // 1. Dark charcoal/obsidian gradient backdrop
                using (LinearGradientBrush bg = new LinearGradientBrush(
                    new Point(0, 0), new Point(0, h),
                    Color.FromArgb(22, 22, 28), Color.FromArgb(7, 7, 10)))
                {
                    g.FillRectangle(bg, 0, 0, w, h);
                }

                // 2. Warm amber/golden radial spotlight behind bottle
                using (GraphicsPath path = new GraphicsPath())
                {
                    path.AddEllipse(w / 2 - 260, 200, 520, 520);
                    using (PathGradientBrush pgb = new PathGradientBrush(path))
                    {
                        pgb.CenterColor = Color.FromArgb(48, 245, 175, 45);
                        pgb.SurroundColors = new Color[] { Color.Transparent };
                        g.FillPath(pgb, path);
                    }
                }

                // 3. Polished marble pedestal base at y=800..1024
                using (LinearGradientBrush pedestal = new LinearGradientBrush(
                    new Point(0, 810), new Point(0, h),
                    Color.FromArgb(32, 33, 40), Color.FromArgb(12, 13, 17)))
                {
                    g.FillRectangle(pedestal, 0, 810, w, h - 810);
                }

                // Pedestal horizon line with warm gold sheen
                using (LinearGradientBrush line = new LinearGradientBrush(
                    new Point(40, 810), new Point(w - 40, 810),
                    Color.Transparent, Color.FromArgb(160, 245, 185, 80)))
                {
                    line.SetBlendTriangularShape(0.5f);
                    using (Pen p = new Pen(line, 2f))
                    {
                        g.DrawLine(p, 40, 810, w - 40, 810);
                    }
                }

                // 4. Soft floor reflection of the bottle
                using (Bitmap flipped = (Bitmap)cutout.Clone())
                {
                    flipped.RotateFlip(RotateFlipType.RotateNoneFlipY);
                    ColorMatrix cm = new ColorMatrix { Matrix33 = 0.18f };
                    using (ImageAttributes ia = new ImageAttributes())
                    {
                        ia.SetColorMatrix(cm);
                        g.DrawImage(flipped, new Rectangle(0, 815, w, (int)(h * 0.45)), 0, (int)(h * 0.55), w, (int)(h * 0.45), GraphicsUnit.Pixel, ia);
                    }
                }

                // 5. Bottle contact shadow
                using (GraphicsPath sp = new GraphicsPath())
                {
                    sp.AddEllipse(120, 825, 440, 30);
                    using (PathGradientBrush sgb = new PathGradientBrush(sp))
                    {
                        sgb.CenterColor = Color.FromArgb(180, 0, 0, 0);
                        sgb.SurroundColors = new Color[] { Color.Transparent };
                        g.FillPath(sgb, sp);
                    }
                }

                // 6. Draw the uncropped bottle cutout
                g.DrawImage(cutout, 0, 0, w, h);

                obsidian.Save(outObsidianPath, ImageFormat.Jpeg);
            }

            // ==========================================
            // DESIGN 2: Warm Champagne Luxury Atelier Background
            // ==========================================
            using (Bitmap studio = new Bitmap(w, h, PixelFormat.Format24bppRgb))
            using (Graphics g = Graphics.FromImage(studio))
            {
                g.SmoothingMode = SmoothingMode.HighQuality;
                g.InterpolationMode = InterpolationMode.HighQualityBicubic;

                // 1. Soft warm ivory-champagne gradient
                using (LinearGradientBrush bg = new LinearGradientBrush(
                    new Point(0, 0), new Point(0, h),
                    Color.FromArgb(246, 243, 237), Color.FromArgb(226, 219, 208)))
                {
                    g.FillRectangle(bg, 0, 0, w, h);
                }

                // 2. Soft golden sunlight radial glow
                using (GraphicsPath path = new GraphicsPath())
                {
                    path.AddEllipse(w / 2 - 280, 160, 560, 560);
                    using (PathGradientBrush pgb = new PathGradientBrush(path))
                    {
                        pgb.CenterColor = Color.FromArgb(50, 255, 230, 170);
                        pgb.SurroundColors = new Color[] { Color.Transparent };
                        g.FillPath(pgb, path);
                    }
                }

                // 3. Clean architectural pedestal plinth at y=815
                using (LinearGradientBrush pedestal = new LinearGradientBrush(
                    new Point(0, 815), new Point(0, h),
                    Color.FromArgb(238, 232, 222), Color.FromArgb(215, 207, 194)))
                {
                    g.FillRectangle(pedestal, 0, 815, w, h - 815);
                }

                // Pedestal top edge highlight
                using (LinearGradientBrush line = new LinearGradientBrush(
                    new Point(30, 815), new Point(w - 30, 815),
                    Color.Transparent, Color.FromArgb(200, 255, 255, 255)))
                {
                    line.SetBlendTriangularShape(0.5f);
                    using (Pen p = new Pen(line, 1.5f))
                    {
                        g.DrawLine(p, 30, 815, w - 30, 815);
                    }
                }

                // 4. Contact shadow
                using (GraphicsPath sp = new GraphicsPath())
                {
                    sp.AddEllipse(120, 825, 440, 32);
                    using (PathGradientBrush sgb = new PathGradientBrush(sp))
                    {
                        sgb.CenterColor = Color.FromArgb(90, 80, 70, 60);
                        sgb.SurroundColors = new Color[] { Color.Transparent };
                        g.FillPath(sgb, sp);
                    }
                }

                // 5. Draw the uncropped bottle cutout
                g.DrawImage(cutout, 0, 0, w, h);

                studio.Save(outStudioPath, ImageFormat.Jpeg);
            }

            cutout.Dispose();
        }
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
[BottleCompositor]::Process(
    "$PWD/public/images/perfume_coag_antique_floral.jpg",
    "$PWD/public/images/perfume_coag_antique_bottle_cutout.png",
    "$PWD/public/images/perfume_coag_antique_champagne.jpg",
    "$PWD/public/images/perfume_coag_antique_obsidian.jpg"
)
Write-Host "Compositing finished successfully!"

