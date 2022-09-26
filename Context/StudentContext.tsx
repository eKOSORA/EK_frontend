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

    const getAll = async () => {

    }
    const registerStudent = async ({ studentData }: any) => {

    }
    const editStudent = async ({ newStudentData, studentID, parentEmails, email }: any) => {

    }

    const addRecord = async ({ recordData }: any) => {

    }

    const updateMark = async ({ studentId, recordId, mark, remark }: any) => {

    }

    const getRecords = ({ _class, _year }: any) => {

    }

    return (
        <StudentContext.Provider value={{ registerStudent }}>
            {children}
        </StudentContext.Provider>
    );
}
