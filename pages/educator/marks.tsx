import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import { useSnackbar } from 'notistack'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { classes, courses, registeredMarks } from '../../utils/marks'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css'
import { userTeacher } from '../../utils/faker'
import { IoIosAdd } from 'react-icons/io'
import Link from 'next/link'
import { GoAlert, GoSearch } from 'react-icons/go'

const marks = () => {
  //Important states
  const [sideBarActive, setSideBarActive] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [studentMarks, setStudentMarks] = useState(registeredMarks)
  const [_studentMarks, set_StudentMarks] = useState(registeredMarks)
  const [editAsMode, setEditAsMode] = useState('')
  const [marksFormData, setMarksFormData] = useState({
    marksCount: 0,
    notifyParents: true,
    subject: ''
  })
  const [marksData, setMarksData] = useState({
    class: "",
    course: ""
  });
  const [selectedMarks, setSelectedMarks]: any = useState([])
  const [stats, setStats] = useState({
    total: 0,
    maxTotal: 0,
    average: 0,
    maxAverage: 0,

  })


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

  const handleSearchStudents = (e: any) => {
    const query = e.target.value
    if (query === "") return setStudentMarks(_studentMarks)
    console.log(query)
    const searchedStudents = _studentMarks.filter((student: any) => student.studentName.toLowerCase().includes(query));
    console.log(searchedStudents)
    setStudentMarks(searchedStudents)
    return
  }

  /*
      const handleSearchStudents = (e: any) => {
        const query = e.target.value
        if (query === "") return setStudents(_students)
        console.log(query)
        const searchedStudents = _students.filter((student: any) => student['First Name'].toLowerCase().includes(query) || student['Last Name'].toLowerCase().includes(query));
        console.log(searchedStudents)
        setStudents(searchedStudents)
        return
    }
  */
  const selectAllMarks = (e: any) => {
    const allSelector = e.target
    const allCheckboxes = document.querySelectorAll('table input[type=checkbox]') as any //Array<HTMLInputElement>

  }

  const calculateAverage = (selectedArray: Array<any>) => {

    const allMarks = selectedArray.map((studentMark: any) => parseInt(studentMark.records[0].mark))
    const _totalMarks = allMarks.reduce((partialSum: number, a: number) => partialSum + a, 0)
    console.log(_totalMarks);

    const allMaxMarks = selectedArray.map((studentMark: any) => parseInt(studentMark.records[0].max))
    const _totalMaxMarks = allMaxMarks.reduce((partialSum: number, a: number) => partialSum + a, 0)
    console.log(_totalMaxMarks);

    const _average = _totalMarks / allMarks.length
    const _maxAverage = _totalMaxMarks / allMarks.length

    setStats({
      total: _totalMarks,
      maxTotal: _totalMaxMarks,
      average: _average,
      maxAverage: _maxAverage,
    })

  }
  useEffect(() => {

    calculateAverage(studentMarks);

  }, [studentMarks])




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
                  <input defaultChecked onChange={() => { setMarksFormData({ ...marksFormData, notifyParents: !marksFormData.notifyParents }) }} type="checkbox" className='' value={'notifyparents'} />
                  <span className='ml-4'>Notify Parents/Guardians</span>
                </div>

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
                <button type="submit" className='rounded-lg py-2.5 px-12 bg-ek-blue-75 cursor-pointer text-white'>Done</button>
              </form>
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

      </Head>
      <Navbar page='Marks' sideBarActive={sideBarActive} setSideBarActive={setSideBarActive} />
      <div className='w-full flex h-full items-start justify-start'>
        {
          sideBarActive
            ?
            <Sidebar user={userTeacher} active='marks' />
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
              <span className={`${editMode ? 'flex' : 'hidden'} w-full items-end justify-end mt-14 px-6 cursor-pointer text-red-600 hover:underline`}><GoAlert size={30} color='#dc2626' className='mr-2' /><span onClick={() => setEditMode(false)} title="Cancel" className='text-xl font-medium'>Currently in Editing Mode</span></span>
              {
                (marksData.course && marksData.class) ?
                  <div className='flex flex-col px-6 w-full'>

                    <div className='flex items-center justify-between w-full py-4'>
                      <div className='my-4 float-right px-2 rounded-3xl w-7/12 font-questrial items-center justify-center flex text-lg neumorphism'>
                        <GoSearch size={20} color='grey' />
                        <input type="text" maxLength={30} placeholder='Search' onChange={handleSearchStudents} className="text-[#808080] outline-none w-[90%] border-none bg-inherit p-2.5 " />
                      </div>
                      <Link href={'/educator/record/new'} ><IoIosAdd className=' p-1 bg-ek-blue-75 rounded-full cursor-pointer text-white hover:rotate-12 ' size={35} /></Link>
                    </div>
                    <table className=' w-full'>
                      <thead>
                        <tr>
                          <th className='flex items-center justify-center  -w-10 py-4   '>
                            <input onChange={selectAllMarks} className='AllStudentsCheckbox border-white checked:bg-white' type="checkbox" name="" id="" />
                          </th>
                          <th className='w-5/12 bg-ek-blue-50 text-white'>Name</th>
                          <th id='marksColumn' className='w-5/12 bg-ek-blue-50 text-white'>/30</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          studentMarks.map((studentMark: any, index: number) => {
                            return <tr key={Math.random()} className='my-1 even:bg-gray-300 py-1 h-8'>
                              <td className='flex items-center justify-center py-1 -w-10 h-8'><input onChange={() => selectedMarks.push(studentMark)} className='studentCheckbox' type="checkbox" name="" id="" /></td>
                              <td className='py-1'>{studentMark.studentName}</td>
                              <td align='center' className='py-1'>{
                                editMode && editAsMode === 'individually' ?
                                  <input type={'number'} maxLength={studentMark.records[0].max} onChange={(e) => studentMarks[index].records.mark = e.target.value} defaultValue={studentMark.records[0].mark} className={`px-4 text-center py-1 bg-inherit`} />
                                  :
                                  <span>{studentMark.records[0].mark}</span>
                              }
                              </td>
                            </tr>
                          })
                        }
                      </tbody>
                      <tfoot className='text-white font-questrial bg-ek-blue-75'>
                        <tr>
                          <td className='text-center text-xl font-semibold' colSpan={2}>Total: </td>
                          <td className='text-center text-xl font-semibold'><span>{Math.round(stats.total * 10) / 10}</span>/<span>{stats.maxTotal}</span></td>
                        </tr>
                        <tr>
                          <td className='text-center text-xl font-semibold' colSpan={2}>Average: </td>
                          <td className='text-center text-xl font-semibold'><span>{Math.round(stats.average * 10) / 10}</span>/<span>{stats.maxAverage}</span></td>
                        </tr>
                      </tfoot>
                    </table>

                  </div>
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

