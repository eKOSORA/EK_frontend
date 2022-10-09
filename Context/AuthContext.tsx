import React, { useEffect, useState } from "react";
import jwtdecode from "jwt-decode";
import { deleteAllCookies, getCookie } from "../utils/cookies";
import axios from "axios";
import { useRouter } from "next/router";


let AuthContext = React.createContext({});

export const useAuth = () => {
    return React.useContext(AuthContext);
};


export default function AuthProvider({ children }: any) {

    const router = useRouter()

    let [user, setUser] = useState({});
    const baseURL = 'https://ekosora-backend.cyclic.app'
    const decodeToken = async () => {
        const token = getCookie("token");
        if (token) {
            try {
                const userDetails: any = await jwtdecode(token);
                console.log(userDetails);
                const userd: any = await getUserById(userDetails.userid);
                return setUser(userd);
            } catch (err) {
                console.log(err);
                return setUser({});
            }
        }
        return setUser({});
    };

    const getUserById = async (id: string) => {
        try {

            return {}
        } catch (error) {
            console.log(error);
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
        if (!user) router.push('/auth/login')
        decodeToken();
    }, []);

    let value = { user, logout, setUser, getUserById, login };

    return (
        <>
            {(
                <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
            )}
        </>
    );
}

