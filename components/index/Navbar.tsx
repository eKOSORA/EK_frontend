import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoBig from './../../public/img/bigLogo.svg'
import logoSmall from './../../public/img/logo.svg'

export const Navbar = () => {
    return (
        <div className='fixed z-10 w-screen h-[60px] py-[20px] px-[10px] sm:px-[40px] bg-ek-blue-50 flex items-center justify-between'>
            <div className='hidden sm:flex'><Image src={logoBig} height={'40px'} alt='' width={'165px'} className='rounded py-[1px] px-[2px] bg-[#0003]' /></div>
            <div className='flex sm:hidden'><Image src={logoSmall} height={'40px'} alt='' width={'60px'} className='rounded py-[1px] px-[2px] bg-[#0003]' /></div>
            <Link className='login-button' href={'/auth/login'}><button className='login-button hover:grayscale-[50%] button-text bg-ek-blue-50 text-white py-[12px] px-[38px] ml-[10px] w-[150px] rounded-[2px] text-sm hover:bg-ek-blue-200' style={{ boxShadow: '0px 0px 10px 10px rgb(0 0 0 / 10%)' }}>LOG IN</button></Link>
        </div>
    )
}

