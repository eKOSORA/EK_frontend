import React from 'react'
import { useDrag } from 'react-dnd';
import { LessonObject } from '../../../utils/interfaces/timetables';

interface Props {
    lesson: LessonObject
}

const LessonBox: React.FC<Props> = ({ lesson }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "lesson",
        item: { id: lesson.id },
        collect: (monitor: any) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div itemType='lesson' title={lesson.name} ref={drag} className={`w-11/12 hover:cursor-move select-none login-options px-6 py-3 my-1 mx-2 text-center rounded heading-text ${isDragging ? 'bg-ek-blue text-white' : 'bg-ek-blue-50/10 text-ek-blue-50 '}`}>{lesson.initial}</div>
    )
}

export default LessonBox
