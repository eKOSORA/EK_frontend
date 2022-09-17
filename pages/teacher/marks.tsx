import Head from 'next/head'
import React, { useState } from 'react'
import { Navbar } from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import { IoIosAdd } from 'react-icons/io'
import { GoAlert } from 'react-icons/go'
import { useSnackbar } from 'notistack'
import { FormControl, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { classes, courses, studentMarks } from '../../utils/marks'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'
import 'animate.css'

const marks = () => {
  //Important states
  const [sideBarActive, setSideBarActive] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [editAsMode, setEditAsMode] = useState('')
  const [marksFormData, setMarksFormData] = useState({
    marksCount: 0,
    notifyParents: false,
    subject: ''
  })
  const [marksData, setMarksData] = useState({
    class: "",
    course: ""
  });
  const [selectedMarks, setSelectedMarks]: any = useState([])

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()



  const handleChange = (prop: keyof State) => (event: any) => {
    setMarksData({ ...marksData, [prop]: event.target.value });
  };

  const handleChangeGroupMarks = (e: any) => {
    e.preventDefault()
    console.log(marksFormData)
  }

  const selectEditAsMethod = () => {
    if (selectedMarks.length === 0) {
      console.log("No marks were selected")
      toast.error('No marks were selected!!!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        progress: undefined,
      });
      return
    }
    document.querySelector('.editModeSelector')?.classList.contains('hidden') ? document.querySelector('.editModeSelector')?.classList.replace('hidden', 'flex') : document.querySelector('.editModeSelector')?.classList.replace('flex', 'hidden')
  }
  interface State {
    class: string;
    course: string;
  }

  const selectAllStudents = (e: any) => {
    const checkboxes = document.querySelectorAll('.studentCheckbox')
    const masterCheckbox = document.querySelector('.AllStudentsCheckbox') as HTMLInputElement
    console.log(masterCheckbox.checked);
    checkboxes.forEach((checkbox: any) => {
      checkbox.checked = masterCheckbox.checked
    })
    setSelectedMarks(studentMarks)
  }

  return (
    <div className='animate__animated animate__fadeInLeft bg-[#f0f0f0] min-h-screen'>
      {
        editAsMode === 'group'
          ?
          <div className='absolute w-full flex items-center justify-center h-screen z-[2] top-0 bg-black/70 left-0'>
            <div className='absolute z-[-3] w-screen h-screen' onClick={() => setEditAsMode('')}></div>
            <div className='z-[10]  h-fit py-10 px-[67px] rounded bg-white flex flex-col items-start justify-start'>
              <h3 className='text-3xl font-questrial'>Marks to Add or Remove</h3>
              <div className='w-full flex items-center justify-center'>
                <div className=' my-8 flex items-center justify-center'>
                  <button className='h-10 w-12 rounded-l-lg bg-gray-300 flex items-center justify-center text-2xl' onClick={() => setMarksFormData({ ...marksFormData, marksCount: marksFormData.marksCount - 1 })}>-</button>
                  <div className='h-10 w-16 rounded-none bg-white flex items-center justify-center text-2xl'>{marksFormData.marksCount}</div>
                  <button className='h-10 w-12 rounded-r-lg bg-gray-300 flex items-center justify-center text-2xl' onClick={() => setMarksFormData({ ...marksFormData, marksCount: marksFormData.marksCount + 1 })}>+</button>
                </div>
              </div>
              <form className='w-full flex items-start justify-start flex-col' onSubmit={handleChangeGroupMarks}>
                <FormControl className='my-4' fullWidth>
                  <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                  <Select
                    className='bg-ek-blue/10'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={marksData.class}
                    label="Subject"
                    onChange={(e) => { setMarksFormData({ ...marksFormData, subject: e.target.value }) }}
                    autoFocus={true}
                  >
                    <MenuItem value={''} className='italic'>None</MenuItem>
                    <MenuItem value={marksData.course} className=''>{marksData.course.toUpperCase().split('_').map(word => `${word} `)}</MenuItem>

                  </Select>
                </FormControl>
                <div className='flex items-center justify-center'>
                  <input onChange={() => { setMarksFormData({ ...marksFormData, notifyParents: !marksFormData.notifyParents }) }} type="checkbox" className='' value={'notifyparents'} />
                  <span className='ml-4'>Notify Parents/Guardians</span>
                </div>

              </form>

              {
                marksFormData.notifyParents ?
                  <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    defaultValue=""
                    className='bg-ek-blue/10 my-8 w-full'
                    focused={true}
                  />
                  :
                  null
              }
              <button></button>
            </div>
          </div>
          :
          null
      }
      <ToastContainer
        position="top-center"
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
        <title>Teacher Dashboard | eKOSORA</title>
        <link href="https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&family=Questrial&family=Raleway:ital,wght@0,200;0,400;0,500;1,200&family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,500;1,700&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar page='Marks' sideBarActive={sideBarActive} setSideBarActive={setSideBarActive} />
      <div className='w-full flex h-full items-start justify-start'>
        {
          sideBarActive
            ?
            <Sidebar active='marks' />
            :
            null
        }
        <div className={`${sideBarActive ? 'w-10/12' : 'w-full'} flex flex-col items-center justify-start pt-[60px] h-fit p-10`}>
          <div className='w-full flex items-start  justify-around mt-6 h-fit'>
            <div className=' w-[40%] '>
              <div className='pt-5 px-10 pb-10 border-2 rounded-lg border-ek-blue-50 flex flex-col items-start justify-start'>
                <h1 className='font-medium text-4xl font-questrial text-ek-blue-75'>Choose</h1>
                <FormControl className='my-4' fullWidth>
                  <InputLabel id="demo-simple-select-label">Class</InputLabel>
                  <Select
                    className='bg-ek-blue/10'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={marksData.class}
                    label="Class"
                    onChange={handleChange('class')}
                    autoFocus={true}
                    MenuProps={{ disablePortal: true }}

                  >
                    <MenuItem value={''} className='italic'>None</MenuItem>
                    {
                      classes.map((course) => <MenuItem key={Math.random()} value={course.value}>{course.name}</MenuItem>)
                    }
                  </Select>
                </FormControl>

                <FormControl className='my-4' fullWidth>
                  <InputLabel id="demo-simple-select-label">Course</InputLabel>
                  <Select
                    className='bg-ek-blue/10'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={marksData.course}
                    label="Course"
                    onChange={handleChange('course')}
                    autoFocus={true}
                    MenuProps={{ disablePortal: true }}
                  >
                    <MenuItem value={''} className='italic'>None</MenuItem>
                    {
                      courses.map((year) => <MenuItem key={Math.random()} value={year.value}>{year.name}</MenuItem>)
                    }
                  </Select>
                </FormControl>
              </div>
              <div className='neumorphism relative my-4  rounded-lg w-full p-10 flex items-center justify-between'>
                <span className='text-[#989898] font-questrial'>0 students selected</span>
                <button className='font-questrial py-3 px-10 text-white bg-ek-blue-75 btn rounded' onClick={selectEditAsMethod}>EDIT</button>
                <div className='absolute -bottom-16 right-10  bg-white rounded p-5 editModeSelector hidden flex-col items-start justify-start'>
                  <div className='w-full flex items-center justify-between'><span>Edit as:</span></div>
                  <div className='flex items-center justify-center'>
                    <button className='font-questrial py-2 hover:grayscale-[50%] mr-4 px-10 text-white bg-ek-blue-75 btn rounded' onClick={() => { setEditAsMode('individually'); setEditMode(!editMode) }}>{editMode ? 'CANCEL' : 'INDIVIDUAL'}</button>
                    <button className='font-questrial py-2 mx-4 px-10 hover:grayscale-[50%] text-white bg-ek-blue-75 btn rounded' onClick={() => { setEditAsMode('group'); document.querySelector('.editModeSelector')?.classList.replace('flex', 'hidden') }}>GROUP</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='neumorphism relative w-[55%] px-2  h-[inherit] rounded-lg flex flex-col items-start '>
              <Link href={'/teacher/record/new'} ><IoIosAdd className=' p-1 absolute right-2 top-2 bg-ek-blue-75 rounded-full cursor-pointer text-white hover:rotate-12 ' size={35} /></Link>
              <span className={`${editMode ? 'flex' : 'hidden'} w-full items-end justify-end mt-14 px-6 cursor-pointer text-red-600 hover:underline`}><GoAlert size={30} color='#dc2626' className='mr-2' /><span className='text-xl font-medium'>Currently in Editing Mode</span></span>
              {
                (marksData.course && marksData.class) ?
                  <table className='mt-16 w-full'>
                    <thead>
                      <tr>
                        <th className='flex items-center justify-center -w-10 h-8'>
                          <input onChange={selectAllStudents} className='AllStudentsCheckbox' type="checkbox" name="" id="" />
                        </th>
                        <th className='w-5/12 bg-ek-blue-50 text-white'>Name</th>
                        <th className='w-5/12 bg-ek-blue-50 text-white'>/30</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        studentMarks.map((studentMark: any) => {
                          return <tr key={Math.random()} className='my-1 even:bg-gray-300 py-1 h-8'>
                            <td className='flex items-center justify-center py-1 -w-10 h-8'><input onChange={() => setSelectedMarks([...selectedMarks, studentMark])} className='studentCheckbox' type="checkbox" name="" id="" /></td>
                            <td className='py-1'>{studentMark.studentName}</td>
                            <td align='center' className='py-1'>{
                              editMode && editAsMode === 'individually' ?
                                <input type="number" max={studentMark.records[0].max} defaultValue={studentMark.records[0].mark} className={`px-4 text-center py-1 bg-inherit`} />
                                :
                                <span>{studentMark.records[0].mark}</span>
                            }
                            </td>
                          </tr>
                        })
                      }
                    </tbody>
                    <tfoot>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tfoot>
                  </table>
                  :
                  <div className='w-full flex items-center justify-center'><span className='text-lg text-gray-400 my-24'>Nothing Selected</span></div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default marks
