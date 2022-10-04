import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import 'animate.css';


const Sidebar = (props: any) => {
  return (
    <div className={`animate__animated  ${props.sideBarActive ? 'animate__slideOutLeft' : 'animate__slideInLeft'} sidebar w-[300px] pt-[60px] h-screen absolute md:z-1 md:sticky top-0 bg-ek-blue-50 flex flex-col items-center justify-between`}>
      <div className='w-full h-32  flex flex-col items-center justify-start'>
        <a href={`/${props.page === 'students' ? 'student' : 'educator'}/dashboard`} className={`${props.active === 'dashboard' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
          <span>Dashboard</span>
        </a>
        <a href={`/${props.page === 'students' ? 'student' : 'educator'}/marks`} className={`${props.active === 'marks' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
          <span>Marks</span>
        </a>
        {props.page !== 'students' ?
          <>

            <a href={`/educator/timetables`} className={`${props.active === 'timetables' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
              <span>Timetables</span>
            </a>
            <a href={`/educator/students`} className={`${props.active === 'students' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
              <span>Students</span>
            </a>
          </>
          : null
        }
        <a href={`/${props.page === 'students' ? 'student' : 'educator'}/settings`} className={`${props.active === 'settings' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
          <span>Settings</span>
        </a>
      </div>
      <a href={'/educator/account'} className='bg-ek-blue-75 w-full flex items-center justify-center'>
        <div className='w-full h-[85px] flex px-4 items-center justify-end'>
          <div className='h-full  mr-[20px] flex flex-col items-end justify-center'>
            <span className='text-white text-[1.17em] font-bold questrialtext'>{props.user.name.split(' ')[props.user.name.split(' ').length - 1]}</span>
            <span className='text-white/[54%] text-[1.17em]'>{props.user.type}</span>
          </div>
          <Image className='object-cover rounded-full' width={45} height={45} src={props.user.profileImage}></Image>
        </div>
      </a>
    </div>
  )
}

export default Sidebar
