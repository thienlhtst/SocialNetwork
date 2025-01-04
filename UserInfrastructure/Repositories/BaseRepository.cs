using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserCore.InterfaceRepositories;

namespace UserInfrastructure.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        private readonly UserDbContext _userDbContext;

        public BaseRepository(UserDbContext userDbContext)
        {
            _userDbContext=userDbContext;
        }

        public async Task<T> Create(T entity)
        {
            var result = _userDbContext.Set<T>().Add(entity);
            await _userDbContext.SaveChangesAsync();
            return result.Entity;
        }

        public async Task<int> CreateRange(List<T> entities)
        {
            _userDbContext.Set<T>().AddRange(entities);

            return await _userDbContext.SaveChangesAsync();
        }

        public async Task<int> Delete(T entity)
        {
            _userDbContext.Set<T>().Remove(entity);
            return await _userDbContext.SaveChangesAsync();
        }

        public async Task<int> DeleteRange(List<T> entities)
        {
            _userDbContext.Set<T>().RemoveRange(entities);
            return await _userDbContext.SaveChangesAsync();
        }

        public async Task<List<T>> GetAll()
        {
            return await _userDbContext.Set<T>().ToListAsync();
        }

        public async Task<T> GetbyId(string id)
        {
            var result = await _userDbContext.Set<T>().FindAsync(id);
            return result;
        }

        public Task<T> Update(T entity)
        {
            throw new NotImplementedException();
        }
    }
}