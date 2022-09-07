import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoBig from './../../public/img/bigLogo.svg'
import logoSmall from './../../public/img/logo.svg'

export const Navbar = (props: any) => {
    return (
        <div className='fixed  w-screen h-[60px] py-[20px] px-[10px] sm:px-[40px] bg-ek-blue-50 flex items-center justify-between'>
            <Head>
                <title>Signup | eKOSORA</title>
                <link href="https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&family=Questrial&family=Raleway:ital,wght@0,200;0,400;0,500;1,200&family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,500;1,700&display=swap" rel="stylesheet" />
            </Head>
            <a href={'/'} className='cursor-pointer hidden sm:flex'><Image src={logoBig} height={'40px'} alt='' width={'165px'} className='rounded py-[1px] px-[2px] bg-[#0003]' /></a>
            <a href={'/'} className='flex sm:hidden'><Image src={logoSmall} height={'40px'} alt='' width={'60px'} className='rounded py-[1px] px-[2px] bg-[#0003]' /></a>
            {
                props.page === 'signup' ?
                    <span className='hidden mmsm:flex heading-text text-white text-3xl'>SIGNUP</span>
                    :
                    null
            }
            <div className='flex items-center justify-center'>
                <a className='login-button' href={'/auth/login'}><button className='login-button hidden sm:flex items-center justify-center hover:grayscale-[50%] button-text bg-ek-blue-50 text-white py-[12px] px-[38px] ml-[10px] w-[150px] rounded-[2px] text-sm hover:bg-ek-blue-200' style={{ boxShadow: '0px 0px 10px 10px rgb(0 0 0 / 10%)' }}>LOG IN</button></a>
                <a className='login-button ' href={'/auth/signup'}><button className='login-button hover:grayscale-[50%] button-text bg-[#4CA7CE] text-white py-[12px] px-[38px] ml-[10px] w-[150px] rounded-[2px] text-sm hover:bg-ek-blue-200' style={{ boxShadow: '0px 0px 10px 10px rgb(0 0 0 / 10%)' }}>SIGN UP</button></a>
            </div>
        </div>
    )
}

