import { createSlice } from "@reduxjs/toolkit";
// get device theme mode
const getInitialTheme = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const initialState = {
    mode: getInitialTheme() ? "dark" : "light",
    mainBgColorDark: '#282C33',
    mainBgColorLight: '#ffffff',
    textDark: '#000000',
    textGray: '#212121',
    textLight: '#ABB2BF',
    textWhite: '#fff',
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