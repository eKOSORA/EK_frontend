import React, { useEffect, useContext, useState } from "react";
import { getCookie } from "../utils/cookies";
import { useAuth } from "./AuthContext";

const SchoolContext = React.createContext({})

export const useSchools = () => {
    return useContext(SchoolContext)
}

const SchoolProvider = ({ children }: any) => {
    const [school, setSchool] = useState({})
    const { user }: any = useAuth()

    const registerSchool = async ({ schoolData }: any) => {

    }
    return (
        <SchoolContext.Provider value={{ registerSchool }}>
            {children}
        </SchoolContext.Provider>
    );
}
