
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseUrl = 'https://smart-campus-backend-4hd6.onrender.com/'

export const userDataApi = createApi({
    reducerPath: 'userDataApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        registerUser: builder.query({
            query: (newUser) => ({
                url: `/register`,
                method: 'POST',
                body: newUser
            })

        }),
        getUserData: builder.query({
            query: (arg) => ({
                url: '/login',
                method: 'POST',
                body:{userName: arg.userName, password: arg.password}
            })

        })
    })
})