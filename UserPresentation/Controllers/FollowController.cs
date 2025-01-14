using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserApplication.Interfaces;
using UserApplication.ViewModel.FollowViewModel;

namespace UserPresentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FollowController : ControllerBase
    {
        private readonly IFollowService _followService;
        private readonly IPushNotificationService _postNotificationService;

        public FollowController(IFollowService followService, IPushNotificationService pushNotificationService)
        {
            _followService=followService;
            _postNotificationService=pushNotificationService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _followService.Getall();
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> RequestFollowTo([FromBody] RequestFollowVM request)
        {
            var result = await _followService.RequestFollowTo(request);
            await _postNotificationService.SendNotificationFollow(request);
            return Ok(result);
        }

        [HttpPut("{idfollower}")]
        public async Task<IActionResult> ResponseFollowPrivateUser(string idfollower, [FromQuery] string idfollowee)
        {
            RequestFollowVM requestFollow = new RequestFollowVM
            {
                Followee = idfollowee,
                Follower = idfollower
            };
            var result = await _followService.ResponseFollowPrivateUser(requestFollow);
            return Ok(result);
        }

        [HttpDelete("{idfollower}")]
        public async Task<IActionResult> RemoveFollowUser(string idfollower, [FromQuery] string idfollowee)
        {
            RequestFollowVM requestFollow = new RequestFollowVM
            {
                Followee = idfollowee,
                Follower = idfollower
            };
            var result = await _followService.RemoveFollowUser(requestFollow);
            return Ok(result);
        }
    }
}