import React, { useEffect, useContext, useState } from "react";
import { getCookie } from "../utils/cookies";
import { useAuth } from "./AuthContext";
import axios from 'axios'
import { useRouter } from "next/router";

const SchoolContext = React.createContext({})

export const useSchools = () => {
    return useContext(SchoolContext)
}

export const SchoolProvider = ({ children }: any) => {
    const [school, setSchool] = useState({})
    const baseURL = 'https://ekosora-backend.cyclic.app'
    const registerSchool = async ({ formData }: any) => {
        const data = await axios.post(`${baseURL}/auth/signup`, formData)
        //console.log("This element wants to cause problems",data.data)
    }


    return (
        <SchoolContext.Provider value={{ registerSchool }}>
            {children}
        </SchoolContext.Provider>
    );
}
