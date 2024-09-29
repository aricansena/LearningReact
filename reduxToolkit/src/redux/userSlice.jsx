import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    users: [],
    loading: false
}
// const fetchUserById = createAsyncThunk(
//     'users/fetchByIdStatus',
//     async (userId: number, thunkAPI) => {
//         const response = await userAPI.fetchById(userId)
//         return response.data
//     },
// )

export const getAllUsers = createAsyncThunk('users', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //Http isteği olmaz ise kullanılır.
    },
    extraReducers: (builder) => {
        //Http isteklerinde kullanılır.
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            // Add user to the state array
            state.users = action.payload;
        })
    }
})

export const { } = userSlice.actions

export default userSlice.reducer