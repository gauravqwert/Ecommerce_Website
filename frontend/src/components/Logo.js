import React from 'react'
import { useEffect, useState } from 'react'
import logo from '../assest/banner/logo.jpg'
import "./logo.css"


const LogoImages = () => {
    const [logo,setLogo] = useState(0)
}
const Logo = () => {
  return (
    <>
        <img src={logo} className='img'/>
    </>
  )
}

export default Logo