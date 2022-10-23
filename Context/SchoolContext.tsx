import React, { useEffect, useContext, useState } from "react";
import { getCookie } from "../utils/cookies";
import { useAuth } from "./AuthContext";
import axios, { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from "next/router";

const SchoolContext = React.createContext({})

export const useSchools = () => {
    return useContext(SchoolContext)
}

export const SchoolProvider = ({ children }: any) => {
    const [school, setSchool] = useState({})
    const baseURL = process.env.NEXT_PUBLIC_SERVER_URL
    const registerSchool = async ({ formData }: any) => {
        try {
            delete formData.logoImagePreviewStr
            console.log(formData)
            const data = await axios.post(`${baseURL}/auth/signup`, formData, { headers: { 'Content-Type': 'application/json' } })
        } catch (error: AxiosResponse | any) {
            console.log(error.response)
        }
    }


    return (
        <SchoolContext.Provider value={{ registerSchool }}>
            {children}
        </SchoolContext.Provider>
    );
}
