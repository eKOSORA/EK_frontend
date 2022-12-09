import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import userReducer from './slices/userSlice'
import studentReducer from './slices/studentSlice'
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: "root",
    storage
}
const rootReducer = combineReducers({
    userSlice: userReducer,
    studentSlice: studentReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)
