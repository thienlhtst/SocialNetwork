using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserCore.Entities;

namespace UserInfrastructure.Configurations
{
    public class FollowConfiguration : IEntityTypeConfiguration<Follow>
    {
        public void Configure(EntityTypeBuilder<Follow> builder)
        {
            builder.ToTable("Follow");
            builder.HasKey(f => new { f.UserIdFollower, f.UserIdFollowee }); // Khóa chính kép
            builder.HasOne(f => f.UserFollower)
        .WithMany(u => u.Followers)
        .HasForeignKey(f => f.UserIdFollower)
        .OnDelete(DeleteBehavior.Restrict); // Không xóa dây chuyền

            builder
                .HasOne(f => f.UserFollowee)
                .WithMany(u => u.Followees)
                .HasForeignKey(f => f.UserIdFollowee)
                .OnDelete(DeleteBehavior.Restrict); // Không xóa dây chuyền
        }
    }
}