import React, { useEffect, useContext, useState } from "react";
import { getCookie } from "../utils/cookies";
import { useAuth } from "./AuthContext";

const EducatorContext = React.createContext({})

export const useEducators = () => {
    return useContext(EducatorContext)
}

const EducatorProvider = ({ children }: any) => {
    const [school, setEducator] = useState({})
    const { user }: any = useAuth()

    const addEducator = ({ educatorData }: any) => {

    }
    const getAllEducators = () => {

    }
    const editEducator = () => {

    }
    return (
        <EducatorContext.Provider value={{ addEducator, getAllEducators, editEducator }}>
            {children}
        </EducatorContext.Provider>
    );
}
