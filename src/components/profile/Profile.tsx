import { AppstoreOutlined, EllipsisOutlined, InstagramOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import React from 'react'
import { Anchor } from 'antd'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Thread',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Thread Trả lời',
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Bài Đăng lại',
    key: 'SubMenu',
    icon: <SettingOutlined />,
  
  },
  
];
export const Profile = () => {
  return (
    <>
      <div className='flex w-full flex-col gap-4'>
        <div className='flex justify-between items-center '>
          <div className='flex items-start justify-start flex-col'>
            <h1 className='font-bold text-black text-[25px]'>
              Trần Thiện
            </h1>
            <div className=' text-[15px]'>
              thien-zn
            </div>
          </div>
          <div className='rounded-full bg-black w-20 h-20 avatar'>

          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='text-[#999999] text-[15px]'>
            2 người theo dõi
          </div>
          <div>
          <InstagramOutlined className='text-[25px] cursor-pointer' />
          </div>
        </div>
        <div> 
          <button className='w-full h-9 border rounded-xl  font-bold text-[15px]'>
             Chỉnh sửa trang cá nhân 
          </button>
        </div>
        <div className='-mx-5 w-[calc(100%+2,5rem)] flex border-b   '>
        <button className="flex-1 flex items-center justify-center text-[15px] text-[#999999] font-semibold p-4">Thread</button>
  <button className="flex-1 flex items-center justify-center text-[15px] text-[#999999] font-semibold p-4">Thread Trả lời</button>
  <button className="flex-1 flex items-center justify-center text-[15px] text-[#999999] font-semibold p-4">Bài đăng lại</button>
        </div>
      </div>

    </>
  )
}
