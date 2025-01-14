using ConsumerViewModel;
using MassTransit;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserApplication.Interfaces;
using UserApplication.ViewModel.FollowViewModel;

namespace UserApplication.Services
{
    public class PushNotificationService : IPushNotificationService
    {
        private readonly ILogger<PushNotificationService> _logger;
        private readonly IPublishEndpoint _bus;
        private readonly IRequestClient<UserFollowedEvent> _requestClient;

        public PushNotificationService(ILogger<PushNotificationService> logger, IPublishEndpoint bus, IRequestClient<UserFollowedEvent> requestClient)
        {
            _logger=logger;
            _bus=bus;
            _requestClient=requestClient;
        }

        public async Task RequestNotificationFollow(RequestFollowVM request)
        {
            var productExists = await _requestClient.GetResponse<UserFollowedEvent>(request);
            throw new NotImplementedException();
        }

        public async Task SendNotificationFollow(RequestFollowVM request)
        {
            _logger.LogInformation($"thong bao cua {request.Follower}");
            UserFollowedEvent userFollowedEvent = new UserFollowedEvent
            {
                FollowedAt=DateTime.Now,
                UserIdFollowee = request.Followee,
                UserIdFollower = request.Follower,
            };
            await _bus.Publish(userFollowedEvent);
        }
    }
}