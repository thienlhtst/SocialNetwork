using ConsumerViewModel;
using MassTransit;

namespace NotificationPresentation.Consumers
{
    public class RequestConsumer : IConsumer<UserFollowedEvent>
    {
        public async Task Consume(ConsumeContext<UserFollowedEvent> context)
        {
            await context.RespondAsync<UserFollowedEvent>(new UserFollowedEvent());
            throw new NotImplementedException();
        }
    }
}