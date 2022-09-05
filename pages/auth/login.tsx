import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Auth/Navbar'

const signup: NextPage = () => {
    useEffect(() => {
        document.title = "Login | eKOSORA"
    })
    const [active, setActive] = useState('parent')
    const [formData, setFormData] = useState({
        code: '',
        phoneNumber: null,
        password: ''
    })

    const tabs = ['parent', 'student', 'educator']

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-start'>
            <Navbar />
            <div className='main w-full h-full flex items-center justify-center'>
                <div className='flex items-start w-8/12 h-2/3 my-auto flex-col justify-center'>
                    <span className='text-black text-[24px] font-base   '>Login as</span>
                    {tabs.map((tab) => {
                        <div className='flex items-center justify-center w-full h-3'>
                            <div className={`${active === tab ? 'bg-[#F5F5F5] border-2 border-ek-blue ' : 'bg-[#DBDBDB]'} rounded cursor-pointer w-[145px] h-[145px] flex items-center justify-center`}>
                                <span className={`text-[24px] ${active === tab ? 'text-black/40' : 'text-[#3F7CAC]'} qtext`}>{tab}</span>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default signup
