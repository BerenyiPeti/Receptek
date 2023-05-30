namespace Backend
{
    public class Receptek
    {
        public int id { get; set; }

        public string nev { get; set; } = string.Empty;

        public int kat_id { get; set; } 

        public string kep_eleresi_ut { get; set; } = string.Empty;

        public string leiras { get; set; } = string.Empty;
    }
}
