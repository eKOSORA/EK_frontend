import React, { useContext, useState } from "react";
import axios, { AxiosResponse } from 'axios'
import { useRouter } from "next/router";

const SchoolContext = React.createContext({})

export const useSchools = () => {
    return useContext(SchoolContext)
}

export const SchoolProvider = ({ children }: any) => {
    const [school, setSchool] = useState({})
    const baseURL = process.env.NEXT_PUBLIC_SERVER_URL
const router = useRouter()
    const registerSchool = async ({ formData }: any) => {
        try {
            console.log(baseURL)
            delete formData.logoImagePreviewStr
            console.log(formData)
            const data = await axios.post(`${baseURL}/auth/signup`, formData, { headers: { 'Content-Type': 'application/json' } })
            console.log(data)
            if(data.data?.code === "#Success" && data.statusText==="Created") router.push('/admin')
            return data
        } catch (error: AxiosResponse | any) {
            console.log(error.response)
            return error
        }
    }


    return (
        <SchoolContext.Provider value={{ registerSchool }}>
            {children}
        </SchoolContext.Provider>
    );
}
