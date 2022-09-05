import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import EducatorForm from '../../components/Auth/Forms/EducatorForm'
import ParentForm from '../../components/Auth/Forms/ParentForm'
import StudentForm from '../../components/Auth/Forms/StudentForm'
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
                <div className='w-7/12 flex items-center justify-center h-4/5 flex-col'>
                    <div className='flex flex-col justify-start items-start'>
                        <span className='text-2xl my-4'>Login as</span>
                        <div className='flex items-center flex-col justify-center'>
                            <div onClick={() => { setActive('parent') }} className={` duration-75 cursor-pointer w-64 h-12 my-2 ${active === 'parent' ? 'border-2 border-ek-blue' : ''}  text-ek-blue font-medium bg-ek-blue/10 qtext rounded text-xl text-center flex items-center justify-center`}><span>Parent</span></div>
                            <div onClick={() => { setActive('educator') }} className={` duration-75 cursor-pointer  w-64 h-12 my-2 ${active === 'educator' ? 'border-2 border-ek-blue' : ''}  text-ek-blue font-medium bg-ek-blue/10 qtext rounded text-xl text-center flex items-center justify-center`}><span>Educator</span></div>
                            <div onClick={() => { setActive('student') }} className={`duration-75 cursor-pointer  w-64 h-12 my-2 ${active === 'student' ? 'border-2 border-ek-blue' : ''}  text-ek-blue font-medium bg-ek-blue/10 qtext rounded text-xl text-center flex items-center justify-center`}><span>Student</span></div>
                        </div>
                    </div>
                </div>
                <div className='flex w-5/12 items-center justify-center h-full'>
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

export default signup
