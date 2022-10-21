import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useContext, useState } from "react";
import { getCookie } from "../utils/cookies";
import { useAuth } from "./AuthContext";

const StudentContext = React.createContext({})

export const useStudents = () => {
    return useContext(StudentContext)
}

const StudentProvider = ({ children }: any) => {
    const [school, setStudent] = useState({})
    const { user }: any = useAuth()
    const baseURL = 'https://ekosora-backend.cyclic.app'
    const getAllStudents = async ({ year, className }: any) => {
        try {
            const data = await axios.get(`${baseURL}/student/getAll?year=${year}&class=${className}`)
            return data
        } catch (error) {
            //console.log("Fetch error")
            //console.log(error);
            return
        }
    }
    const registerStudent = async ({ studentData }: any) => {
        try {

            const data = await axios.post(`${baseURL}/student/add`, studentData)
            return data
        } catch (error) {
            //console.log("Fetch error")
            //console.log(error);
            return
        }
    }
    const editStudent = async ({ studentData }: any) => {
        try {

            const data = await axios.post(`${baseURL}/student/edit`, studentData)
            return data
        } catch (error) {
            //console.log("Fetch error")
            //console.log(error);
            return
        }
    }

    const addRecord = async ({ recordData }: any) => {

        try {
            const data = await axios.post(`${baseURL}/student/addRecord`, recordData)
            return data
        } catch (error) {
            //console.log("Fetch error")
            //console.log(error);
            return
        }

    }

    const updateMark = async ({ newMark }: any) => {

        try {
            const data = await axios.post(`${baseURL}/student/updateMark`, newMark)
            return data
        } catch (error) {
            //console.log("Fetch error")
            //console.log(error);
            return
        }

    }

    const getRecords = async ({ _class, _year }: any) => {
        try {
            const data = await axios.post(`${baseURL}/student/getRecords?_class=${_class}&_year=${_year}`)
            return data
        } catch (error) {
            //console.log("Fetch error")
            //console.log(error);
            return
        }
    }
    const deleteRecord = async (_id: any) => {
        try {
            const data = await axios.delete(`${baseURL}/student/deleteRecord`, { headers: {}, data: { _id } })
            return data
        } catch (error) {
            //console.log("Fetch error")
            //console.log(error);
            return
        }
    }
    const addParent = async ({ parent_email, studentId }: any) => {
        try {
            const data = await axios.post(`${baseURL}/student/addParent`, { parent_email, studentId })
            return data;
        } catch (error) {
            //console.log("Fetch error")
            //console.log(error);
            return
        }
    }

    const getSummary = async () => {
        try {
            const data = await axios.post(`${baseURL}/student/getSummary`)
            return data;
        } catch (error) {
            //console.log("Fetch error")
            //console.log(error);
            return
        }
    }

    return (
        <StudentContext.Provider value={{ registerStudent, editStudent, addParent, addRecord, deleteRecord, getAllStudents, getRecords, getSummary, updateMark }}>
            {children}
        </StudentContext.Provider>
    );
}
