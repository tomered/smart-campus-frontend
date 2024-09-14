import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 

const baseUrl = 'https://smart-campus-backend-4hd6.onrender.com/';

export const userDataApi = createApi({
  reducerPath: 'userDataApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: '/register',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['User'],
    }),
    
    loginUser: builder.mutation({
      query: (arg) => ({
        url: '/login',
        method: 'POST',
        body: { userName: arg.userName, password: arg.password },
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = userDataApi;