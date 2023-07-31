import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { Container, Stack } from '@mui/system';
import * as React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import { CTypography } from '../../utility';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';

const drawerWidth = 50;
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
            name: "certification",
            path: "/certification",

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

function DrawerAppBar(props, { children }) {
    const { routes, logo, logoTitle } = navbarData
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{
                textAlign: 'center',
                backgroundColor: '#282C33',
            }}>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
                spacing={1}
                sx={{
                    cursor: "pointer",
                }}
                component={Link}
                to="/"
                py={4}
            >
                <img src={logo} alt="logo"
                    style={{ width: 15, height: 15 }}
                />
                <CTypography>
                    {logoTitle}
                </CTypography>
            </Stack>

            <Divider />
            <Stack
                gap={2}
                fontSize="1.2rem"
                textAlign={"left"}
                py={1}
            >
                {routes.map((item) => (

                    <NavLink
                        to={item.path}
                        key={item.id}
                        style={({ isActive }) => (isActive ?
                            {
                                borderRight: "4px solid #fff",
                                background: "rgb(45, 51, 89)",
                                color: "#fff",
                                fontFamily: "FiraCode",
                                fontWeight: 600,
                                padding: "0.5rem 1rem",
                            }
                            : {
                                color: "#ABB2BF",
                                fontFamily: "FiraCode",
                                fontWeight: 400,
                                padding: "0.5rem 1rem",

                            })}
                        className='drawer-link'
                    >
                        <span
                            style={{
                                color: "#C778DD"
                            }}
                        >
                            #
                        </span>
                        <Box
                            component="span"
                            sx={{
                                "&:hover": {
                                    color: "#fff",
                                }
                            }}

                        >{item.name}
                        </Box>
                    </NavLink>
                ))}
            </Stack>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{
            display: 'flex',
        }}>
            <AppBar component="nav"
                sx={{
                    backgroundColor: '#282C33',
                    boxShadow: 'none',
                    pl: {
                        md: 7,
                        xs: 0,
                    },
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography> */}
                        <Box
                            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
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
                        <Stack sx={{ display: { xs: 'none', md: 'block' } }}
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

                    </Toolbar>
                </Container>
            </AppBar>

            <Box component="nav" >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    PaperProps={{
                        sx: {
                            backgroundColor: '#282C33',
                        }
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: `${drawerWidth}%` },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                sx={{
                    position: "fixed",
                    top: 50,
                    left: 20,
                }}
            >
                <Sidebar />
            </Box>
            <Box component="main" sx={{
                p: 2,
                pr: 3,
                backgroundColor: '#282C33',
                width: '100%',

            }}>
                <Toolbar />
                <Box
                    sx={{
                        pl: {
                            xs: 4,
                            md: 8,
                        }
                    }}
                >
                    <Outlet />
                    {children}

                </Box>
                <Stack
                    sx={{
                        pl: {
                            xs: 4,
                            md: 8,
                        }
                    }}
                >
                    <Footer />
                </Stack>
            </Box>
        </Box >
    );
}


export default DrawerAppBar;
