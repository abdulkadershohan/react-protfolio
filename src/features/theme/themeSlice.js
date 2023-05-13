import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: 'light',
}
const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.mode = action.payload;
        }
    },
});
export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;