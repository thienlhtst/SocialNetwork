﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserApplication.Interfaces;
using UserApplication.ViewModel.UserViewModel;
using UserCore.Entities;

namespace UserPresentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IBaseServices<User> _userbaseService;

        public UserController(IUserService userService, IBaseServices<User> baseServices)
        {
            _userService=userService;
            _userbaseService=baseServices;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await _userbaseService.GetAll();
            return Ok(result);
        }

        [HttpGet("information/{id}")]
        public async Task<IActionResult> GetInformationAccout(string id)
        {
            var result = await _userService.GetInformationUser(id);
            return Ok(result);
        }

        [HttpGet("sreachUser/{requestString}")]
        public async Task<IActionResult> GetListSreachUser(string requestString)
        {
            var result = await _userService.GetInformationUser(requestString);
            return Ok(result);
        }

        [HttpPut("changePivate")]
        public async Task<IActionResult> ChangePrivateAccount([FromForm] PrivateAccountVM request)
        {
            var result = await _userService.ChangePrivatedAccount(request);
            return Ok(result);
        }

        [HttpPut("changeInfo/{id}")]
        public async Task<IActionResult> ChangeInforAccount(string id, RequestUpdateUserVM request)
        {
            var result = await _userService.UpdateInformationUser(id, request);
            return Ok(result);
        }

        [HttpPost("{id}")]
        public async Task<IActionResult> UpdateInformationUser(string id, [FromBody] RequestUpdateUserVM request)
        {
            var result = await _userService.UpdateInformationUser(id, request);
            return Ok(result);
        }

        [HttpGet("GetListFollow/{id}")]
        public async Task<IActionResult> GetFollowerOrFolloweeUser(string id, string type, bool typePrivate = true)
        {
            var result = await _userService.GetFollowerOrFolloweeUser(id, type, typePrivate);
            return Ok(result);
        }
    }
}