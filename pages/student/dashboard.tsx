import Head from 'next/head'
import React, { useState } from 'react'
import { Navbar } from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css'

const studentsDashboard = () => {
  //Important states
  const [sideBarActive, setSideBarActive] = useState(false)

  return (
    <div className='animate__animated animate__fadeInLeft bg-[#f0f0f0] min-h-screen'>

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
      <Head>
        <title>Student Dashboard | eKOSORA</title>
        <link href="https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&family=Questrial&family=Raleway:ital,wght@0,200;0,400;0,500;1,200&family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,500;1,700&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar page='Dashboard' sideBarActive={sideBarActive} setSideBarActive={setSideBarActive} />
      <div className='w-full flex h-full items-start justify-start'>
        {
          sideBarActive
            ?
            <Sidebar page='students' active='dashboard' />
            :
            null
        }
        <div className={`${sideBarActive ? 'w-10/12' : 'w-full'} flex flex-col items-center justify-start pt-[60px] h-fit p-10`}>

        </div>
      </div>
    </div>
  )
}

export default studentsDashboard
