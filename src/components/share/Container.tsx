import { EllipsisOutlined } from '@ant-design/icons'
import React from 'react'
import { Outlet } from 'react-router-dom'

enum title {
  'Dành cho bạn',
  'Tìm kiếm',
  'Hoạt_động',
  'Trang cá nhân',
  'Thread',
}

interface test {
    title: title
    check: string
}

export const Container = () => {

  return (
    <div className='w-full h-auto flex justify-center'>
      <div className='w-[640px] h-auto'>
        <div className='w-[640px] h-[68.5px] fixed border-b z-10 bg-white border-[#c7c7c7]'>
          <div className='w-full h-auto flex justify-center relative top-4'>
            <div className='font-medium'></div>
            <button className='absolute right-6 top-0 border px-2 py-1 rounded-full text-[13px]'><EllipsisOutlined /></button>
          </div>
          <div className='w-4 h-4 bg-white absolute top-[68px] left-0'>
            <div className='w-full h-full bg-white border-l border-t rounded-tl-3xl border-[#c7c7c7]'>
            </div>
          </div>
          <div className='w-4 h-4 bg-white absolute top-[68px] right-0'>
            <div className='w-full h-full bg-white z-10 border-r border-t rounded-tr-3xl border-[#c7c7c7]'>
            </div>
          </div>
        </div>
        <div className='w-full h-auto mt-20 border-l border-r border-[#c7c7c7]'>
               <Outlet />
        </div>
      </div>
    </div>
  )
}
