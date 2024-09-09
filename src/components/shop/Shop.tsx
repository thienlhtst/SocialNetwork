import React from 'react'
import { CommentOutlined, EllipsisOutlined, HeartFilled, HeartOutlined, HeartTwoTone, RetweetOutlined, SendOutlined } from '@ant-design/icons'
import { Image } from 'antd'

export const Shop = () => {
  const product = [
    {
      id : 1,
      user: {
        id: 1,
        name: 'lap',
        avatar: 'instagram.png',
      },
      nameproduct: "product1",
      price : 1000000,
      date: '1 giờ',
      location: 'Hồ đá xanh - Thành phố Vũng Tàu',
      image: 'product.png',
      like: {
          count: 1,
          isLiked: false
      },
      comment:
            {
                count: 2,
                detail: [

                ]
            }
    },
    {
      id : 1,
      user: {
        id: 1,
        name: 'lap',
        avatar: 'avt.jpg',
      },
      nameproduct: "product1",
      price : 1000000,
      date: '1 giờ',
      location: 'Hồ đá xanh - Thành phố Vũng Tàu',
      image: 'product.png',
      like: {
          count: 1,
          isLiked: false
      },
      comment:
            {
                count: 2,
                detail: [

                ]
            }
    },{
      id : 1,
      user: {
        id: 1,
        name: 'min.tine.02',
        avatar: 'avt.jpg',
      },
      nameproduct: "product1",
      price : 1000000,
      date: '1 giờ',
      location: 'Hồ đá xanh - Thành phố Vũng Tàu',
      image: '',
      like: {
          count: 1,
          isLiked: false
      },
      comment:
            {
                count: 2,
                detail: [

                ]
            }
    }

  ]
  return (
    <div className='max-w-full h-auto bg-white'>
    {product.map((item) => (
        <div className='px-6 w-full py-3 flex flex-row justify-between border-b border-[#c7c7c7]'>
            <div className='w-10 h-10'>
                <div className='w-9 h-9 rounded-full bg-slate-200 flex justify-center items-center cursor-pointer'>
                    <Image width={28} preview={false} src='..\src\assets\share-image\threads.png'></Image>
                </div>

            </div>
            <div className='w-full ml-2 flex flex-col gap-1'>
                <div className='w-full flex felx-row gap-2 justify-start items-center relative'>
                    <a href='' className='font-bold hover:underline'>{item.user.name}</a>
                    <div className='text-[#999999]'>{item.date}</div>
                    <div className='translate-y-[-4px] absolute top-0 right-0 p-1 w-10 rounded-full text-[20px] text-[#999999] text-center hover:bg-[#e9e9e9] cursor-pointer'><EllipsisOutlined /></div>
                </div>
                <div className='w-full flex flex-col gap-[6px] justify-center items-start'>
                    <div>
                        <span className='text-[#000]' >Name:{item.nameproduct} </span>
                        <span className='text-[#ba3f3f] text-xl'>Price:{item.price}</span>
                    </div>
                     <div className='w-full flex flex-row gap-2 overflow-hidden'>
                                <Image width={250} src={'../src/assets/share-image/'+item.image} alt={item.image}>
                                
                                </Image>
                            </div>
                </div>
                <ul className='w-full h-9 flex flex-row justify-start items-center gap-2 text-lg text-[#555555]'>
                    <li className='flex flex-row gap-1 px-3 h-[32px]  hover:bg-[#e9e9e9] rounded-full cursor-pointer'>
                        {!item.like.isLiked ? <HeartOutlined /> : <HeartFilled className='text-[#ff3030]' />}
                        <div>1</div>
                    </li>
                    <li className='flex flex-row gap-1 px-3 h-[32px] hover:bg-[#e9e9e9] rounded-full cursor-pointer'>
                        <CommentOutlined />
                        <div>2</div>
                    </li>
                    <li className='px-1 w-[32px] h-[32px] hover:bg-[#e9e9e9] rounded-full cursor-pointer text-center'>
                        <RetweetOutlined />
                    </li>
                    <li className='px-1 w-[32px] h-[32px] hover:bg-[#e9e9e9] rounded-full cursor-pointer text-center text-[15px]'>
                        <SendOutlined rotate={-30} className='translate-y-[-1px] translate-x-[1px]' />
                    </li>
                </ul>
            </div>
        </div>
    ))}

</div>
  )
}
