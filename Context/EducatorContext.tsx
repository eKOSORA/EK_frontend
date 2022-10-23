import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useContext, useState } from "react";
import { getCookie } from "../utils/cookies";
import { useAuth } from "./AuthContext";
import { useSchools } from "./SchoolContext";

const EducatorContext = React.createContext({})

export const useEducators = () => {
    return useContext(EducatorContext)
}

export const EducatorProvider = ({ children }: any) => {
    const { school }: any = useSchools()
    const { user }: any = useAuth()
    const baseURL = process.env.NEXT_PUBLIC_SERVER_URL
    const addEducator = async ({ educatorData }: any) => {
        try {
            const data = await axios.post(`${baseURL}/educator/add`, educatorData)
            return data
        } catch (error) {
            //console.log("Fetch error")
            //console.log(error)
            return
        }
    }
    const getAllEducators = async () => {
        try {
            const data = await axios.get(`${baseURL}/educator/getAll`)
            return data
        } catch (error) {
            //console.log("Fetch error")
            //console.log(error)
            return
        }
    }
    const editEducator = async ({ educatorData }: any) => {
        try {
            const data = await axios.get(`${baseURL}/educator/getAll`, educatorData)
            return data
        } catch (error) {
            //console.log("Fetch error")
            //console.log(error)
            return
        }
    }

    const router = useRouter()

    return (
        <EducatorContext.Provider value={{ addEducator, getAllEducators, editEducator }}>
            {children}
        </EducatorContext.Provider>
    );
}
