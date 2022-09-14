import Head from 'next/head'
import React, { useState } from 'react'
import { Navbar } from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

const marks = () => {
  const [sideBarActive, setSideBarActive] = useState(false)

  const [formData, setFormData] = useState({
    class: "",
    course: ""
  });

  const handleChange = (prop: keyof State) => (event: any) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };


  interface State {
    class: string;
    course: string;
  }
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
        <div className={`${sideBarActive ? 'w-10/12' : 'w-full'} flex flex-col items-center justify-start pt-[60px] h-screen p-10`}>
          <div className='w-full flex items-start flex-col justify-start mt-6 h-fit'>
            <div className=' w-[45%] '>
              <div className='pt-5 px-10 pb-10 border-2 rounded-lg border-ek-blue-50 flex flex-col items-start justify-start'>
                <h1 className='font-medium text-4xl font-questrial text-ek-blue-75'>Choose</h1>
                <FormControl className='my-4' fullWidth>
                  <InputLabel id="demo-simple-select-label">Class</InputLabel>
                  <Select
                    className='bg-ek-blue/10'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formData.class}
                    label="Class"
                    onChange={handleChange('class')}
                    autoFocus={true}
                  >
                    <MenuItem value={''} className='italic'>None</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

                <FormControl className='my-4' fullWidth>
                  <InputLabel id="demo-simple-select-label">Course</InputLabel>
                  <Select
                    className='bg-ek-blue/10'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formData.course}
                    label="Course"
                    onChange={handleChange('course')}
                    autoFocus={true}

                  >
                    <MenuItem value={''} className='italic'>None</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className='w-full p-10 flex items-center justify-between'>
                <span className='text-[#989898] font-questrial'>0 students selected</span>
                <button className='font-questrial text-white bg-ek-blue-75 rounded'>EDIT</button>
              </div>
            </div>
            <div className='neumorphism w-[45%]'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default marks
