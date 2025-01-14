using Microsoft.EntityFrameworkCore;
using NotificationPresentation.Enitites;

namespace NotificationPresentation.Infrastucture
{
    public class NotificationDbContext : DbContext
    {
        public NotificationDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Notification>().ToTable(nameof(Notification));
            modelBuilder.Entity<Notification>().HasKey(x => x.Id);
        }

        private DbSet<Notification> notifications { get; set; }
    }
}