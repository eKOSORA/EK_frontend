import Image from 'next/image'
import React from 'react'

const NotFound = () => {
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <div className='w-1/2 h-1/2'>
                <Image src={'/img/404.svg'} width={500} height={500} className='w-1/2' alt="Page not found image"></Image>
            </div>
            <span className='text-3xl text-ek-blue-50'>404 Page Not Found</span>
        </div>
    )
}

export default NotFound
