import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/counterslice';
import userReducer from '../redux/userSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    },
})