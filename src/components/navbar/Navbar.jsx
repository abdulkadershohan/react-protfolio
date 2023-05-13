import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import MenuIcon from "../../assets/svg/MenuIcon";
import { CTypography } from "../../utility";
// import Sidebar from "../sidebar/Sidebar";
const navbarData = {
    routes: [
        {
            id: 1,
            name: "home",
            path: "/",
        }, {
            id: 2,
            name: "about-me",
            path: "/about",
        },
        {
            id: 3,
            name: "portfolio",
            path: "/protfolio",
        },
        {
            id: 4,
            name: "experience",
            path: "/experience",
        },
        {
            id: 5,
            name: "education",
            path: "/education",
        },
        {
            id: 6,
            name: "contact",
            path: "/contact",
        }
    ],
    logo: logo,
    logoTitle: "Abdul Kader",
}

export default function Navbar() {
    const { routes, logo, logoTitle } = navbarData

    return (
        <Stack component="section"
            position={"sticky"}
            top={0}
            zIndex={100}
            bgcolor={"#282C33"}
        >
            <Stack component={'div'}
                className={'container'}
                position={"relative"}

            >
                <Stack
                    direction="row"
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    py={4}
                >
                    <Box
                        sx={{ flexGrow: 1, }}
                        component="div"
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                            sx={{
                                cursor: "pointer",
                            }}
                            component={Link}
                            to="/"

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
                    </Box>
                    <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Stack sx={{ display: { xs: 'none', lg: 'block' } }}
                        spacing={2}
                        direction="row"
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
                                        >#</span>
                                        <Box
                                            component="span"
                                            sx={{
                                                "&:hover": {
                                                    color: "#fff",
                                                }
                                            }}

                                        >{route.name}
                                        </Box>
                                    </NavLink>
                                )
                            })
                        }
                    </Stack>
                </Stack>
            </Stack>
            {/* <Sidebar /> */}

        </Stack>

    )
}
