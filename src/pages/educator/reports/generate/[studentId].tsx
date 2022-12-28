import Head from 'next/head'
import React, { useState } from 'react'
import { Navbar } from '../../../../components/Dashboard/Navbar'
import Sidebar from '../../../../components/Dashboard/Sidebar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css'
import { useGetUserDetails } from '../../../../hooks/auth'

const GenerateReport = () => {
  //Important states
  const [sideBarActive, setSideBarActive] = useState(false)

  return (
    <div className='animate__animated animate__fadeInLeft bg-[#f0f0f0] min-h-screen'>
      
      <Head>
        <title>Generate Report | eKOSORA</title>

      </Head>
      <Navbar page='Generate Report' sideBarActive={sideBarActive} setSideBarActive={setSideBarActive} />
      <div className='w-full flex h-full items-start justify-start'>
        {
          sideBarActive
            ?
            <Sidebar page='educator' active='dashboard' />
            :
            null
        }
        <div className={`${sideBarActive ? 'w-10/12' : 'w-full'} flex flex-col items-center justify-start pt-[60px] h-fit p-10`}>

        </div>
      </div>
    </div>
  )
}

export default GenerateReport
