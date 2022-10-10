import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useContext, useState } from "react";
import { getCookie } from "../utils/cookies";
import { useAuth } from "./AuthContext";

const SettingContext = React.createContext({})

export const useSettings = () => {
    return useContext(SettingContext)
}

const SettingProvider = ({ children }: any) => {
    const [school, setSchool] = useState({})
    const { user }: any = useAuth()
    const baseURL = 'https://ekosora-backend.cyclic.app'
    const updateSettings = async ({ newSettings }: any) => {
        try {
            const data = await axios.post(`${baseURL}/settings/newTerm`, newSettings)
            return data
        } catch (error) {
            //console.log("Fetch error")
            //console.log(error)
            return
        }
    }
    const newTerm = async ({ newTermData }: any) => {
        try {
            const data = await axios.post(`${baseURL}/settings/newTerm`, newTermData)
            return data
        } catch (error) {
            //console.log("Fetch error")
            //console.log(error)
            return
        }
    }
    const getTerms = async () => {
        try {
            const data = await axios.get(`${baseURL}/settings/newTerm`)
            return data
        } catch (error) {
            //console.log("Fetch error")
            //console.log(error)
            return
        }
    }

    const updateProfile = async ({ newProfileData }: any) => {
        try {
            const data = await axios.post(`${baseURL}/settings/updateProfile`, newProfileData)
            return data
        } catch (error) {
            //console.log("Fetch error")
            //console.log(error)
            return
        }
    }
    const router = useRouter()
    useEffect(() => {
        if (!user) router.push('/auth/login')
    }, [router, user])

    return (
        <SettingContext.Provider value={{ updateProfile, getTerms, newTerm, updateSettings }}>
            {children}
        </SettingContext.Provider>
    );
}
