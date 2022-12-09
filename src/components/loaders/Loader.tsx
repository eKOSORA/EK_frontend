import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'

interface Props {
    text: string
}

const Loader: React.FC<Props> = ({ text }) => {

    const [percentage, setPercentage] = useState(0)
    useEffect(() => {
        percentage === 99 ? null : setPercentage(percentage + 1)
    }, [percentage])
    return (
        <div className='absolute top-0 left-0 z-40 w-screen h-screen bg-white/90 flex flex-col items-center justify-center text-ek-blue-75'>
            <div className='flex items-center flex-col'>
                <CircularProgress className="my-2" />
                <span className="my-2">{text}</span>
                <span className="my-2">{percentage}%</span>
            </div>
        </div>
    )
}

export default Loader