import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { Navbar } from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import timetable from '../../public/img/timetable.png'
import announcement from '../../public/img/notification.png'
import marks from '../../public/img/marks.png'
import setting from '../../public/img/setting.svg'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import 'animate.css'
import { userTeacher } from '../../utils/faker'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'WUI',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'JAVASCRIPT',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const dashboard = () => {
    const [sideBarActive, setSideBarActive] = useState(false)
    return (
        <div className='bg-[#f0f0f0] '>
            <Head>
                <title>Teacher Dashboard | eKOSORA</title>

            </Head>
            <Navbar page='Dashboard' sideBarActive={sideBarActive} setSideBarActive={setSideBarActive} />
            <div className='w-full flex h-full items-start justify-start'>
                {
                    sideBarActive
                        ?
                        <Sidebar page="educator" user={userTeacher} active='dashboard' />
                        :
                        null
                }
                <div className={`${sideBarActive ? 'w-10/12' : 'w-full'} flex flex-col items-center justify-start pt-[60px] h-fit p-10`}>
                    <div className='w-full flex flex-col items-start  animate__animated animate__fadeInLeft my-8 justify-start'>
                        <span className='text-4xl heading-text mb-4'>Quick Access</span>
                        <div className='w-full flex items-center justify-center'>
                            <a href={'/educator/marks'} className='neumorphism bg-[#f0f0f0]  w-1/4 rounded-[12px] QuickFeature flex-grow  cursor-pointer mr-[20px] mb-[20px] p-[20px] items-center flex-col flex h-full'>
                                <Image src={marks} width={150} height={150} ></Image>
                                <span className='text-lg questrialtext'>Marks</span>
                            </a>

                            <a href={'/educator/settings'} className='neumorphism bg-[#f0f0f0]  w-1/4 rounded-[12px] QuickFeature flex-grow  cursor-pointer mr-[20px] mb-[20px] p-[20px] items-center flex-col flex h-full'>
                                <Image src={setting} width={150} height={150} ></Image>
                                <span className='text-lg questrialtext'>Settings</span>
                            </a>

                            <a href={'/educator/timetables'} className='neumorphism bg-[#f0f0f0]  w-1/4 rounded-[12px] QuickFeature flex-grow  cursor-pointer mr-[20px] mb-[20px] p-[20px] items-center flex-col flex h-full'>
                                <Image src={timetable} width={150} height={150} ></Image>
                                <span className='text-lg questrialtext'>Timetable(s)</span>
                            </a>

                            <a href={'/educator/announcements'} className='neumorphism bg-[#f0f0f0]  w-1/4 rounded-[12px] QuickFeature flex-grow  cursor-pointer mr-[20px] mb-[20px] p-[20px] items-center flex-col flex h-full'>
                                <Image src={announcement} width={150} height={150} ></Image>
                                <span className='text-lg questrialtext'>Announcements</span>
                            </a>

                        </div>
                    </div>

                    <div className='w-full flex flex-col items-start my-8 justify-start  animate__animated animate__fadeInLeft'>
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

                    <div className='w-full flex flex-col items-start my-8 justify-start  animate__animated animate__fadeInLeft'>
                        <span className='text-4xl heading-text mb-4 flex items-center justify-center'><span>Statistics</span></span>
                        <div className='w-full flex flex-row items-end justify-around'>
                            <div className='w-7/12'>
                                <Bar options={options} className='w-32 h-40vh' data={data} />
                            </div>
                            <div className='scale-75 relative p-10 w-4/12 pt-6 neumorphism rounded-lg'>
                                <h2 className='heading-text text-ek-blue text-4xl my-4'>Summary</h2>
                                <h3 className='font-questrial text-xl mb-1'>BEST CLASS</h3>
                                <div className='px-10 flex flex-col mb-3 items-start justify-start'>
                                    <div className='flex items-center justify-center'><span className='text-lg text-gray-400 '>Class: </span><span className='text-lg text-black ml-2'>Year 1 A</span></div>
                                    <div className='flex items-center justify-center'><span className='text-lg text-gray-400 '>Marks: </span><span className='text-lg text-black ml-2'>87%</span></div>
                                </div>
                                <h3 className='font-questrial text-xl mb-1'>WORST CLASS</h3>
                                <div className='px-10 flex flex-col mb-3  items-start justify-start'>
                                    <div className='flex items-center justify-center'><span className='text-lg text-gray-400 '>Class: </span><span className='text-lg text-black ml-2'>Year 1 B</span></div>
                                    <div className='flex items-center justify-center'><span className='text-lg text-gray-400 '>Marks: </span><span className='text-lg text-black ml-2'>87%</span></div>
                                </div>
                                <div className='w-full px-4 py-3 mt-3 absolute bottom-0 left-0 right-0 bg-ek-blue-50 rounded-b-lg text-white'>Web Development with PHP</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default dashboard
