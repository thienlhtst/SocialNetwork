import { useEffect } from 'react'
import { _header ,} from '../components/share/_header'
import { BrowserRouter as Router, Route, Link, redirect, useNavigate  } from 'react-router-dom';

export const MainLayout = () => {
    const navigate = useNavigate();
    useEffect(() => {
      const test =  localStorage.getItem('key')
      
      if(!test){
        navigate("/login")
      }
    })
  return (
    <_header></_header>
    
  )
}
