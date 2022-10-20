import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css'
import { userTeacher } from '../../utils/faker'
import { useRecoilState } from 'recoil'
import { sidebarState } from '../../components/states/sidebar'
import { useAuth } from '../../Context/AuthContext'
import { useRouter } from 'next/router'

const Index = () => {
  //Important states
  const [sideBarActive, setSideBarActive]  = useState(false)
  const { user }:any = useAuth()

  const router = useRouter()
  useEffect(() => {
      if (!user) router.push('/auth/login')
  }, [router, user])


  return (
    <div className='animate__animated animate__fadeInLeft bg-[#f0f0f0] min-h-screen'>
      <ToastContainer
        position="bottom-center"
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
        <title>Admin Dashboard | eKOSORA</title>

      </Head>
      <Navbar page='Admin Dashboard' sideBarActive={sideBarActive} setSideBarActive={setSideBarActive} />
      <div className='w-full flex h-full items-start justify-start'>
        {
          sideBarActive
            ?
            <Sidebar user={user} page='admin' active='dashboard' />
            :
            null
        }
        <div className={`${sideBarActive ? 'w-10/12' : 'w-full'} flex flex-col items-center justify-start pt-[60px] h-fit p-10`}>

        </div>
      </div>
    </div>
  )
}

export default Index
