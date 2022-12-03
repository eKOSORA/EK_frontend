import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillQuestionSquareFill } from 'react-icons/bs'

const index = () => {
  return (
    <div className='w-screen h-screen flex flex-col bg-white'>
      <Head>
        <title>Downloads | eKOSORA</title>
      </Head>
      <div className='fixed  w-screen h-[60px] py-[20px] px-[10px] sm:px-[40px] bg-ek-blue-50 flex items-center justify-between'>
        <div className='w-1/3'>

          <Link href={'/'}>
            <div className='cursor-pointer hidden sm:flex'>
              <Image src={'/img/bigLogo.svg'} height={'40px'} alt='' width={'165px'} className='rounded py-[1px] px-[2px] bg-[#0003]' />
            </div>
          </Link>
          <Link href={'/'}>
            <div className='flex sm:hidden'>
              <Image src={'/img/logo.svg'} height={'40px'} alt='' width={'60px'} className='rounded py-[1px] px-[2px] bg-[#0003]' />
            </div>
          </Link>
        </div>
        <div className='w-1/3'>
          <span className='hidden mmsm:flex heading-text text-white text-3xl'>DOWNLOADS</span>
        </div>
        <div className='w-1/3'>
          <div className='flex items-center justify-center'>
            <Link className='login-button ' href={'/faq'}><button className='btn hidden md:flex login-button hover:grayscale-[50%] text-center items-center justify-center button-text bg-[#4CA7CE] text-white py-[12px] px-[38px] w-[150px] rounded-[2px] text-sm hover:bg-ek-blue-200' style={{ boxShadow: '0px 0px 10px 10px rgb(0 0 0 / 10%)' }}>FAQ</button></Link>
            <Link className='login-button' href={'/faq'}><BsFillQuestionSquareFill className='btn flex md:hidden text-white' size={38} /></Link>
          </div>
        </div>
      </div>

      <div className='grid mt-36 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-12 gap-4'>
        <div className='w-full flex h-[60vh] items-center justify-center'>
        <div className='w-10/12 h-full rounded bg-ek-blue-75 flex flex-col'></div>
        </div>
        <div className='w-full flex h-[60vh] items-center justify-center'>
        <div className='w-10/12 h-full rounded bg-ek-blue-75 flex flex-col'></div>
        </div>
        <div className='w-full flex h-[60vh] items-center justify-center'>
        <div className='w-10/12 h-full rounded bg-ek-blue-75 flex flex-col'></div>
        </div>
        
      </div>

    </div>
  )
}

export default index