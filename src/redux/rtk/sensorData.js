import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:10000/";

export const sensorsApi = createApi({
  reducerPath: "sensorsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Sensor"],
  endpoints: (builder) => ({
    // Get all sensor data including associated information
    getAllDataSensors: builder.query({
      query: () => ({
        url: "/sensorsData/all-data",
        method: "GET",
      }),
      providesTags: ["Sensor"],
    }),
    // getAllRooms: builder.query({
    //   query: () => ({
    //       url: "/sensorsData/locations",
    //       method: "GET"
    //   }),
    //   providesTags: ["Locations"]
    //})
  }),
});

export const {
  useGetAllDataSensorsQuery,
  //useGetAllRoomsQuery
} = sensorsApi;
