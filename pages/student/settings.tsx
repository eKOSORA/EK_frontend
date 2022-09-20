import Head from 'next/head'
import React, { useState } from 'react'
import { Navbar } from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css'
import Image from 'next/image'
import { TextField } from '@mui/material'
import visibilityOff from './../../public/img/visibility_off.svg'
import visibility from './../../public/img/visibility.svg'
import { userStudent } from '../../utils/faker'


const studentsSettings = () => {
  //Important states
  const [sideBarActive, setSideBarActive] = useState(false)

  const [formData, setFormData] = useState({
    editMode: false,
    password: 'password@gmail.com',
    email: 'damascene10@gmail.com',
    code: 'RCA033RLN',
    name: 'Jean Damascene HABANABASHAKA',
    class: 'Year 2B',
    parents: ['precieuxmugisha@gmail.com', 'undimubyeyi@gmail.com', 'inyongera@gmail.com'],
    showPassword: false,
    profileImageStr: 'http://res.cloudinary.com/dyrneab5i/image/upload/v1647457738/tpkcgy3l9penta3gwb3a.png',

  })
  const previewFile = () => {
    const reader = new FileReader()
    const file = document.querySelector('#profileImageUpload') as HTMLInputElement
    reader.addEventListener('loadend', () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFormData({ ...formData, profileImageStr: reader.result })
    })
    if (file.files) {
      reader.readAsDataURL(file.files[0])
    }
  }
  interface State {
    name: string,
    email: string,
    class: string,
    password: boolean,
  }
  const handleChange = (prop: keyof State) => (event: any) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleChangeSettings = (e: any) => {
    e.preventDefault()
    console.log(formData)
    setFormData({ ...formData, editMode: !formData.editMode })
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
        <title> Settings | Student Dashboard | eKOSORA</title>
        <link href="https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&family=Questrial&family=Raleway:ital,wght@0,200;0,400;0,500;1,200&family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,500;1,700&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar page='Settings' sideBarActive={sideBarActive} setSideBarActive={setSideBarActive} />
      <div className='w-full flex h-full items-start justify-start'>
        {
          sideBarActive
            ?
            <Sidebar user={userStudent} page='students' active='settings' />
            :
            null
        }
        <div className={`${sideBarActive ? 'w-full md:w-10/12' : 'w-full'} flex flex-col items-center justify-start pt-[60px] h-fit p-10`}>
          <div className='neumorphism p-5 rounded max-w-[900px]  mt-8  min-h-[300px] flex md:flex-row flex-col  items-center w-11/12'>
            <div className={`relative w-[250px] h-[250px] profileImage mr-10   flex items-center justify-center`}>
              <Image onMouseEnter={() => { document.querySelector('#profileImageUploadLabel')?.classList.replace('hidden', 'flex') }} onMouseLeave={() => { document.querySelector('#profileImageUploadLabel')?.classList.replace('flex', 'hidden') }} width={250} height={250} src={formData.profileImageStr} style={{zIndex:-1}} className={`-z-1 w-full object-cover rounded-full`}></Image>
              <label htmlFor="profileImageUpload" id='profileImageUploadLabel' title='Change you profile image' className='cursor-pointer absolute top-0 left-0 w-full h-full rounded-full hidden items-center justify-center text-white bg-black/50'> <span>Change Profile</span> </label>
            </div>
            <div className='w-11/12 md:w-8/12 flex flex-col flex-grow'>
              <form onSubmit={handleChangeSettings} className='w-full flex flex-col items-start justify-center'>
                <input onChange={previewFile} type="file" name="profileImageUpload" id="profileImageUpload" className='hidden' />
                <div className='w-full flex items-center justify-center mb-1 flex-wrap'>
                  <h3 className='font-questrial font-semibold text-lg w-16 smm20:w-[100px]'>Names: </h3>
                  {
                    formData.editMode ?
                      <TextField onChange={handleChange('name')} label='Name' variant='outlined' focused={true} id='outlined-basic1' size='small' value={formData.name} className='bg-ek-blue/10 ml-2.5 py-[7px] px-[15px] text-base flex-grow' />
                      :
                      <input type="text" value={formData.name} className='bg-inherit ml-2.5 py-[7px] px-[15px] outline-none border-none text-base flex-grow' readOnly={true} />
                  }
                </div>
                <div className='w-full flex items-center justify-center mb-1 flex-wrap'>
                  <h3 className='font-questrial font-semibold text-lg w-16 smm20:w-[100px]'>Code: </h3>
                  <input type="text" value={formData.code} className='bg-inherit ml-2.5 py-[7px] px-[15px] outline-none border-none text-base flex-grow' readOnly={true} />
                </div>
                <div className='w-full flex items-center justify-center mb-1 flex-wrap'>
                  <h3 className='font-questrial font-semibold text-lg w-16 smm20:w-[100px]'>Class: </h3>
                  {
                    formData.editMode ?
                      <TextField onChange={handleChange('class')} label='Telephone' variant='outlined' focused={true} id='outlined-basic2' size='small' value={formData.class} className='bg-ek-blue/10 ml-2.5 py-[7px] px-[15px] text-base flex-grow' />
                      :
                      <input type={'tel'} value={formData.class} className='bg-inherit ml-2.5 py-[7px] px-[15px] outline-none border-none text-base flex-grow' readOnly={true} />
                  }
                </div>
                <div className='w-full flex items-center justify-center mb-1 flex-wrap'>
                  <h3 className='font-questrial font-semibold text-lg w-16 smm20:w-[100px]'>Email: </h3>
                  {
                    formData.editMode ?
                      <TextField onChange={handleChange('email')} label='Email' variant='outlined' focused={true} id='outlined-basic3' size='small' value={formData.email} className='bg-ek-blue/10 ml-2.5 py-[7px] px-[15px] text-base flex-grow' />
                      :
                      <input type="email" value={formData.email} className='bg-inherit ml-2.5 py-[7px] px-[15px] outline-none border-none text-base flex-grow' readOnly={true} />
                  }
                </div>
                <div className='w-full flex flex-row items-start justify-start mb-1 flex-wrap'>
                  <h3 className='font-questrial font-semibold text-lg w-16 smm20:w-[100px]'>Parents: </h3>
                  <div className='flex flex-col items-start justify-start'>
                    {formData.parents.map(parent => <span className='text-white py-2 px-4 rounded-full my-1 bg-ek-blue-50  ml-2.5 outline-none border-none text-base flex-grow' >{parent}</span>)}
                  </div>
                </div>
                <div className='w-full flex items-center justify-center mb-1 flex-wrap'>
                  <h3 className='font-questrial font-semibold text-lg w-16 smm20:w-[100px]'>Password: </h3>
                  {
                    formData.editMode ?
                      <TextField type={formData.showPassword ? 'text' : 'password'} label='Password' variant='outlined' focused={true} id='outlined-basic4' onChange={handleChange('password')} size='small' value={formData.password} className='bg-ek-blue/10 ml-2.5 py-[7px] px-[15px] text-base flex-grow' />
                      :
                      <input type={formData.showPassword ? 'text' : "password"} value={formData.password} className='bg-inherit ml-2.5 py-[7px] px-[15px] outline-none border-none text-base flex-grow' readOnly={true} />
                  }
                  <div onClick={() => { setFormData({ ...formData, showPassword: !formData.showPassword }) }} className='mx-4 hover:rotate-12 hover:grayscale-[50%] w-12 flex items-center justify-center h-12 cursor-pointer rounded-full neumorphism' >
                    <Image src={formData.showPassword ? visibility : visibilityOff}></Image>
                  </div>
                </div>
                <div className='flex items-center justify-center'>
                  <button className={`hover:grayscale-[50%] w-[150px] ${formData.editMode ? 'bg-[#ac3f3f]' : 'bg-ek-blue-75'} mr-2.5 text-white font-questrial mt-2.5 px-10 py-[15px]`} onClick={() => { setFormData({ ...formData, editMode: !formData.editMode }) }} type='button'>{formData.editMode ? 'CANCEL' : 'EDIT'}</button>
                  <button className={`hover:grayscale-[50%] ${formData.editMode ? 'flex items-center justify-center' : 'hidden'} w-[150px] bg-ek-blue-75 text-white font-questrial mt-2.5 px-10 py-[15px]`} type='submit'>SAVE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default studentsSettings


// export const getS
