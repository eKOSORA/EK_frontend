import Head from 'next/head'
import React, { FormEvent, useEffect, useState } from 'react'
import { Navbar } from '../../../components/Dashboard/Navbar'
import Sidebar from '../../../components/Dashboard/Sidebar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css'
import { Autocomplete, Checkbox, TextField } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useGetUserDetails } from '../../../hooks/auth'
import { AddAnnouncementFormData } from '../../../types'
import { MeantForInterface } from '../../../types/interfaces'

const NewStudent = () => {
    //Important states
    const [sideBarActive, setSideBarActive] = useState(false)
    const [user, setUser] = useState()

    const [formData, setFormData] = useState<AddAnnouncementFormData>({
        heading: '',
        content: '',
        createdFor: []
    })

    const handleCreateAnnouncement = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
    }

    const getUser = async () => {
        try {
            const user = await useGetUserDetails()
            if (!user.status) return
            setUser(user.data?.data.user)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUser()
    }, [])
    return (
        <div className='animate__animated animate__fadeInLeft bg-[#f0f0f0] min-h-screen'>
            <ToastContainer
                position="bottom-center"
                autoClose={1000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='colored'
            />
            <Head>
                <title>New Announcement | eKOSORA</title>

            </Head>
            <Navbar page='New Announcement' sideBarActive={sideBarActive} setSideBarActive={setSideBarActive} />
            <div className='w-full flex h-full items-start justify-start'>
                {
                    sideBarActive
                        ?
                        <Sidebar user={user} page='educator' active='dashboard' />
                        :
                        null
                }
                <div className={`${sideBarActive ? 'w-10/12' : 'w-full'} flex flex-col items-center justify-start pt-[60px] h-fit p-2 sm:p-10`}>
                    <div className='m-auto msm:border-2 w-full sm:w-[550px] border-ek-blue-75 rounded-xl p-10 mt-14 flex flex-col items-center justify-center'>
                        <span className='w-full text-center text-4xl heading-text text-ek-blue-50'>Announcement</span>
                        <form onSubmit={handleCreateAnnouncement} className="mt-8 w-full flex-col flex items-center justify-center">
                            <TextField onChange={(e) => setFormData({ ...formData, heading: e.target.value })} focused={true} className="my-2 w-full bg-ek-blue-50/10 font-questrial" id={`outlined-basic${Math.ceil(Math.random() * 10)}`} label="Heading" required={true} variant="outlined" />
                            <TextField onChange={(e) => setFormData({ ...formData, content: e.target.value })} multiline={true} rows={6} focused={true} className="my-2 w-full bg-ek-blue-50/10 font-questrial" id={`outlined-basic${Math.ceil(Math.random() * 10)}`} type={'text'} size={'medium'} label="Message" required={true} variant="outlined" />

                            <Autocomplete
                                multiple
                                id="checkboxes-tags-demo"
                                options={meantFor}
                                disableCloseOnSelect
                                getOptionLabel={(option) => option.name}
                                renderOption={(props, option, { selected }) => (
                                    <li {...props}>
                                        <Checkbox
                                            icon={icon}
                                            checkedIcon={checkedIcon}
                                            style={{ marginRight: 8 }}
                                            checked={selected}
                                        />
                                        {option.name}
                                    </li>
                                )}
                                isOptionEqualToValue={(option, value) => option.value === value.value}
                                //onchange event


                                className={"my-2"}
                                style={{ width: '100%' }}
                                renderInput={(params) => (
                                    <TextField {...params} focused={true} className="bg-ek-blue-50/10" label="Meant For" placeholder="To whom does the announcement concern? " />
                                )}
                            />


                            <button type='submit' className='w-full text-xl my-4 rounded py-2 bg-ek-blue-75 text-white font-questrial'>Publish</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewStudent


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const meantFor: MeantForInterface[] = [
    {

        name: "Educators",
        value: "educator"
    },
    {
        name: "Students",
        value: "student"
    },
    {
        name: "Parents",
        value: "parent"
    },
];


