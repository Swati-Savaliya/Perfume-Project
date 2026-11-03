$code = @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;

public class WhiteMarbleCompositor
{
    public static void Process(string cutoutPath, string outPath)
    {
        using (Bitmap cutout = (Bitmap)Image.FromFile(cutoutPath))
        {
            int w = cutout.Width;
            int h = cutout.Height;

            using (Bitmap canvas = new Bitmap(w, h, PixelFormat.Format24bppRgb))
            using (Graphics g = Graphics.FromImage(canvas))
            {
                g.SmoothingMode = SmoothingMode.HighQuality;
                g.InterpolationMode = InterpolationMode.HighQualityBicubic;

                // 1. Pristine luxury off-white / light silver-grey studio wall
                using (LinearGradientBrush wall = new LinearGradientBrush(
                    new Point(0, 0), new Point(0, h),
                    Color.FromArgb(252, 252, 253), Color.FromArgb(238, 240, 243)))
                {
                    g.FillRectangle(wall, 0, 0, w, h);
                }

                // 2. Soft bright radial spotlight behind bottle
                using (GraphicsPath path = new GraphicsPath())
                {
                    path.AddEllipse(w / 2 - 280, 140, 560, 560);
                    using (PathGradientBrush pgb = new PathGradientBrush(path))
                    {
                        pgb.CenterColor = Color.FromArgb(80, 255, 255, 255);
                        pgb.SurroundColors = new Color[] { Color.Transparent };
                        g.FillPath(pgb, path);
                    }
                }

                // 3. Crisp white marble block pedestal at y=815..h
                int pedY = 815;
                using (LinearGradientBrush pedestal = new LinearGradientBrush(
                    new Point(0, pedY), new Point(0, h),
                    Color.FromArgb(245, 246, 248), Color.FromArgb(226, 228, 232)))
                {
                    g.FillRectangle(pedestal, 0, pedY, w, h - pedY);
                }

                // Pedestal top edge highlight
                using (LinearGradientBrush line = new LinearGradientBrush(
                    new Point(30, pedY), new Point(w - 30, pedY),
                    Color.Transparent, Color.FromArgb(240, 255, 255, 255)))
                {
                    line.SetBlendTriangularShape(0.5f);
                    using (Pen p = new Pen(line, 2f))
                    {
                        g.DrawLine(p, 30, pedY, w - 30, pedY);
                    }
                }

                // 4. Subtle floor reflection
                using (Bitmap flipped = (Bitmap)cutout.Clone())
                {
                    flipped.RotateFlip(RotateFlipType.RotateNoneFlipY);
                    ColorMatrix cm = new ColorMatrix { Matrix33 = 0.12f };
                    using (ImageAttributes ia = new ImageAttributes())
                    {
                        ia.SetColorMatrix(cm);
                        g.DrawImage(flipped, new Rectangle(0, pedY, w, (int)(h * 0.35)), 0, (int)(h * 0.65), w, (int)(h * 0.35), GraphicsUnit.Pixel, ia);
                    }
                }

                // 5. Contact shadow under bottle
                using (GraphicsPath sp = new GraphicsPath())
                {
                    sp.AddEllipse(120, pedY + 8, 440, 30);
                    using (PathGradientBrush sgb = new PathGradientBrush(sp))
                    {
                        sgb.CenterColor = Color.FromArgb(90, 70, 75, 85);
                        sgb.SurroundColors = new Color[] { Color.Transparent };
                        g.FillPath(sgb, sp);
                    }
                }

                // 6. Draw the bottle cutout
                g.DrawImage(cutout, 0, 0, w, h);

                canvas.Save(outPath, ImageFormat.Jpeg);
            }
        }
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
[WhiteMarbleCompositor]::Process(
    "$PWD/public/images/perfume_coag_antique_bottle_cutout.png",
    "$PWD/public/images/perfume_coag_antique_white_marble.jpg"
)
Write-Host "White marble composite complete!"

