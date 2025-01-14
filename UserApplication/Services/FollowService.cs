using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserApplication.Interfaces;
using UserApplication.ViewModel.FollowViewModel;
using UserCore.Entities;
using UserCore.InterfaceRepositories;

namespace UserApplication.Services
{
    public class FollowService : IFollowService
    {
        private readonly IFollowRepository _followRepository;
        private readonly IBaseRepository<Follow> _followBase;

        public FollowService(IFollowRepository followRepository, IBaseRepository<Follow> baseRepository)
        {
            _followRepository=followRepository;
            _followBase=baseRepository;
        }

        //test
        public async Task<List<Follow>> Getall()
        {
            return await _followBase.GetAll();
        }

        //test

        public async Task<int> RequestFollowTo(RequestFollowVM request)
        {
            var result = await _followRepository.RequestFollowTo(request.Follower, request.Followee);
            return result;
        }

        public async Task<int> ResponseFollowPrivateUser(RequestFollowVM request)
        {
            var entity = await _followRepository.GetbyID(request.Follower, request.Followee);
            entity.IsFollowing =true;
            var result = await _followBase.Update(entity);
            if (result != null) { return 1; }
            return 0;
        }

        public async Task<int> RemoveFollowUser(RequestFollowVM request)
        {
            var result = await _followRepository.RemoveFollowAccount(request.Follower, request.Followee);
            if (result == 1) { return 1; }
            return 0;
        }
    }
}