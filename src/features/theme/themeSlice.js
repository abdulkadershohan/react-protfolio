import { createSlice } from "@reduxjs/toolkit";
// get device theme mode
const getInitialTheme = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
// -----------light-----------
// mainBgColorLight: '#e3f2fd',
// mainBgColorLight: '#bbdefb',
// mainBgColorLight: '#b39ddb',
// mainBgColorLight: '#bdbdbd',

// -----------dark-----------
// mainBgColorDark: '#282C33',
// mainBgColorDark: '#263238',
// mainBgColorDark: '#3e2723',

const initialState = {
    mode: getInitialTheme() ? "dark" : "light",
    mainBgColorDark: '#282C33',
    mainBgColorLight: '#e3f2fd',
    textDark: '#000000',
    textGray: '#212121',
    textLight: '#ABB2BF',
    textWhite: '#fff',
    color: [
        {
            id: 1,
            name: "light blue",
            mode: "light",
            mainBgColorLight: "#e3f2fd",
            bgColor: "#e3f2fd",
            textLight: "#000000",
            textWhite: "#fff"
        },
        {
            id: 2,
            name: "light blue 2",
            mode: "light",
            mainBgColorLight: "#bbdefb",
            bgColor: "#bbdefb",
            textLight: "#000000",
            textWhite: "#fff"
        },
        {
            id: 3,
            name: "light purple",
            mode: "light",
            mainBgColorLight: "#b39ddb",
            bgColor: "#b39ddb",
            textLight: "#000000",
            textWhite: "#fff"
        },
        {
            id: 4,
            name: "light gray",
            mode: "light",
            mainBgColorLight: "#bdbdbd",
            bgColor: "#bdbdbd",
            textLight: "#000000",
            textWhite: "#fff"
        },
        {
            id: 5,
            name: "dark gray",
            mode: "dark",
            mainBgColorDark: "#282C33",
            bgColor: "#282C33",
            textDark: "#000000",
            textGray: "#212121",
            textLight: "#ABB2BF",
            textWhite: "#fff"
        },
        {
            id: 6,
            name: "dark blue",
            mode: "dark",
            mainBgColorDark: "#263238",
            bgColor: "#263238",
            textDark: "#000000",
            textGray: "#212121",
            textLight: "#ABB2BF",
            textWhite: "#fff"
        },
        {
            id: 7,
            name: "dark brown",
            mode: "dark",
            mainBgColorDark: "#3e2723",
            bgColor: "#3e2723",
            textDark: "#000000",
            textGray: "#212121",
            textLight: "#ABB2BF",
            textWhite: "#fff"

        }
    ],

}
const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.mode = action.payload;
        },
        changeThemeWithColor: (state, action) => {
            state.mode = action.payload.mode;
            state.mainBgColorDark = action.payload.mainBgColorDark;
            state.mainBgColorLight = action.payload.mainBgColorLight;
            //    state.textDark = action.payload.textDark;
            //    state.textGray = action.payload.textGray;
            //  state.textLight = action.payload.textLight;
            // state.textWhite = action.payload.textWhite;
        }
    },
});
export default themeSlice.reducer;
export const { changeTheme, changeThemeWithColor } = themeSlice.actions;