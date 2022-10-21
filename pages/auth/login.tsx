import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import EducatorForm from '../../components/Auth/Forms/EducatorForm'
import ParentForm from '../../components/Auth/Forms/ParentForm'
import StudentForm from '../../components/Auth/Forms/StudentForm'
import { Navbar } from '../../components/Auth/Navbar'

const Login: NextPage = () => {
    const [active, setActive] = useState('parent')

    const router = useRouter()

    useEffect(() => {
        router.prefetch(`/${active}/`)
    }, [active, router])

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-start'>
            <Head>
                <title>Login | eKOSORA</title>
            </Head>
            <Navbar />
            <div className='main w-full h-full flex sm:flex-row flex-col items-center justify-center'>
                <div className='flex w-fit  items-center justify-center  mt-24 sm:h-4/5 flex-col'>
                    <div className='flex flex-col justify-start items-start'>
                        <span className='text-2xl mx-2 my-4 questrialtext'>Login as</span>
                        <div className='flex items-center sm:flex-col justify-center'>
                            <div onClick={() => { setActive('parent') }} className={` duration-100 login-options cursor-pointer px-1 msm:w-32 sm:w-48 md:w-72 h-12 msm:h-16 m-2 ${active === 'parent' ? 'border-2 border-ek-blue' : 'hover:scale-105'}  text-ek-blue font-medium bg-ek-blue/10 heading-text rounded text-xl text-center flex items-center justify-center`}><span>Parent</span></div>
                            <div onClick={() => { setActive('educator') }} className={` duration-100 login-options cursor-pointer px-1 msm:w-32 sm:w-48 md:w-72 h-12 msm:h-16 m-2 ${active === 'educator' ? 'border-2 border-ek-blue' : 'hover:scale-105'}  text-ek-blue font-medium bg-ek-blue/10 heading-text rounded text-xl text-center flex items-center justify-center`}><span>Educator</span></div>
                            <div onClick={() => { setActive('student') }} className={`duration-100 login-options cursor-pointer px-1 msm:w-32 sm:w-48 md:w-72 h-12 msm:h-16 m-2 ${active === 'student' ? 'border-2 border-ek-blue' : 'hover:scale-105'}  text-ek-blue font-medium bg-ek-blue/10 heading-text rounded text-xl text-center flex items-center justify-center`}><span>Student</span></div>
                        </div>
                    </div>
                </div>
                <div className='animate__animated animate__fadeInRightBig flex w-full sm:w-8/12 md:w-7/12 xl:w-5/12 items-center justify-center h-full'>
                    {
                        active === 'parent' ?
                            <ParentForm />
                            :
                            active === 'student' ?
                                <StudentForm />
                                :
                                <EducatorForm />
                    }
                </div>
            </div>
        </div>
    )
}

export default Login
