import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { islogin: false, name: "ysazan sawan" },
    reducers: {
        islogInOut: (state, action) => {
            state.islogin = !state.islogin
            state.name = state.name
        }
    },
})

export const { islogInOut } = authSlice.actions;
export default authSlice.reducer