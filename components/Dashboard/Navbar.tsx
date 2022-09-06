import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoBig from './../../public/img/bigLogo.svg'
import logoSmall from './../../public/img/logo.svg'
import { BiMenu } from 'react-icons/bi'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoLogOutOutline } from 'react-icons/io5'
import { GrFormClose } from 'react-icons/gr'
import {IoMdClose} from 'react-icons/io'

export const Navbar = (props: any) => {
  const handleLogout = async () => {

  }
  return (
    <div className='fixed  w-screen h-[60px] py-[20px] px-[10px] sm:px-[40px] bg-ek-blue-50 flex items-center justify-between'>
      <div className='flex items-center justify-center'>
        {
          props.sideBarActive ?
            <IoMdClose className=' text-white cursor-pointer sm:mr-6 md:mr-8' size={40} onClick={() => { props.setSideBarActive(!props.sideBarActive) }} />
            :
            <BiMenu className=' text-white cursor-pointer sm:mr-6 md:mr-8'color='white' size={40} onClick={() => { props.setSideBarActive(!props.sideBarActive) }} />
        }
        <a href={'/'} className='cursor-pointer hidden sm:flex'><Image src={logoBig} height={'40px'} alt='' width={'165px'} className='rounded py-[1px] px-[2px] bg-[#0003]' /></a>
        <a href={'/'} className='flex sm:hidden'><Image src={logoSmall} height={'40px'} alt='' width={'60px'} className='rounded py-[1px] px-[2px] bg-[#0003]' /></a>
      </div>
      <span className='hidden mmsm:flex heading-text text-white text-3xl'>Dashboard</span>
      <div className='flex items-center justify-center'>
        <a className='login-button ' href={'/auth/login'}><button className='btn hidden md:flex login-button hover:grayscale-[50%] button-text bg-[#4CA7CE] text-white py-[12px] px-[38px] w-[150px] rounded-[2px] text-sm hover:bg-ek-blue-200' style={{ boxShadow: '0px 0px 10px 10px rgb(0 0 0 / 10%)' }}>LOG OUT</button></a>
        <a className='login-button' href={'/auth/login'}><IoLogOutOutline  className='btn flex md:hidden text-white' size={38} /></a>
      </div>
    </div>
  )
}

