import { NextPage } from 'next'
import React, { useEffect } from 'react'

const login: NextPage = () => {
    useEffect(() => {
        document.title = 'Login | eKosora'
    }, [])
    return (
        <div>login</div>
    )
}

export default login
