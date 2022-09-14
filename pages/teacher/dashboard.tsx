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
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const dashboard = () => {
    const [sideBarActive, setSideBarActive] = useState(false)
    return (
        <div className='bg-[#f0f0f0]'>
            <Head>
                <title>Teacher Dashboard | eKOSORA</title>
                <link href="https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&family=Questrial&family=Raleway:ital,wght@0,200;0,400;0,500;1,200&family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,500;1,700&display=swap" rel="stylesheet"></link>
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
                <div className={`${sideBarActive ? 'w-10/12' : 'w-full'} flex flex-col items-center justify-start pt-[60px] h-fit p-10`}>
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

                    <div className='w-full flex flex-col items-start my-8 justify-start'>
                        <span className='text-4xl heading-text mb-4 flex items-center justify-center'><span>Statistics Summary</span></span>
                        <div className='w-full flex flex-col items-center justify-center'>
                            <Bar options={options} className='w-1/2' data={data} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default dashboard
