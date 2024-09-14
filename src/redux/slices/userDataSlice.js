import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: '',
    token: '',
    isLoading: false
};


const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserName: (state, action) => {
            state.userName = action.payload;
        },

        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const {
    setUserName,
    setToken
} = userDataSlice.actions;

export default userDataSlice.reducer