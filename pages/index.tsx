import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'
import remote from './../public/img/remoteWork.png'

const Home: NextPage = () => {

  return (
    <div className='w-screen h-screen'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Home | eKosora</title>
      </Head>
      <Navbar />
      <div className='h-[500px] w-full grid' style={{ gridTemplateColumns: '1fr 1fr', background: ' linear-gradient(180deg, #3F7CAC 0%, #ACDBFF 100%)' }}>
        <div className='grid place-content-center p-[30px] '>
          <h1 className='text-black text-[32px] heading-text'>Work Smarter. Not Harder</h1>
          <p className="mt-[10px] text-[22px] text-white">Work from anywhere you are, at any time of the day</p>
          <Link href={'/auth/login'}><button className='mt-[15px] button-text bg-ek-blue-50 text-white py-[12px] px-[38px] ml-[10px] w-[150px] rounded-[2px] text-sm hover:bg-ek-blue-200' style={{ boxShadow: '0px 0px 10px 10px rgb(0 0 0 / 10%)' }}>LOG IN</button></Link>
        </div>
        <div className='relative'>
          <Image className='absolute top-0 left-0' style={{ transform: ' translate(-100px, 75px)' }} src={remote} width={'37em'}></Image>
        </div>
      </div>
    </div>
  )
}

export default Home
