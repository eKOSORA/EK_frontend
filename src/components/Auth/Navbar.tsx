import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Navbar = (props: any) => {
    return (
        <div className='fixed  w-screen h-[60px] py-[20px] px-[10px] sm:px-[40px] bg-ek-blue-50 flex items-center justify-between'>
            <Head>

            </Head>
            <a href={'/'} className='cursor-pointer hidden sm:flex'><Image src={'/img/bigLogo.svg'} height={'40px'} alt='' width={'165px'} className='rounded py-[1px] px-[2px] bg-[#0003]' /></a>
            <a href={'/'} className='flex sm:hidden'><Image src={'/img/logo.svg'} height={'40px'} alt='' width={'60px'} className='rounded py-[1px] px-[2px] bg-[#0003]' /></a>
            {
                props.page === 'signup' ?
                    <span className='hidden mmsm:flex heading-text text-white text-3xl'>SIGNUP</span>
                    :
                    null
            }
            <div className='flex items-center justify-center'>
                <Link href={'/auth/login'}><button className={`hover:animate-ring login-button ${props.page === 'signup' ? 'flex' : 'hidden sm:flex'} items-center justify-center hover:grayscale-[50%] button-text bg-ek-blue-50 text-white py-[12px] px-[38px] ml-[10px] w-[150px] rounded-[2px] text-sm hover:bg-ek-blue-200`} style={{ boxShadow: '0px 0px 10px 10px rgb(0 0 0 / 10%)' }}>LOG IN</button></Link>
                <Link href={'/auth/signup'}><button className={`hover:animate-ring login-button ${props.page === 'signup' ? 'hidden md:flex' : 'flex'} hover:grayscale-[50%] button-text bg-[#4CA7CE] text-white py-[12px] px-[38px] ml-[10px] w-[150px] rounded-[2px] text-sm hover:bg-ek-blue-200`} style={{ boxShadow: '0px 0px 10px 10px rgb(0 0 0 / 10%)' }}>SIGN UP</button></Link>
            </div>
        </div>
    )
}

