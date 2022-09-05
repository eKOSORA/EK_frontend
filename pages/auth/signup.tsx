import { NextPage } from 'next'
import React, { useState } from 'react'

const signup: NextPage = () => {
    const [active, setActive] = useState('parent')
    const [formData, setFormData] = useState({
        code: '',
        phoneNumber: null,
        password: ''
    })

    return (
        <div></div>
    )
}

export default signup
