import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 

export const adminUsersApi = createApi({
    reducerPath: "adminUsersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:10000/api/" }),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => "admin/users",
        }),
        editUser: builder.mutation({
            query: ({ id, userData }) => ({
                url: `admin/edit/${id}`,
                method: 'PUT',
                body: userData,
            }),
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `admin/delete/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useGetAllUsersQuery, useEditUserMutation, useDeleteUserMutation  } = adminUsersApi;
