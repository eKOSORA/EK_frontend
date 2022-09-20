import Head from 'next/head'
import React, { useState } from 'react'
import { Navbar } from '../../../components/Dashboard/Navbar'
import Sidebar from '../../../components/Dashboard/Sidebar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css'
import { userTeacher } from '../../../utils/faker'
import { BiCog, BiInfoCircle } from 'react-icons/bi'
import uploadExcel from '../../../public/img/uploadExcel.svg'
import Image from 'next/image'

const studentsUpload = () => {
    //Important states
    const [sideBarActive, setSideBarActive] = useState(false)
    const [step, setStep] = useState(1)
    const [fileData, setFileData] = useState({
        students: [],
        fileName: '',
        timeUploaded: '',
        isFileUploaded: true,
        error: ''
    })

    const previewFile = () => {
        const inputElt = document.querySelector('#excelFileToUpload') as HTMLInputElement
        const file = inputElt.files ? inputElt.files[0] : ''
        console.log(file);

    }

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
                <title> Students | Teacher Dashboard | eKOSORA</title>
                <link href="https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&family=Questrial&family=Raleway:ital,wght@0,200;0,400;0,500;1,200&family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,500;1,700&display=swap" rel="stylesheet"></link>
            </Head>
            <Navbar page='Add students' sideBarActive={sideBarActive} setSideBarActive={setSideBarActive} />
            <div className='w-full flex h-full items-start justify-start'>
                {
                    sideBarActive
                        ?
                        <Sidebar user={userTeacher} active='students' />
                        :
                        null
                }
                <div className={`${sideBarActive ? 'w-10/12' : 'w-full'} flex flex-col items-center justify-center pt-[60px] h-screen p-10`}>

                    <div className='my-auto h-3/5 w-9/12 flex flex-row items-center justify-center'>
                        <div className="steps flex sm10:mr-8 sm10:flex-col items-center justify-center">
                            <div onClick={() => { setStep(1) }} className={`h-16 w-1 cursor-pointer  my-1 mx-10 sm10:mx-0 -rotate-90 sm10:rotate-0 rounded-[3px] ${step === 1 ? 'bg-ek-blue' : 'bg-ek-blue/20'}`}></div>
                            <div onClick={() => { setStep(2) }} className={`h-16 w-1 cursor-pointer  my-1 mx-10 sm10:mx-0 -rotate-90 sm10:rotate-0 rounded-[3px] ${step !== 1 ? 'bg-ek-blue' : 'bg-ek-blue/20'}`}></div>
                        </div>
                        {
                            step === 1 ?
                                <div className={`relative ${sideBarActive ? 'w-full' : 'w-11/12'} rounded h-full flex flex-col bg-ek-blue/10  items-start justify-center`}>
                                    <div className='flex items-center justify-start my-4 w-full'>
                                        <BiInfoCircle size={45} color="#4CA7CE" className='mx-8' />
                                        <span className='text-ek-blue text-3xl font-questrial'>Instructions</span>
                                    </div>
                                    <div className='w-full flex items-start px-28 flex-col justify-start '>
                                        <span className='text-xl text-black font-questrial'>There are some simple changes that you'll have to make on your excel file to make it easier for our system to use.</span>
                                        <span className='flex items-start my-4 justify-start'>
                                            <input className='mr-4 ' type="checkbox" name="" checked id="" />
                                            <span className='text-xl w-11/12'>The first row should be in the following format. And the columns must be arranged accordingly.</span>
                                        </span>
                                    </div>
                                    <div className='mx-auto my-8 bg-white flex flex-row items-center justify-center w-fit rounded h-fit'>
                                        <div className='text-base text-black px-4 py-1 border-r-2 border-r-ek-blue-50/70 mx-0 '>First Name</div>
                                        <div className='text-base text-black px-4 py-1 border-r-2 border-r-ek-blue-50/70 mx-0 '>Last Name</div>
                                        <div className='text-base text-black px-4 py-1 border-r-2 border-r-ek-blue-50/70 mx-0 '>Code / ID</div>
                                        <div className='text-base text-black px-4 py-1 border-r-2 border-r-ek-blue-50/70 mx-0 '>Year / Grade</div>
                                        <div className='text-base text-black px-4 py-1 border-r-2 border-r-ek-blue-50/70 mx-0 '>Class</div>
                                        <div className='text-base text-black px-4 py-1 border-r-2 border-r-ek-blue-50/70 mx-0 '>Parent Email(s)</div>
                                        <div className='text-base text-black px-4 py-1 border-r-ek-blue-50/70 mx-0 '>Parent Tel(s)</div>
                                    </div>
                                    <button className='px-6 mt-8 absolute right-12 bottom-6 rounded text-white font-normal py-2 bg-ek-blue-75 cursor-pointer' onClick={() => { setStep(2) }}>GOT IT</button>
                                </div>
                                :
                                fileData.isFileUploaded ?
                                    <div className={`${sideBarActive ? 'w-full' : 'w-11/12'} rounded h-full flex flex-col bg-ek-blue/10  items-center justify-center`}>
                                        <div className='flex flex-col items-center justify-center'>
                                            <BiCog size={45} color="#4CA7CE" className='rotating my-4 mx-8' />
                                            <span>Processing...</span>
                                        </div>
                                    </div>
                                    :
                                    <div className='droparea w-11/12 rounded h-full flex flex-col bg-ek-blue/10  items-center justify-center'>
                                        <div className='flex flex-col items-center justify-center'>
                                            <input type="file" id='excelFileToUpload' className='hidden' onChange={previewFile} name='excelFileToUpload' />
                                            <label className='w-full flex items-center justify-center' htmlFor="excelFileToUpload">
                                                <Image width={200} height={100} src={uploadExcel}></Image>
                                                <p>Drop file here</p>
                                            </label>

                                        </div>
                                    </div>

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default studentsUpload
