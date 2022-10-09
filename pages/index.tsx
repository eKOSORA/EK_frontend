import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../components/Index/Navbar'
import remote from './../public/img/remoteWork.png'
import migrate from './../public/img/migrate.png'
import time from './../public/img/timeManagement.png'
import speed from './../public/img/speed.png'

const Home: NextPage = () => {
  return (
    <div className='h-screen'>
            <Head>

        <title>Home | eKOSORA</title>
      </Head>
      <Navbar />
      <div className='h-[500px] w-full flex items-center justify-between' style={{ background: ' linear-gradient(180deg, #3F7CAC 0%, #ACDBFF 100%)' }}>
        <div className='grid sm:w-1/2 place-content-center p-[30px] '>
          <h1 className='text-black text-[32px] heading-text'>Work Smarter. Not Harder</h1>

          <p className="mt-[10px] text-[22px] text-white">Work from anywhere you are, at any time of the day</p>
          <a className='login-button' href={'/auth/login'}><button className='hover:animate-ring login-button hover:grayscale-[50%] mt-[15px] button-text bg-[#4ca7ce] text-white py-[12px] px-[38px] ml-[10px] w-[150px] rounded-[2px] text-sm hover:bg-ek-blue-200' style={{ boxShadow: '0px 0px 10px 10px rgb(0 0 0 / 10%)' }}>LOG IN</button></a>
        </div>
        <div className='relative h-full hidden sm:block w-1/2'>
          <div className='hidden sm:flex md:ml-24 -translate-x-[100px] -translate-y-[69px]' style={{ transform: ' translate(-100px, 69px)' }} ><Image alt=""  className='' width={'575px'} height={'500px'} src={remote} /></div>
        </div>
      </div>
      <div className='w-full flex items-center justify-start flex-col '>
        <div className='Feature py-[20px] px-[40px] mb-[20px] flex items-center justify-center relative w-11/12'>
          <div className='smm20:flex hidden'><Image alt=""  height={'300px'} width={485} src={migrate} /></div>
          <div className='flex flex-col items-start justify-center w-full smm20:max-w-[600px]'>
            <h1 className='text-ek-blue text-[32px] heading-text'>Migrate From Paper</h1>
            <p className="mt-[10px] text-[18px] font-light text-black">Why would you stay in the analog age, recording all your important data on paper. Join eKOSORA and have all your data saved digitally</p>
          </div>
        </div>

        <div className='Feature py-[20px] px-[40px] mb-[20px] flex items-center justify-center relative w-11/12'>
          <div className='flex flex-col items-start justify-center w-full smm20:max-w-[600px]'>
            <h1 className='text-end  w-full text-ek-blue text-[32px] heading-text'>Maximum Efficiency</h1>
            <p className="mt-[10px] text-[18px] font-light w-full text-end text-black">Be able to do your work easier and faster. Save time and effort by JOINING eKOSORO.</p>
          </div>
          <div className='smm20:flex hidden'><Image alt=""  height={'300px'} width={367} src={time} /></div>
        </div>

        <div className='Feature py-[20px] px-[40px] mb-[20px] flex items-center justify-center relative w-11/12'>
          <div className='smm20:flex hidden'><Image alt=""  height={'300px'} width={320} src={speed} /></div>
          <div className='flex flex-col items-start justify-center w-full smm20:max-w-[600px]'>
            <h1 className='text-ek-blue text-[32px] heading-text'>So fast it&apos;s problematic</h1>
            <p className="mt-[10px] text-[18px] font-light text-black">No ruffling through papers just find one student. With the click of button, you can find all the information about a student.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
