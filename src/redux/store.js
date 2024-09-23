import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./slices/userDataSlice";
import { userDataApi } from "./rtk/userData";
import { adminUsersApi } from "./rtk/adminUsersApi";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    [userDataApi.reducerPath]: userDataApi.reducer,
    [adminUsersApi.reducerPath]: adminUsersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userDataApi.middleware,
      adminUsersApi.middleware
    ),
});
