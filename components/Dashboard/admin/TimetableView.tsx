import Image from 'next/image'
import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { MdOutlineDelete } from 'react-icons/md'
import { TimeTableViewObject } from '../../../pages/interfaces/timetables'

interface Props {
  activeTimetable: TimeTableViewObject
  setViewTimetable: Function
  setEditTimetable: Function
}

// const TimetableView: React.FC<Props> = ({ activeTimetable }) => {
const TimetableView = (props: Props) => {

  return (
    <div className='z-[4] w-screen h-screen flex items-center justify-center absolute bg-black/70'>
      <div className='w-full z-[5] h-full absolute' onClick={() => props.setViewTimetable(false)}></div>
      <div className='bg-white z-[6] h-4/5 w-2/3 rounded flex flex-col p-10'>
        <span className='w-full text-ek-blue-50 text-3xl heading-text'>{props.activeTimetable.name}</span>
        <span className='my-3 text-base text-ek-blue-50'>{props.activeTimetable.lastEdited}</span>
        <div className='relative flex items-center justify-between mt-4 h-4/5 image-holder w-full'>
          <div className="absolute w-10/12 m-auto h-full">
            <Image layout='fill' src={props.activeTimetable.imageUrl} alt={`${props.activeTimetable.name}-image`} />
          </div>
          <div className='absolute  right-4 bottom-auto flex flex-col  items-center justify-center w-24 h-fit '>
            <div className='my-1 bg-ek-blue-75 flex items-center justify-center cursor-pointer text-white h-12 w-12 rounded-full hover:rotate-12'><BiEdit size={23} /></div>
            <div className='my-1 bg-delete-red flex items-center justify-center cursor-pointer text-white h-12 w-12 rounded-full hover:rotate-12'><MdOutlineDelete size={23} /></div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default TimetableView
