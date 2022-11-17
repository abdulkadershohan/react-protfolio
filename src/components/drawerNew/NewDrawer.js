import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import { Stack } from '@mui/system';
import * as React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import { CTypography } from '../../utility';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';

const drawerWidth = 240;
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

function DrawerAppBar(props, { children }) {
    const { routes, logo, logoTitle } = navbarData
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{
            textAlign: 'center',
            backgroundColor: '#282C33',
        }}>
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
                <CTypography>
                    {logoTitle}
                </CTypography>
            </Stack>
            {/* <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
                component="a"
                href="#"
                sx={{
                    cursor: "pointer",
                }}
                py={2}
            >
                <img src={logo} alt="logo"
                    style={{ width: 15, height: 15 }}
                />
                <CTypography
                    fontSize="1rem"
                >
                    Abdul Kader
                </CTypography>
            </Stack> */}
            {/* <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography> */}
            <Divider />
            <List>
                {routes.map((item) => (
                    <ListItem key={Math.random()} disablePadding>
                        <ListItemButton sx={{
                            textAlign: 'center',
                            fontSize: '1.2rem',
                        }}>
                            {/* <ListItemText primary={item.name}
                                component={NavLink}
                                to={item.path}

                            /> */}
                            <NavLink
                                to={item.path}
                                key={item.id}
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
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
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
                        md: 8,
                        xs: 0,
                    },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
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
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
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
                    <Stack sx={{ display: { xs: 'none', sm: 'block' } }}
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
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },


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
                p: 3,
                backgroundColor: '#282C33',
                width: '100%',

            }}>
                <Toolbar />
                <Box
                    sx={{
                        pl: 8,
                    }}
                >
                    <Outlet />
                    {children}

                </Box>
                <Footer />
            </Box>
        </Box >
    );
}


export default DrawerAppBar;
