import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:10000/";

export const userDataApi = createApi({
  reducerPath: "userDataApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: "/register",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["User"],
    }),

    loginUser: builder.mutation({
      query: (arg) => ({
        url: "/login",
        method: "POST",
        body: { userName: arg.userName, password: arg.password },
      }),
    }),
    getAllUsers: builder.query({
      query: (token) => ({
        url: "api/admin/users",
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      }),
    }),
    getNumberOfUsers: builder.query({
      query: (token) => ({
        url: "api/admin/users/count",
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      }),
    }),
    editUser: builder.mutation({
      query: ({ id, userData, token  }) => ({
        url: `api/admin/edit/${id}`,
        method: "PUT",
        body: userData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    deleteUser: builder.mutation({
      query: ({ id, token } ) => ({
        url: `api/admin/delete/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetAllUsersQuery,
  useGetNumberOfUsersQuery,
  useEditUserMutation,
  useDeleteUserMutation,
} = userDataApi;
