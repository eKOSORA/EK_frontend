import React, { createContext, useContext, useEffect, useState } from "react";
import jwtdecode from "jwt-decode";
import { deleteAllCookies, getCookie } from "../utils/cookies";
import axios from "axios";
import { useRouter } from "next/router";
import { UserObject } from "../utils/interfaces/user";


let AuthContext = createContext({});

export const useAuth = () => {
    return useContext(AuthContext);
};


export default function AuthProvider({ children }: any) {

    const router = useRouter()

    let [user, setUser] = useState<UserObject | undefined>(undefined);
    const baseURL = process.env.SERVER_URL

    const decodeToken = async () => {
        const token = getCookie("token");
        if (token) {
            try {
                const userDetails: any = await jwtdecode(token);
                //console.log(userDetails);
                const userd: any = await getUserById(userDetails.userid);
                return setUser(userd);
            } catch (err) {
                //console.log(err);
                return setUser(undefined);
            }
        }
        return setUser(undefined);
    };

    const getUserById = async (id: string) => {
        try {

            return {}
        } catch (error) {
            //console.log(error);
            return null
        }
    };

    const logout = async () => {
        const data = await axios.get(`${baseURL}/auth/logout`)
        return data;
    }

    const login = async ({ formData }: any) => {
        const data = await axios.post(`${baseURL}/auth/login`, formData)
        return data;
    }

    useEffect(() => {
        if (router.pathname === '/auth/login' || router.pathname === '/auth/signup' || router.pathname === "/") return
        // if (!user) router.push('/auth/login')
    }, [router, user])

    let value = { user, logout, setUser, getUserById, login };

    return (
        <>
            {(
                <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
            )}
        </>
    );
}

