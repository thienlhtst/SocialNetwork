﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserApplication.ViewModel.FollowViewModel;
using UserCore.Entities;

namespace UserApplication.Interfaces
{
    public interface IFollowService
    {
        public Task<List<Follow>> Getall();

        public Task<int> RequestFollowTo(RequestFollowVM request);

        public Task<int> ResponseFollowPrivateUser(RequestFollowVM request);

        public Task<int> RemoveFollowUser(RequestFollowVM request);
    }
}