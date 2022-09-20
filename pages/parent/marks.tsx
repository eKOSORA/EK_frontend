import Head from 'next/head'
import React, { useState } from 'react'
import { Navbar } from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css'

const studentsMarks = () => {
  //Important states
  const [sideBarActive, setSideBarActive] = useState(false)

  const studentMarks = [
    { name: 'Maths Quiz', subject: 'Maths', shortForm: 'MTC', marks: 90, max: 100, date: 'Tue May 24 2022' },
    { name: 'WUI Quiz', subject: 'Web User Interface', shortForm: 'WUI', marks: 90, max: 100, date: 'Tue May 24 2022' },
    { name: 'PHP Quiz', subject: 'PHP', shortForm: 'PHP', marks: 90, max: 100, date: 'Tue May 24 2022' },
    { name: 'FOP Quiz', subject: 'Fundamentals of Programming', shortForm: 'FOP', marks: 90, max: 100, date: 'Tue May 24 2022' },

  ]

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
        <title> Marks | Student Dashboard | eKOSORA</title>
        <link href="https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&family=Questrial&family=Raleway:ital,wght@0,200;0,400;0,500;1,200&family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,500;1,700&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar page='Marks' sideBarActive={sideBarActive} setSideBarActive={setSideBarActive} />
      <div className='w-full flex h-full items-start justify-start'>
        {
          sideBarActive
            ?
            <Sidebar page='students' active='marks' />
            :
            null
        }
        <div className={`${sideBarActive ? 'w-10/12' : 'w-full'} flex flex-col items-center justify-center pt-[60px] h-fit p-10`}>
          <h3 className='w-full text-center heading-text text-black text-3xl my-4'>MUGISHA PRECIEUX's marks</h3>
          <div className='flex items-center justify-start w-full px-5 my-4'>
            {
              studentMarks.map((studentMark) => {
                return <div className='mx-3 pr-16   rounded-md relative h-40 justify-around flex flex-col items-center w-72 py-2.5 px-5 marksCard'>
                  <h3 className='w-full text-center heading-text text-black text-2xl mb-5'>{studentMark.name}</h3>
                  <h3 className='w-full text-center heading-text text-black/60 text-2xl mb-5'>{studentMark.marks}/{studentMark.max}</h3>
                  <p className="Date text-black/60">{studentMark.date}</p>
                  <div className='absolute h-full rounded-r-md text-white text-2xl heading-text w-[50px] items-center justify-center flex bg-ek-blue-75 right-0 top-0 flex-col'>
                    {
                      studentMark.shortForm.split('').map((letter) => <span>{letter}</span>)
                    }
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default studentsMarks