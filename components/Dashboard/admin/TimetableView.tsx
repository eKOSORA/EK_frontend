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

const TimetableView: React.FC<Props> = ({ index, confirmDeletion, activeTimetable, setViewTimetable, setEditTimetable }) => {

  const deleteTimetable = () => {
    confirmDeletion(index)
    setViewTimetable(false)
    setEditTimetable(false)
  }

  return (
    <div className='z-[4] w-screen h-screen flex items-center justify-center absolute bg-black/70'>
      <div className='w-full z-[5] h-full absolute' onClick={() => setViewTimetable(false)}></div>
      <div className='bg-white z-[6] h-4/5 w-2/3 rounded flex flex-col p-10'>
        <span className='w-full text-ek-blue-50 text-3xl heading-text'>{activeTimetable.name}</span>
        <span className='my-3 text-base text-ek-blue-50'>{activeTimetable.lastEdited}</span>
        <div className='relative flex items-center justify-between mt-4 h-4/5 image-holder w-full'>
          <div className="absolute w-10/12 m-auto h-full">
            <Image layout='fill' src={activeTimetable.imageUrl} alt={`${activeTimetable.name}-image`} />
          </div>
          <div className='absolute  right-4 bottom-auto flex flex-col  items-center justify-center w-24 h-fit '>
            <div onClick={() => setEditTimetable(true)} className='my-1 bg-ek-blue-75 flex items-center justify-center cursor-pointer text-white h-10 w-10 rounded-full hover:rotate-12'><BiEdit size={23} /></div>
            <div onClick={deleteTimetable} className='my-1 bg-delete-red flex items-center justify-center cursor-pointer text-white h-10 w-10 rounded-full hover:rotate-12'><MdOutlineDelete size={23} /></div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default TimetableView
