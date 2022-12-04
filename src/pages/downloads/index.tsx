import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillWindows } from 'react-icons/ai'
import { BsApple, BsFillQuestionSquareFill } from 'react-icons/bs'
import { DiLinux } from 'react-icons/di'
import { HiOutlineDownload } from 'react-icons/hi'
import Footer from '../../components/Index/Footer'
const index = () => {
  return (
    <div className='w-screen h-fit flex flex-col bg-white'>
      <Head>
        <title>Downloads | eKOSORA</title>
      </Head>
      <div className='fixed z-10 w-screen h-[60px] py-[20px] px-[10px] sm:px-[40px] bg-ek-blue-50 flex items-center justify-between'>
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
        <div className='w-1/3 text-center flex'>
          <span className='hidden mmsm:flex heading-text text-white text-3xl'>DOWNLOADS</span>
        </div>
        <div className='w-1/3'>
          <div className='flex items-center justify-center'>
            <Link className='login-button ' href={'/faq'}><button className='btn hidden md:flex login-button hover:grayscale-[50%] text-center items-center justify-center button-text bg-[#4CA7CE] text-white py-[12px] px-[38px] w-[150px] rounded-[2px] text-sm hover:bg-ek-blue-200' style={{ boxShadow: '0px 0px 10px 10px rgb(0 0 0 / 10%)' }}>FAQ</button></Link>
            <Link className='login-button' href={'/faq'}><BsFillQuestionSquareFill className='btn flex md:hidden text-white' size={38} /></Link>
          </div>
        </div>
      </div>

      <div className='mb-36 text-white grid mt-36 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-12 gap-4'>
        <div className='w-full flex h-[30vh] sm:h-[65vh] md:h-[85vh] lg:h-[75vh] items-center justify-center'>
          <div className='relative px-8 w-10/12 items-center pt-4 h-full rounded bg-ek-blue-75 flex flex-col'>
            <DiLinux size={100} />
            <div className='w-full text-center mt-10'>
              <span className='heading-text text-2xl'>Linux based OS</span>
              <ul className='ml-8 mt-10 list-disc flex flex-col justify-start text-start items-start'>
                <li className='my-2'>Click the download button to get the .deb file</li>
                <li className='my-2'>Navigate to the path of the download <br></br> <code>cd /home/username/Downloads/</code> </li>
                <li className='my-2'>Run the following command  to install eKOSORA on your computer: <br></br>
                  <code>sudo dpkg -i ./eKOSORA-v1.0.0.deb</code>
                </li>
                <li className='my-2'>Start using eKOSORA on your computer!!!</li>
              </ul>
              <button className='hover:animate-ring flex right-0 left-0 px-3 ml-auto mr-auto rounded cursor-pointer py-3 items-center justify-center absolute bottom-4 bg-white text-ek-blue-75'>
                <HiOutlineDownload className="text-lg mr-2 text-ek-blue-75" />
                <span>
                  DOWNLOAD
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className='w-full flex h-[30vh] sm:h-[65vh] mlg:h-[85vh] lg:h-[75vh] items-center justify-center'>
          <div className='relative w-11/12 md:w-10/12 items-center pt-4 h-full rounded bg-ek-blue-75 flex flex-col'>
            <AiFillWindows size={100} />
            <div className='w-full text-center mt-10'>
              <span className='heading-text text-2xl'>Windows</span>
              <ul className='ml-8 mt-10 list-disc flex flex-col justify-start text-start items-start'>
                <li className='my-2'>Click the download button to get the .exe file</li>
                <li className='my-2'>Navigate to the downloads folder </li>
                <li className='my-2'>Right click on the .exe file and click execute</li>
                <li className='my-2'>Then run the program to install eKOSORA on your local machine</li>
                <li className='my-2'>Start using eKOSORA on your computer!!!</li>
              </ul>
              <button className='hover:animate-ring flex right-0 left-0 px-3 ml-auto mr-auto rounded cursor-pointer py-3 items-center justify-center absolute bottom-4 bg-white text-ek-blue-75'>
                <HiOutlineDownload className="text-lg mr-2 text-ek-blue-75" />
                <span>
                  DOWNLOAD
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className='w-full flex h-[30vh] sm:h-[65vh] md:h-[85vh] lg:h-[75vh] items-center justify-center'>
          <div className='relative w-11/12 md:w-10/12 items-center pt-4 h-full rounded bg-ek-blue-75 flex flex-col'>
            <BsApple size={100} />
            <div className='w-full text-center mt-10'>
              <span className='heading-text text-2xl'>Mac OS</span>
              <ul className='ml-8 mt-10 list-disc flex flex-col justify-start text-start items-start'>
                <li className='my-2'>Click the download button to get the .dmg file</li>
                <li className='my-2'>Navigate to the downloads folder </li>
                <li className='my-2'>Right click on the .dmg file and click execute</li>
                <li className='my-2'>Then run the program to install eKOSORA on your local machine</li>
                <li className='my-2'>Start using eKOSORA on your computer!!!</li>
              </ul>
              <button className='hover:animate-ring flex right-0 left-0 px-3 ml-auto mr-auto rounded cursor-pointer py-3 items-center justify-center absolute bottom-4 bg-white text-ek-blue-75'>
                <HiOutlineDownload className="text-lg mr-2 text-ek-blue-75" />
                <span>
                  DOWNLOAD
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default index