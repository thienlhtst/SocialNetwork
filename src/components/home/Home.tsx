import { CommentOutlined, EllipsisOutlined, HeartFilled, HeartOutlined, HeartTwoTone, RetweetOutlined, SendOutlined } from '@ant-design/icons'
import { Image } from 'antd'
import Item from 'antd/es/list/Item'

import React from 'react'
import ItemLayout from '../../layout/ItemLayout'


export const Home = () => {

    const data = [
        {

            id: 1,
            user: [{
                id: 1,
                name: 'min.tine.02',
                avatar: 'avt.jpg',
            },
            {
                id: 2,
                name: "cc",
                avatar: 'avt.jpg'
            },
            {
                id: 2,
                name: "cc",
                avatar: 'avt.jpg'
            },
            {
                id: 2,
                name: "cc",
                avatar: 'avt.jpg'
            }],
            title: 'Cầu vồng tượng trưng cho hy vọng.',
            date: '1 giờ',
            location: 'Hồ đá xanh - Thành phố Vũng Tàu',
            image: "",
            like: {
                count: 1,
                isLiked: false
            },
            comment: 2,
            retweet: 3,
            send: 4
        },

    ]

    return (
        <><div className=' h-auto w-full flex justify-center items-center  '>
            <div className='w-[664px] flex justify-center items-center flex-col px-6'>
                <div className='w-full h-[60px] flex justify-between items-center px-4 py-2 '>
                    <h1 className="text-center flex-1 text-lg font-semibold">Trang Chủ</h1>
                    <button className="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6h.01M12 12h.01M12 18h.01" />
                        </svg>
                    </button>
                </div>
                <div className='w-full bg-white border rounded-3xl h-[500px] p-5'>
                    <div className='max-w-full h-auto bg-white'>
                        {data.map((item) => (
                            <div className='px-6 w-full py-3 flex flex-row justify-between border-b border-[#c7c7c7]'>
                                <div className='w-10 h-10'>
                                    <div className='w-9 h-9 rounded-full bg-slate-200 flex justify-center items-center cursor-pointer'>
                                        <Image width={28} preview={false} src='..\src\assets\share-image\threads.png'></Image>
                                    </div>

                                </div>
                                <div className='w-full ml-2 flex flex-col gap-1'>
                                    <div className='w-full flex felx-row gap-2 justify-start items-center relative'>
                                        {item.user.map((items) => (
                                            items.avatar
                                        ))}


                                        <div className='text-[#999999]'>{item.date}</div>
                                        <div className='translate-y-[-4px] absolute top-0 right-0 p-1 w-10 rounded-full text-[20px] text-[#999999] text-center hover:bg-[#e9e9e9] cursor-pointer'><EllipsisOutlined /></div>
                                    </div>
                                    <div className='w-full flex flex-col gap-[6px] justify-center items-start'>
                                        <div>
                                            <span>Cầu vồng tượng trưng cho hy vọng. </span>
                                            <span>Hồ đá xanh - Thành phố Vũng Tàu</span>
                                        </div>
                                        <div className='w-full flex flex-row gap-2 overflow-hidden'>
                                            {item.user.map((item1) => (
                                                <Image width={250} src={'../src/assets/share-image/' + item1.avatar}> </Image>
                                            ))}

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

                </div>
            </div>


        </div><ItemLayout /></>
    )
}
