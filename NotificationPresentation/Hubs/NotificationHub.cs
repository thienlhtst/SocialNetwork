using ConsumerViewModel;
using Microsoft.AspNetCore.SignalR;

namespace NotificationPresentation.Hubs
{
    public class NotificationHub : Hub
    {
        public async Task SendNotification(string message)
        {
            // Gửi thông báo đến tất cả các client
            await Clients.All.SendAsync("ReceiveNotification", message);
        }

        public async Task SendUserFollowedNotification(UserFollowedEvent followEvent)
        {
            await Clients.All.SendAsync("ReceiveFollowNotification", followEvent);
        }
    }
}