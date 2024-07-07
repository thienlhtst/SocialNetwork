import { Checkbox } from 'antd';
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

var style_input: string = "w-full mb-2 p-4 text-[15px] bg-neutral-100 focus:outline-none focus-visible:border-gray-400 border rounded-xl border-transparent hover:border-indigo-500/50";

interface LoginState {
  lastName: string;
  firstName: string;
  userName: string;
  password: string;
  email: string
  error?: string | null;
}

const initialState: LoginState = {
  lastName: '',
  firstName: '',
  userName: '',
  password: '',
  email: '',
  error: null
};

// Hàm giả lập gọi API
const mockLoginApi = async (loginData: { lastname: string; firstname: string; username: string; password: string; email: string }): Promise<{ success: boolean; token?: string; message?: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (loginData.username === 'admin' && loginData.password === 'admin') {
        resolve({ success: true, token: 'fake-jwt-token' });
      } else {
        reject({ success: false, message: 'Nhập tên người dùng, số điện thoại hoặc email của bạn trên Threads.' });
      }
    }, 1000);
  });
};

export const Register = () => {
  const [data, setData] = useState<{ [key: string]: any }>({});

  const sendData = async () => {
    const jsonData = {
      key1: 'value1',
      key2: 'value2',
    };

    try {
      const response = await fetch('http://192.168.1.19:3001/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [state, setState] = useState<LoginState>(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ ...state, error: null });

    const loginData = {
      lastname: state.lastName,
      firstname: state.firstName,
      username: state.userName,
      password: state.password,
      email: state.email,
    };

    try {
      const response = await mockLoginApi(loginData);

      // nhận thấy lệnh này không cần thiết lắm
      // if (!response.success) {
      //   throw new Error(response.message);
      // }
      //--------------

      // Xử lý thành công (ví dụ: lưu token, chuyển hướng)
      // console.log(response.success);
      // console.log(response.message);
      // console.log('Login successful:', response.token);

      // Cập nhật state nếu cần thiết
      setState({ ...state, error: null });
    } catch (error: any) {
      setState({ ...state, error: error.message });
    }
  };
  return (

    <div className="z-[1] min-w-[418px] h-auto p-6 mobile:mt-16 flex flex-col justify-center items-center  border-inherit rounded-lg">
      <span className="w-full font-bold mb-4 text-center">Đăng ký tài khoản Threads</span>
      <form onSubmit={handleSubmit} className="max-w-96">
        <div className='w-full flex flex-row justify-start  text-[15px]'>
          <input name='lastName' value={state.lastName} onChange={handleInputChange} className='w-[50%] mr-4 mb-2 p-4 bg-neutral-100 focus:outline-none focus-visible:border-gray-400 border rounded-xl border-transparent hover:border-indigo-500/50' type='text' placeholder='Họ' />
          <input name='firstName' value={state.firstName} onChange={handleInputChange} className='w-[50%] mb-2 p-4 bg-neutral-100 focus:outline-none focus-visible:border-gray-400 border rounded-xl border-transparent hover:border-indigo-500/50' type='text' placeholder='Tên' />
        </div>
        <input className={style_input} name="userName" value={state.userName} onChange={handleInputChange} type="text" placeholder="Tên người dùng" />
        <input className={style_input} name="password" value={state.password} onChange={handleInputChange} type="password" placeholder="Mật khẩu" />
        <input name='email' value={state.email} onChange={handleInputChange} className={style_input} type='email' placeholder='Email' />
        <div className='mb-2 '>
          <Checkbox id='checkBoxRegister' required />
          <label className='ml-2' htmlFor="checkBoxRegister">Đồng ý với các <span className='text-sky-600 hover:underline hover:cursor-pointer'>điều khoản</span> sau.</label>
        </div>
        <input className="w-full text-center bg-black rounded-xl cursor-pointer hover:text-opacity-50  p-4 font-bold text-white disabled:opacity-75" type="submit" value='Đăng nhập' />
      </form>

    </div>
  )
}
