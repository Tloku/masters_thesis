using System.Drawing.Imaging;
using System.Net.Mime;

namespace oto_auto_c_sharp_server.Utils;

using System.Drawing;

public class ImageLoader
{
    public static string LoadImageFromPath(string path)
    {
        // LowerImageQuality(path, mainImage);
        using (FileStream fileStream = new FileStream(path, FileMode.Open))
        {
            using (var ms = new MemoryStream())
            {
                fileStream.CopyTo(ms);
                Bitmap image = new Bitmap(1, 1);
                image.Save(ms, ImageFormat.Jpeg);
                return Convert.ToBase64String(ms.ToArray());
            }
        }
    }

    private static void LowerImageQuality(string path, Image image)
    {
        try
        {
            EncoderParameter qualityParam = new EncoderParameter(Encoder.Quality, 50);
            ImageCodecInfo jpegCodec = GetEncoderInfo("image/jpeg");
            var encoderParams = new EncoderParameters(1);
            encoderParams.Param[0] = qualityParam;
            
            // Try saving to a different path for debugging purposes
            string outputPath = Path.Combine(Path.GetDirectoryName(path), "worse-quality.jpg");
            image.Save(outputPath, jpegCodec, encoderParams);
            // image.Save(path, jpegCoced, encoderParams);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error lowering image quality or saving: {ex.Message}");
            Console.WriteLine(ex.StackTrace); // Print the stack trace for more details
        }
    }
    
    private static ImageCodecInfo GetEncoderInfo(string mimeType)
    {
        ImageCodecInfo[] codecs = ImageCodecInfo.GetImageEncoders();

        foreach (var codec in codecs)
        {
            if (codec.MimeType == mimeType)
                return codec;
        }
        
        return null;
    }
}