using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserCore.Entities;

namespace UserApplication.Services
{
    public class AccountService
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public AccountService(UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        public async Task<IdentityResult> RegisterUserAsync(string email, string password, string fullName)
        {
            var user = new User
            {
                UserName = email,
                Email = email,
                FullName = fullName
            };

            return await _userManager.CreateAsync(user, password);
        }
    }
}