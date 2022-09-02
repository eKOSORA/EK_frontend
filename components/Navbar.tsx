import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoBig from './../public/img/bigLogo.svg'
import logoSmall from './../public/img/logo.svg'

export const Navbar = () => {
    return (
        <div className='fixed z-[10] w-screen h-[60px] py-[20px] px-[10px] sm:px-[40px] bg-ek-blue-50 flex items-center justify-between'>
            {/* <Image src={logoBig} height={'40px'} alt='' width={'165px'} className='hidden sm:flex rounded py-[1px] px-[2px] bg-[#0003]' /> */}
            <Image src={logoSmall} height={'40px'} alt='' width={'60px'} className='flex sm:hidden rounded py-[1px] px-[2px] bg-[#0003]' />
            <Link className='login-button' href={'/auth/login'}><button className='login-button hover:grayscale-[50%] button-text bg-ek-blue-50 text-white py-[12px] px-6 sm:px-[38px] ml-[10px] sm:w-[150px] rounded-[2px] text-sm hover:bg-ek-blue-200' style={{ animation: 'ring .5s ease', boxShadow: '0px 0px 10px 10px rgb(0 0 0 / 10%)' }}>LOG IN</button></Link>
        </div>
    )
}

