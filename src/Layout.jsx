import React ,{ useEffect } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  useEffect(()=>{



    alert(" Hide  bookmark panel for better experience  (crtl +shift+B)")
  },[])
  return (
    <>
    <Navbar/>
    <Outlet/>
    
      
    </>
  )
}

export default Layout
