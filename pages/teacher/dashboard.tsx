import Head from 'next/head'
import React, { useState } from 'react'
import { Navbar } from '../../components/Dashboard/Navbar'

const dashboard = () => {
    const [sideBarActive, setSideBarActive] = useState(false)
    return (
        <div className='w-screen'>
            <Head>
                <title>Teacher Dashboard | eKOSORA</title>
            </Head>
            <Navbar setSideBarActive={setSideBarActive} />
        </div>
    )
}

export default dashboard
