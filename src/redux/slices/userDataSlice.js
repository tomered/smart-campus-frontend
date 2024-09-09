import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    phone: '',
    password: '',
    role: 1, //QUESTION: do i need this here?
    isLoading: false
};


const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
        setPhone: (state, action) => {
            state.phone = action.payload;
        },
        //QUESTION: does this function makes sense if the password needs to be hashed and salted?
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        //QUESTION: is it ok if only the admin can change roles?
        setRole: (state, action) => {
            state.role = action.payload
        }
    },

});

export const {
    setUserId,
    setFirstName,
    setLastName,
    setEmail,
    setUserName,
    setPhone,
    setPassword,
    setRole,

} = userDataSlice.actions;

export default userDataSlice.reducer