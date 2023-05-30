using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class ReceptekContext : DbContext
    {
        public ReceptekContext(DbContextOptions<ReceptekContext> options) : base(options) { }

        public DbSet<Kategoriak> Kategoriak { get; set; }

        public DbSet<Receptek> Receptek { get; set; }
    }
}
