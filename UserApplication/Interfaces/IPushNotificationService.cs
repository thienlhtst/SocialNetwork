using ConsumerViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserApplication.ViewModel.FollowViewModel;

namespace UserApplication.Interfaces
{
    public interface IPushNotificationService
    {
        public Task SendNotificationFollow(RequestFollowVM request);

        public Task RequestNotificationFollow(RequestFollowVM request);
    }
}