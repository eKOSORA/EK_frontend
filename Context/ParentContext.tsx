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
    const registerParent = async ({ parentData }: any) => {

    }
    const getInfo = async (parentID: string) => {

    }
    return (
        <ParentContext.Provider value={{ registerParent }}>
            {children}
        </ParentContext.Provider>
    );
}
