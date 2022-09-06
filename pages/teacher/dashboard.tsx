import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { Navbar } from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import timetable from './../../public/img/timetable.png'
import students from './../../public/img/students.png'
import announcement from './../../public/img/notification.png'
import marks from './../../public/img/marks.png'
import setting from './../../public/img/setting.svg'

const dashboard = () => {
    const [sideBarActive, setSideBarActive] = useState(false)
    return (
        <div className='w-screen bg-[#f0f0f0]'>
            <Head>
                <title>Teacher Dashboard | eKOSORA</title>
                <link href="https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&family=Questrial&display=swap" rel="stylesheet"></link>
            </Head>
            <Navbar sideBarActive={sideBarActive} setSideBarActive={setSideBarActive} />
            <div className='w-full flex h-full items-start justify-start'>
                {
                    sideBarActive
                        ?
                        <Sidebar active='dashboard' />
                        :
                        null
                }
                <div className='w-full flex flex-col items-center justify-start pt-[60px] h-fit p-10'>
                    <div className='w-full flex flex-col items-start my-8 justify-start'>
                        <span className='text-4xl heading-text mb-4'>Quick Access</span>
                        <div className='w-full flex items-center justify-center'>
                            <a href={'/teacher/marks'} className='neumorphism bg-[#f0f0f0]  w-1/4 rounded-[12px] QuickFeature flex-grow  cursor-pointer mr-[20px] mb-[20px] p-[20px] items-center flex-col flex h-full'>
                                <Image src={marks} width={150} height={150} ></Image>
                                <span className='text-lg questrialtext'>Marks</span>
                            </a>

                            <a href={'/teacher/settings'} className='neumorphism bg-[#f0f0f0]  w-1/4 rounded-[12px] QuickFeature flex-grow  cursor-pointer mr-[20px] mb-[20px] p-[20px] items-center flex-col flex h-full'>
                                <Image src={setting} width={150} height={150} ></Image>
                                <span className='text-lg questrialtext'>Settings</span>
                            </a>

                            <a href={'/teacher/timetables'} className='neumorphism bg-[#f0f0f0]  w-1/4 rounded-[12px] QuickFeature flex-grow  cursor-pointer mr-[20px] mb-[20px] p-[20px] items-center flex-col flex h-full'>
                                <Image src={timetable} width={150} height={150} ></Image>
                                <span className='text-lg questrialtext'>Timetable(s)</span>
                            </a>

                            <a href={'/teacher/announcements'} className='neumorphism bg-[#f0f0f0]  w-1/4 rounded-[12px] QuickFeature flex-grow  cursor-pointer mr-[20px] mb-[20px] p-[20px] items-center flex-col flex h-full'>
                                <Image src={announcement} width={150} height={150} ></Image>
                                <span className='text-lg questrialtext'>Announcements</span>
                            </a>

                        </div>
                    </div>

                    <div className='w-full flex flex-col items-start my-8 justify-start'>
                        <span className='text-4xl heading-text mb-4 flex items-center justify-center'><span>Announcements</span><span className='text-[14px] flex items-center justify-center h-6 py-[2.5px] px-[5px] bg-ek-blue-50 text-white ml-1 -translate-y-1 w-[35px] rounded-xl'>4</span></span>
                        <div className='w-full flex flex-col items-center justify-center'>
                            <div className='rounded-[5px] neumorphism w-full bg-[#f0f0f0] flex flex-col items-start justify-start mb-[30px] h-[160px] p-[20px] relative'>
                                <span className='text-base flex items-center justify-center bg-ek-blue-50 text-white -translate-y-1 w-fit h-6 p-[15px] rounded-3xl absolute -top-2 -right-2'>2 days ago</span>
                                <span className='mb-[20px] text-lg font-semibold questrialtext'>Discipline issues</span>
                                <span className=''>The students are starting to behave very wrong. I think that the parents should allows us to beat the shit out there children!</span>
                                <span className='w-full text-end mt-[20px] text-[#0006]'>Posted by <strong>A.IV</strong> on <strong>Thu Sep 01 2022</strong></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dashboard
