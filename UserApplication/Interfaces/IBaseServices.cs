﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserApplication.Interfaces
{
    public interface IBaseServices<T>
    {
        Task<List<T>> GetAll();
    }
}