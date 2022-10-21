import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useContext, useState } from "react";
import { getCookie } from "../utils/cookies";
import { useAuth } from "./AuthContext";

const ParentContext = React.createContext({})

export const useParents = () => {
    return useContext(ParentContext)
}

const ParentProvider = ({ children }: any) => {
    const [school, setParent] = useState({})
    const { user }: any = useAuth()
    const baseURL = 'https://ekosora-backend.cyclic.app'
    const registerParent = async ({ parentData, studentID }: any) => {
        try {
            const data = await axios.post(`${baseURL}/parent/register?id=${studentID}`, parentData)
            return data
        } catch (error) {
            //console.log("Fetch error")
            //console.log(error)
            return
        }
    }
    const getInfo = async ({ parentId }: any) => {
        try {
            const data = await axios.post(`${baseURL}/parent/getInfo`, parentId)
            return data
        } catch (error) {
            //console.log("Fetch error")
            //console.log(error)
            return
        }
    }

    const router = useRouter()


    return (
        <ParentContext.Provider value={{ getInfo, registerParent }}>
            {children}
        </ParentContext.Provider>
    );
}
