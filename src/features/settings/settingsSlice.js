import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        level: 0
    },
    reducers: {
        setLevel: (state, action) => {
            state.level = action.payload;
        }
    }
});
export const { setLevel } = settingsSlice.actions

export default settingsSlice.reducer