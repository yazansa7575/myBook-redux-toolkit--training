import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../Reducers/bookSlice";
import authSlice from "../Reducers/authSlice";
export default configureStore({
    reducer: {
        bookSlice,
        authSlice,
    }
})