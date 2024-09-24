import {configureStore} from '@reduxjs/toolkit'
import userDataReducer from './slices/userDataSlice'
import { userDataApi } from './rtk/userData'

export const store = configureStore({
    reducer:{
       userData: userDataReducer,
       [userDataApi.reducerPath]: userDataApi.reducer,
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(userDataApi.middleware),
    
})