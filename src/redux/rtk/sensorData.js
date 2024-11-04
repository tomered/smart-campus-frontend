import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://smart-campus-backend-4hd6.onrender.com/";

export const sensorsApi = createApi({
  reducerPath: "sensorsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Sensor"],
  endpoints: (builder) => ({

    // Get all locations
    getAllLocations: builder.query({
      query: () => ({
        url: "/api/locations",
        method: "GET",
      }),
      providesTags: ["Sensor"],
    }),

    // Get sensor data by location
    getSensorByLocation: builder.query({
      query: (locationId) => ({
        url: `/api/sensors/location/${locationId}`,
        method: "GET",
      }),
      providesTags: ["Sensor"],
    }),

    // Get sensor by its ID
    getSensorByID: builder.query({
      query: (sensorId) => ({
        url: `/api/sensors/${sensorId}`,
        method: "GET",
      }),
      providesTags: ["Sensor"],
    }),

    // Get all sensor data including associated information
    getAllDataSensors: builder.query({
      query: () => ({
        url: "/api/sensors/all-data",
        method: "GET",
      }),
      providesTags: ["Sensor"],
    }),
  }),
});

export const {
  useGetAllLocationsQuery,
  useGetSensorByLocationQuery,
  useGetSensorByIDQuery,
  useGetAllDataSensorsQuery,
} = sensorsApi;
