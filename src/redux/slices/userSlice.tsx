import { createSlice } from '@reduxjs/toolkit'
import { UserObject } from '../../types/user'

const initialState: {
    user: any,
    isLoggedIn: boolean
} = {
    user: {},
    isLoggedIn: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.isLoggedIn = true
            state.user = { ...payload }
        },
        logout: (state) => {
            state.isLoggedIn = false
            state.user = {}
        },
        update: (state, { payload }) => {
            state = payload
        }
    }
})

export const { login, logout, update } = userSlice.actions

export default userSlice.reducer
