import { TextField } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { MdOutlineDelete } from 'react-icons/md'
import { TimeTableViewObject } from '../../../pages/interfaces/timetables'

interface Props {
  activeTimetable: TimeTableViewObject
  setViewTimetable: Function
  setEditTimetable: Function
  confirmDeletion: Function
  index: number
}

const EditTimetableView: React.FC<Props> = ({ index, confirmDeletion, activeTimetable, setViewTimetable, setEditTimetable }) => {

  const deleteTimetable = () => {
    confirmDeletion(index)
    setViewTimetable(false)
    setEditTimetable(false)
  }

  const handleSaveTimetable = () => {
    console.log('save timetable')
    setEditTimetable(false)
    setViewTimetable(false)
  }
  return (
    <div className='z-[4] w-screen h-screen flex items-center justify-center fixed bg-black/70'>
      <div className='w-full z-[5] h-full absolute' onClick={() => setEditTimetable(false)}></div>
      <div className='bg-white z-[6] h-4/5 w-2/3 rounded flex flex-col p-10'>
        <TextField
          className='w-1/3 text-3xl'
          label="Timetable Name"
          variant="outlined"
          value={activeTimetable.name}
          onChange={(e) => activeTimetable.name = e.target.value}
          focused={true}
        />

        <div className='relative flex items-center justify-between mt-4 h-4/5 image-holder w-full'>
          <div className="absolute w-10/12 m-auto h-full">
            <Image layout='fill' src={activeTimetable.imageUrl} alt={`${activeTimetable.name}-image`} />
          </div>
          <div className='absolute  right-4 bottom-auto flex flex-col  items-center justify-center w-24 h-fit '>
            <div onClick={handleSaveTimetable} className='my-1 bg-ek-blue-75 flex items-center justify-center cursor-pointer text-white  w-24 rounded py-2 hover:animate-ring'>SAVE</div>
            <div onClick={() => deleteTimetable} className='my-1 bg-delete-red flex items-center justify-center cursor-pointer text-white w-24 rounded py-2 hover:animate-ring'>DELETE</div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default EditTimetableView
