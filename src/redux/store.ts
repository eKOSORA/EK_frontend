import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import persistReducer 'redux-persist/es/persistReducer'
import persistStorage from 'redux-persist/es/persistStore'
import userReducer from './slices/userSlice'

const persistConfig = {
    key: "root",
    storage
}
const rootReducer = combineReducers({
    userSlice: userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistReducer,
    middleware: [thunk]
})

export const persistor = persistStorage(store)
