import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import 'animate.css';
import { useGetUserDetails } from '../../hooks/auth';


const Sidebar = (props: any) => {

  const { user }: any = useGetUserDetails()

  return (
    <div className={`animate__animated  ${props.sideBarActive ? 'animate__slideOutLeft' : 'animate__slideInLeft'} sidebar w-[300px] pt-[60px] h-screen absolute md:z-1 md:sticky top-0 bg-ek-blue-50 flex flex-col items-center justify-between`}>
      <div className='w-full h-32  flex flex-col items-center justify-start'>
        {
          props.page === 'educator'
            ?
            <>
              <Link href={'/educator/'} className={`${props.active === 'dashboard' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                <span>Dashboard</span>
              </Link>
              <Link href={'/educator/marks'} className={`${props.active === 'marks' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                <span>Marks</span>
              </Link>
              <Link href={'/educator/timetables'} className={`${props.active === 'timetables' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                <span>Timetables</span>
              </Link>
              <Link href={'/educator/students'} className={`${props.active === 'students' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                <span>Students</span>
              </Link>
              <Link href={'/educator/settings'} className={`${props.active === 'settings' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                <span>Settings</span>
              </Link>
            </>
            : props.page === 'student' || props.page === "parent" ?
              <>
                <Link href={`/${props.page}/`} className={`${props.active === 'dashboard' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                  <span>Dashboard</span>
                </Link>
                <Link href={`/${props.page}/marks`} className={`${props.active === 'marks' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                  <span>Marks</span>
                </Link>
                <Link href={`/${props.page}/settings`} className={`${props.active === 'settings' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                  <span>Settings</span>
                </Link>
              </>
              : props.page === "admin" ?
                <>
                  <Link href={'/admin/'} className={`${props.active === 'dashboard' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                    <span>Dashboard</span>
                  </Link>
                  <Link href={'/admin/marks'} className={`${props.active === 'marks' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                    <span>Marks</span>
                  </Link>
                  <Link href={'/admin/timetables'} className={`${props.active === 'timetables' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                    <span>Timetables</span>
                  </Link>
                  <Link href={'/admin/students'} className={`${props.active === 'students' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                    <span>Students</span>
                  </Link>
                  <Link href={'/admin/settings'} className={`${props.active === 'settings' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
                    <span>Settings</span>
                  </Link>
                </>
                :
                null
        }
      </div>
      <Link href={''} className='bg-ek-blue-75 w-full flex items-center justify-center'>
        <div className='w-full h-[85px] flex px-4 items-center justify-end'>
          <div className='h-full  mr-[20px] flex flex-col items-end justify-center'>
            <span className='text-white text-[1.17em] font-bold questrialtext'>{user.name.split(' ')[user.name.split(' ').length - 1]}</span>
            <span className='text-white/[54%] text-[1.17em]'>{user.type}</span>
          </div>
          <Image alt="" className='object-cover rounded-full' width={45} height={45} src={user.profileImage}></Image>
        </div>
      </Link>
    </div>

  )
}

export default Sidebar
