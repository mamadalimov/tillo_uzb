import React from 'react'
import "./Navbar.css"
import NavbarTop from './NavbarTop'
import NavbarMain from './NavbarMain'
import { useLocation } from 'react-router-dom'


function Navbar() {
    const { pathname }=useLocation()

   if(pathname.includes("/admin")){
    return  <></>
   }
  
   if(pathname.includes("/login")){
     return  <></>
    }

    return (
        <div>
            <NavbarTop />
            <NavbarMain />
        </div>
    )
}

export default Navbar