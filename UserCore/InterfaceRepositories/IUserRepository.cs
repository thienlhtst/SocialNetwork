﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserCore.Entities;

namespace UserCore.InterfaceRepositories
{
    public interface IUserRepository
    {
        Task<User?> GetbyUniqueString(string request);

        Task<User?> GetInfoUser(string requestId);

        public Task<List<User>?> GetFollowerOrFolloweeUser(string requestId, string type, bool typePrivate);

        public Task<List<User>?> GetUserToSreach(string request);
    }
}