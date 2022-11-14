import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import { Box, Stack } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import discord from '../../assets/Icon/discord.svg';
import email from '../../assets/Icon/email.svg';
import github from '../../assets/Icon/github.svg';
import logo from "../../assets/images/logo.png";
import { CTypography } from "../../utility";
const routes = [
    {
        id: 1,
        name: "Home",
        path: "/",
    }, {
        id: 2,
        name: "About",
        path: "/about",
    },
    {
        id: 3,
        name: "portfolio",
        path: "/portfolio",
    },
    {
        id: 4,
        name: "Skills",
        path: "/skills",
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact",
    }
]
export default function DashboardDrawer({ children }) {
    const [toggle, setToggle] = React.useState(false);
    const list = (anchor) => (
        <Box
            sx={{
                width: 200,
                zIndex: 9999,
                //mt: 8,
                p: 2,
                position: 'relative',
                backgroundColor: "#282C33",
                height: "calc(100vh)",
            }}
            role="presentation"

        >
            < Stack
                spacing={4}
                px={2}
            >
                {
                    routes.map((route, index) => {
                        return (
                            <NavLink
                                to={route.path}
                                key={index}
                                style={({ isActive }) => (isActive ?
                                    {
                                        // borderRight: "4px solid white",
                                        // background: "rgb(45, 51, 89)"
                                        color: "#fff",
                                        fontFamily: "FiraCode",
                                        fontWeight: 600,

                                    }
                                    : {
                                        color: "#ABB2BF",
                                        fontFamily: "FiraCode",
                                        fontWeight: 400,

                                    })}
                            >
                                <span
                                    style={{
                                        color: "#C778DD"
                                    }}
                                >
                                    #
                                </span>
                                {route.name}
                            </NavLink>
                        )
                    })
                }
            </Stack>

        </Box >
    );
    const AppBar = () => {
        return (
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    p: { xs: 2, lg: 4 },
                    px: { xs: 2, lg: 12 }
                }}

            >
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{
                        width: "100%",
                        justifyContent: { xs: "space-between", lg: "flex-start" },
                    }}

                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{
                            cursor: "pointer",
                        }}
                    >
                        <img src={logo} alt="logo"
                            style={{ width: 15, height: 15 }}
                        />
                        <CTypography
                            fontSize="1rem"
                        >
                            Abdul Kader
                        </CTypography>
                    </Stack>
                    <Stack
                        sx={{
                            display: { sx: 'flex', lg: "none" },
                        }}
                    >
                        <MenuIcon
                            sx={{
                                color: "#D9D9D9",
                                cursor: "pointer",
                            }}
                            onClick={() => setToggle(!toggle)}
                        />
                    </Stack>

                </Stack>

                < Stack
                    direction="row"
                    spacing={4}
                    sx={{
                        display: { xs: "none", lg: "flex" },
                    }}
                >
                    {
                        routes.map((route, index) => {
                            return (
                                <NavLink
                                    to={route.path}
                                    key={index}
                                    style={({ isActive }) => (isActive ?
                                        {
                                            // borderRight: "4px solid white",
                                            // background: "rgb(45, 51, 89)"
                                            color: "#fff",
                                            fontFamily: "FiraCode",
                                            fontWeight: 600,

                                        }
                                        : {
                                            color: "#ABB2BF",
                                            fontFamily: "FiraCode",
                                            fontWeight: 400,

                                        })}
                                >
                                    <span
                                        style={{
                                            color: "#C778DD"
                                        }}
                                    >
                                        #
                                    </span>
                                    {route.name}
                                </NavLink>
                            )
                        })
                    }
                </Stack>
                <Box >
                    {["left"].map((anchor) => (
                        <React.Fragment key={anchor}
                            sx={{
                                backgroundColor: "#282C33",
                            }}
                        >
                            <Drawer
                                anchor={anchor}
                                open={toggle}
                                onClose={() => {
                                    setToggle(false)
                                }}

                            >
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                </Box>
            </Stack>
        )
    }
    const SideBar = () => {
        return (
            <Box
                sx={{
                    width: "10%",
                    alignItems: "center",
                    justifyContent: "center",
                    display: { xs: 'none', lg: 'block' },

                }}

            >
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    spacing={2}
                    width="35%"
                >
                    <Box
                        sx={{
                            width: "1.5px",
                            height: 240,
                            backgroundColor: "#ABB2BF",
                        }}
                    />
                    <Stack>
                        <a href="https://discord.com/users/9548"
                            target={"_blank"} rel="noreferrer"
                        >
                            <img src={discord} alt="discord" />
                        </a>
                        <a href="https://github.com/abdulkadershohan"
                            target={"_blank"} rel="noreferrer"
                        >
                            <img src={github} alt="github" />

                        </a>
                        <a href="mailto: abdulkadirshohan@gmail.com"
                            target={"_blank"} rel="noreferrer"
                        >
                            <img src={email} alt="email" />
                        </a>
                    </Stack>

                </Stack>
            </Box>
        )
    }
    return (
        <div>
            <AppBar />
            <SideBar />
            <main>{children}</main>
        </div>
    )
}
