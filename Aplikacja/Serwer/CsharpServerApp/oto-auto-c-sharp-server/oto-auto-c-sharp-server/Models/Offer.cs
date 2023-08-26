namespace oto_auto_c_sharp_server.Models;

public class Offer
{
    public int ID { get; set; }
    public string Name { get; set; }
    public DateTime CreationDate { get; set; }
    public DateTime ExpirationDate { get; set; }
    public string Price { get; set; }
    public string Currency { get; set; }
}