import { createSlice } from "@reduxjs/toolkit";
// get device theme mode
const getInitialTheme = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const initialState = {
    mode: getInitialTheme() ? "dark" : "light",
    textDark: '#000000',
    textLight: '#ffffff',
    dark: '#000000',
    light: '#ffffff',
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