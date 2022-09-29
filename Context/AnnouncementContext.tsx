import React, { useEffect, useContext, useState } from "react";
import { getCookie } from "../utils/cookies";
import { useAuth } from "./AuthContext";

const AnnouncementContext = React.createContext({})

export const useAnnouncements = () => {
    return useContext(AnnouncementContext)
}

const AnnouncementProvider = ({ children }: any) => {
    const [school, setAnnouncement] = useState({})
    const { user }: any = useAuth()
    const baseURL = 'https://ekosora-backend.cyclic.app'
    const getAllAnnouncements = () => {

    }
    const newAnnouncement = ({ announcementData }: any) => {

    }

    return (
        <AnnouncementContext.Provider value={{ getAllAnnouncements, newAnnouncement }}>
            {children}
        </AnnouncementContext.Provider>
    );
}
