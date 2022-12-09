import { createSlice, TaskAbortError } from '@reduxjs/toolkit'
import { UserObject } from '../../types/user'

const initialState: {
    students:Array<any>
} = {
    students:[]
}

const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        setStudents: (state, { payload }) => {
            state.students=payload
        },
        clearStudents: (state) => {
            state.students = []
        }
    }
})

export const { setStudents,clearStudents } = studentSlice.actions

export default studentSlice.reducer
