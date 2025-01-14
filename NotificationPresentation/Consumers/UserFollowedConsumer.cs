using ConsumerViewModel;
using MassTransit;
using Microsoft.AspNetCore.SignalR;
using NotificationPresentation.Hubs;

namespace NotificationPresentation.Consumers
{
    public class UserFollowedConsumer : IConsumer<UserFollowedEvent>
    {
        private readonly IHubContext<NotificationHub> _hubContext;

        public UserFollowedConsumer(IHubContext<NotificationHub> hubContext)
        {
            _hubContext=hubContext;
        }

        public async Task Consume(ConsumeContext<UserFollowedEvent> context)
        {
            var message = context.Message;
            Console.WriteLine($"Notification: User {message.UserIdFollower} followed User {message.UserIdFollowee} at {message.FollowedAt}");
            await _hubContext.Clients.All.SendAsync("ReceiveFollowNotification", message);
        }
    }
}