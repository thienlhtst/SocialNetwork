using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserCore.InterfaceRepositories
{
    public interface IBaseRepository<T> where T : class
    {
        Task<T> Create(T entity);

        Task<int> CreateRange(List<T> entities);

        Task<T> Update(T entity);

        Task<int> Delete(T entity);

        Task<int> DeleteRange(List<T> entities);

        Task<T> GetbyId(string id);

        Task<List<T>> GetAll();
    }
}