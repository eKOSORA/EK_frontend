import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = (props: any) => {
  return (
    <div className='w-[300px] pt-[60px] h-screen bg-ek-blue-50 flex flex-col items-center justify-between'>
      <div className='w-full h-32  flex flex-col items-center justify-start'>
        <a href="/teacher/dashboard" className={`${props.active === 'dashboard' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
          <span>Dashboard</span>
        </a>
        <a href="/teacher/marks" className={`${props.active === 'marks' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
          <span>Marks</span>
        </a>
        <a href="/teacher/timetables" className={`${props.active === 'timetables' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
          <span>Timetables</span>
        </a>
        <a href="/teacher/students" className={`${props.active === 'students' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
          <span>Students</span>
        </a>
        <a href="/teacher/settings" className={`${props.active === 'settings' ? 'bg-black/10' : 'hover:bg-black/30'} questrialtext text-white text-base w-full py-[15px] px-[20px] inline-block`}>
          <span>Settings</span>
        </a>
      </div>
      <a href={'/teacher/account'} className='bg-ek-blue-75 w-full flex items-center justify-center'>
        <div className='w-full h-[85px] flex px-4 items-center justify-end'>
          <div className='h-full  mr-[20px] flex flex-col items-end justify-center'>
            <span className='text-white text-[1.17em] font-bold questrialtext'>Damascene</span>
            <span className='text-white/[54%] text-[1.17em]'>educator</span>
          </div>
          <Image className='object-cover rounded-full' width={45} height={45} src={'http://res.cloudinary.com/dyrneab5i/image/upload/v1647457738/tpkcgy3l9penta3gwb3a.png'}></Image>
        </div>
      </a>
    </div>
  )
}

export default Sidebar
