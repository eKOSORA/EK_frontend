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

                <div className='flex w-4/12 items-center justify-center h-full'>
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
