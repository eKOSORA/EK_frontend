import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useContext, useState } from "react";
import { getCookie } from "../utils/cookies";
import { useAuth } from "./AuthContext";

const AnnouncementContext = React.createContext({})

export const useAnnouncements = () => {
    return useContext(AnnouncementContext)
}

export const AnnouncementProvider = ({ children }: any) => {
    const [school, setAnnouncement] = useState({})
    const { user }: any = useAuth()
    const baseURL = 'https://ekosora-backend.cyclic.app'
    const getAllAnnouncements = async () => {
        try {
            const data = await axios.get(`${baseURL}/announcement/getAll`)
            return data
        } catch (error) {
            //console.log("Fetch error")
            //console.log(error)
            return
        }
    }
    const newAnnouncement = async ({ announcementData }: any) => {
        try {
            const data = await axios.post(`${baseURL}/announcement/new`, announcementData)
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
        <AnnouncementContext.Provider value={{ getAllAnnouncements, newAnnouncement }}>
            {children}
        </AnnouncementContext.Provider>
    );
}
