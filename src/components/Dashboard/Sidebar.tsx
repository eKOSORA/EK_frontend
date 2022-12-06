import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import 'animate.css';
import { useSelector } from 'react-redux';


const Sidebar = (props: any) => {

  const userSlice = useSelector((state: any) => state.userSlice);
  const user = userSlice.user;
  return (
    <div className={`animate__animated  ${props.sideBarActive ? 'animate__slideOutLeft' : 'animate__slideInLeft'} sidebar w-[300px] pt-[60px] h-screen absolute md:z-1 md:sticky top-0 bg-ek-blue-50 flex flex-col items-center justify-between`}>
      <div className='w-full h-32  flex flex-col items-center justify-start'>
        <Link href={`/${props.page}/`}>
          <div className={`${props.active === 'dashboard' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>

            <span>Dashboard</span>
          </div>
        </Link>
        {
          props.page === 'educator'
            ?
            <>
              <Link href={'/educator/marks'}>
                <div className={`${props.active === 'marks' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                  <span>Marks</span>
                </div>
              </Link>
              <Link href={'/educator/timetables'}>
                <div className={`${props.active === 'timetables' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                  <span>Timetables</span>
                </div>
              </Link>
              <Link href={'/educator/students'} >
                <div className={`${props.active === 'students' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                  <span>Students</span>
                </div>
              </Link>
            </>
            : props.page === 'student' || props.page === "parent" ?
              <>
                <Link href={`/${props.page}/marks`} >
                  <div className={`${props.active === 'marks' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                    <span>Marks</span>
                  </div>
                </Link>
              </>
              : props.page === "admin" ?
                <>
                  <Link href={'/admin/marks'} >
                    <div className={`${props.active === 'marks' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                      <span>Marks</span>
                    </div>
                  </Link>
                  <Link href={'/admin/timetables'}  >
                    <div className={`${props.active === 'timetables' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                      <span>Timetables</span>
                    </div>
                  </Link>
                  <Link href={'/admin/students'}  >
                    <div className={`${props.active === 'students' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                      <span>Students</span>
                    </div>
                  </Link>
                </>
                :
                null
        }
        <Link href={`/${props.page}/settings`}  >
          <div className={`${props.active === 'settings' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
            <span>Settings</span>
          </div>
        </Link>
      </div >
      <Link href={''} className='bg-ek-blue-75 w-full flex items-center justify-center'>
        <div className='w-full h-[85px] flex px-4 items-center justify-end'>
          <div className='h-full  mr-[20px] flex flex-col items-end justify-center'>
            <span className='text-white text-[1.17em] font-bold questrialtext'>{user.names.split(' ')[user.names.split(' ').length - 1]}</span>
            <span className='text-white/[54%] text-[1.17em]'>{user.title.includes('admin') ? 'Admin' : 'Educator'}</span>
          </div>
          <Image alt="" className='object-cover rounded-full' width={45} height={45} src={user.profileImage}></Image>
        </div>
      </Link>
    </div >

  )
}

export default Sidebar
