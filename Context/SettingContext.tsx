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

    const updateSettings = () => {

    }
    const newTerm = ({ newTermData }: any) => {

    }
    const getTerms = () => {

    }

    return (
        <SettingContext.Provider value={{ getTerms, newTerm, updateSettings }}>
            {children}
        </SettingContext.Provider>
    );
}
