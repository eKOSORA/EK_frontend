import React, { useState } from "react";
import jwtdecode from "jwt-decode";
import { deleteAllCookies, getCookie } from "../utils/cookies";


let AuthContext = React.createContext({});

export const useAuth = () => {
    return React.useContext(AuthContext);
};

export default function AuthProvider({ children }: any) {
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


    const login = ({ loginData }: any) => {

    }

    React.useEffect(() => {
        decodeToken();
    }, []);

    let value = { user, setUser, getUserById, login };

    return (
        <>
            {(
                <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
            )}
        </>
    );
}

