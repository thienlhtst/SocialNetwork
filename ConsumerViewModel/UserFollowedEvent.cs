using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsumerViewModel
{
    public class UserFollowedEvent
    {
        public string UserIdFollower { get; init; }       // Người gửi follow
        public string UserIdFollowee { get; init; } // Người được follow
        public DateTime FollowedAt { get; init; }
    }
}