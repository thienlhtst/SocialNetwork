import { EllipsisOutlined } from '@ant-design/icons'
import React from 'react'

export const Profile = () => {
  return (
    <div className='w-full h-auto flex justify-center'>
      <div className='w-[640px] h-auto'>
        <div className='w-[640px] h-[72px] fixed bg-red-600 z-10'>
          <div className='w-full h-auto flex justify-center relative top-4'>
            <div className='font-medium'>Trang cá nhân</div>
            <button className='absolute right-6 top-0 border px-2 py-1 rounded-full text-[13px]'><EllipsisOutlined /></button>
          </div>
        </div>
        <div className='w-full h-[900px] mt-20 border-2 border-black rounded-3xl'>
          content
        </div>
      </div>

    </div>
  )
}
