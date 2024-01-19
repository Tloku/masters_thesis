using System.Drawing.Imaging;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats.Jpeg;

namespace oto_auto_c_sharp_server.Utils;

public class ImageLoader
{
    public static string LoadImageFromPath(string path)
    {
        using (var fileStream = new FileStream(path, FileMode.Open))
        {
            using (var image = Image.Load(fileStream))
            {
                using (var ms = new MemoryStream())
                {
                    image.Save(ms, new JpegEncoder());
                    return Convert.ToBase64String(ms.ToArray());
                }
            }
        }
    }
}