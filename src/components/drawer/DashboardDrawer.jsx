import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { Outlet } from "react-router-dom";

const drawerWidth = 65;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function DashboardDrawer({ children }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerClose = () => {
        setOpen((prev) => !prev);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                position="fixed"
                open={open}
                sx={[
                    {
                        backgroundColor: "#282C33",
                        // backgroundColor: "#0c1433",
                        color: "white1",
                        boxShadow: "none",
                        // zIndex: theme.zIndex.drawer + 1,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        // borderBottom: "1px solid rgb(194, 231, 255) ",
                        zIndex: 555,
                        // borderBottom:"1px solid #f8f9fa " ,
                    },
                ]}
            >
                <Toolbar sx={[{ ml: 6 }]}>
                    <Typography variant="h6" color={"black"} noWrap component="div">
                        title
                    </Typography>
                </Toolbar>
                <Box sx={{ flexGrow: 1 }} />
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    zIndex: 555,
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    boxSizing: "border-box",
                    ...(open && { backgroundColor: "#282C33" }),
                    ...(!open && { backgroundColor: "#282C33" }),

                    "& .MuiDrawer-paper": {
                        // width: open ? drawerWidth : "65px",

                        width: drawerWidth,
                        boxSizing: "border-box",
                        backgroundColor: "#282C33",
                        overflow: "hidden",
                    },
                }}
                variant="permanent"
                open={open}
            >
                <DrawerHeader sx={{ backgroundColor: "#282C33" }}>
                    <IconButton>
                        {theme.direction === "rtl" && <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>

            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 0.5 }}>
                <DrawerHeader />
                <Outlet />
                {children}
            </Box>
        </Box>
    );
}
