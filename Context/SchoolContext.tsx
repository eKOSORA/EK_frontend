import React, { useEffect, useContext, useState } from "react";
import { getCookie } from "../utils/cookies";
import { useAuth } from "./AuthContext";
import axios from 'axios'

const SchoolContext = React.createContext({})

export const useSchools = () => {
    return useContext(SchoolContext)
}

export const SchoolProvider = ({ children }: any) => {
    const [school, setSchool] = useState({})

    const registerSchool = async ({ schoolData }: any) => {
        const data = await axios.post('https://ekosora-backend.cyclic.app', schoolData)
        console.log(data)
    }
    return (
        <SchoolContext.Provider value={{ registerSchool }}>
            {children}
        </SchoolContext.Provider>
    );
}
