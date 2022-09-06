import Head from 'next/head'
import React, { useState } from 'react'
import { Navbar } from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'

const dashboard = () => {
    const [sideBarActive, setSideBarActive] = useState(false)
    return (
        <div className='w-screen'>
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
                <div className='w-full flex items-center justify-center pt-[60px] bg-violet-600 h-32'>
                    fasda
                </div>
            </div>
        </div>
    )
}

export default dashboard
