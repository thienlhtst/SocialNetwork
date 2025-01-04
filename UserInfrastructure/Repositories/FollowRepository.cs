using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserCore.Entities;
using UserCore.InterfaceRepositories;

namespace UserInfrastructure.Repositories
{
    public class FollowRepository : IFollowRepository
    {
        private readonly UserDbContext _userDbContext;

        public FollowRepository(UserDbContext userDbContext)
        {
            _userDbContext=userDbContext;
        }

        public async Task<Follow> GetbyID(string idfollower, string idfollowee)
        {
            var result = await _userDbContext.Follows.FirstOrDefaultAsync(x => x.UserIdFollower.Equals(idfollower) && x.UserIdFollowee.Equals(idfollower));
            return result;
        }
    }
}