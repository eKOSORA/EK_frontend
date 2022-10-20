import React from 'react'
import { TimeTableViewObject } from '../../../pages/interfaces/timetables'

interface Props {
  activeTimetable: TimeTableViewObject
  setViewTimetable: Function
  setEditTimetable: Function
}

const EditTimetableView: React.FC<Props> = ({ activeTimetable, setEditTimetable, setViewTimetable }) => {
  return (
    <div>EditTimetableView</div>
  )
}

export default EditTimetableView
