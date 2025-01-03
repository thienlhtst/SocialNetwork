using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserCore.Entities
{
    public class Follow
    {
        public Guid UserIdFollower { get; set; }
        public User UserFollower { get; set; }

        public Guid UserIdFollowee { get; set; }
        public User UserFollowee { get; set; }

        public DateTime CreateAat { get; set; } = DateTime.Now;

        public bool IsFollowing { get; set; } = true;
    }
}