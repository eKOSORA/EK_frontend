import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiMenu } from 'react-icons/bi'
import { IoLogOutOutline } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'
import { useLogout } from '../../hooks/auth'

export const Navbar = (props: any) => {
  const HandleLogout = async () => {
    const { logout }: any = useLogout()
    const data = await logout()
    //console.log(data)
  }
  return (
    <div className='fixed z-10 w-screen h-[60px] py-[20px] px-[10px] sm:px-[40px] bg-ek-blue-50 flex items-center justify-between'>
      <div className='flex items-center justify-center'>
        {
          props.sideBarActive ?
            <IoMdClose className=' text-white cursor-pointer sm:mr-6 md:mr-8' size={40} onClick={() => { props.setSideBarActive(!props.sideBarActive) }} />
            :
            <BiMenu className=' text-white cursor-pointer sm:mr-6 md:mr-8' color='white' size={40} onClick={() => { props.setSideBarActive(!props.sideBarActive) }} />
        }
        <a href={'/'} className='cursor-pointer hidden sm:flex'><Image src={'/img/bigLogo.svg'} height={'40px'} alt='' width={'165px'} className='rounded py-[1px] px-[2px] bg-[#0003]' /></a>
        <a href={'/'} className='flex sm:hidden'><Image src={'/img/logo.svg'} height={'40px'} alt='' width={'60px'} className='rounded py-[1px] px-[2px] bg-[#0003]' /></a>
      </div>
      <span className='hidden mmsm:flex heading-text text-white text-3xl'>{props.page}</span>
      <div className='flex items-center justify-center'>
        <Link className='login-button ' href={'/auth/login'}><button onClick={HandleLogout} className='btn hidden md:flex login-button hover:grayscale-[50%] text-center items-center justify-center button-text bg-[#4CA7CE] text-white py-[12px] px-[38px] w-[150px] rounded-[2px] text-sm hover:bg-ek-blue-200' style={{ boxShadow: '0px 0px 10px 10px rgb(0 0 0 / 10%)' }}>LOG OUT</button></Link>
        <Link className='login-button' href={'/auth/login'}><IoLogOutOutline onClick={HandleLogout} className='btn flex md:hidden text-white' size={38} /></Link>
      </div>
    </div>
  )
}

