import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { Stack } from '@mui/system';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import LogoImg from '../../assets/svg/LogoImg';
import SunIcon from '../../assets/svg/SunIcon';
import { changeTheme } from '../../features/theme/themeSlice';
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
    const { mode, color } = useSelector(state => state.theme)
    console.log(mode)
    const isDark = Boolean(mode === 'dark')
    const dispatch = useDispatch()
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
                backgroundColor: isDark ? process.env.REACT_APP_BACKGROUND_COLOR_DARK_MODE : process.env.REACT_APP_BACKGROUND_COLOR_LIGHT_MODE,
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
                <LogoImg
                    iconColor={isDark ? process.env.REACT_APP_TEXT_COLOR_DARK_MODE : process.env.REACT_APP_TEXT_COLOR_LIGHT_MODE}
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
                                background: isDark ? '#1E1E1E' : '#282C33',
                                color: '#fff',
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
                                    color: '#fff'
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
                    backgroundColor: isDark ? process.env.REACT_APP_BACKGROUND_COLOR_DARK_MODE : process.env.REACT_APP_BACKGROUND_COLOR_LIGHT_MODE,
                    boxShadow: 'none',
                    pl: {
                        md: 7,
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
                            {/* <img src={logo} alt="logo"
                                style={{ width: 15, height: 15 }}
                            /> */}
                            <LogoImg
                                iconColor={isDark ? process.env.REACT_APP_TEXT_COLOR_DARK_MODE : process.env.REACT_APP_TEXT_COLOR_LIGHT_MODE}
                            />
                            <CTypography
                                fontSize="1rem"
                                color={isDark ? process.env.REACT_APP_TEXT_COLOR_DARK_MODE : process.env.REACT_APP_TEXT_COLOR_LIGHT_MODE}

                            >
                                Abdul Kader
                            </CTypography>
                        </Stack>
                    </Box>
                    <Stack sx={{ display: { xs: 'none', md: 'block' } }}
                        spacing={2}
                        direction="row"
                    >
                        <IconButton
                            color='primary'
                            onClick={() => {
                                if (isDark) {
                                    dispatch(changeTheme('light'))
                                }
                                else {
                                    dispatch(changeTheme('dark'))
                                }
                            }}

                        >
                            <SunIcon
                                iconColor={isDark ? '#fff' : '#000'}
                            />
                        </IconButton>
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
                                                color: isDark ? process.env.REACT_APP_TEXT_COLOR_DARK_MODE : process.env.REACT_APP_TEXT_COLOR_LIGHT_MODE,
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
                                                    color: isDark ? process.env.REACT_APP_TEXT_COLOR_DARK_MODE : process.env.REACT_APP_TEXT_COLOR_LIGHT_MODE,
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
                            backgroundColor: isDark ? process.env.REACT_APP_BACKGROUND_COLOR_DARK_MODE : process.env.REACT_APP_BACKGROUND_COLOR_LIGHT_MODE,
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
                backgroundColor: isDark ? process.env.REACT_APP_BACKGROUND_COLOR_DARK_MODE : process.env.REACT_APP_BACKGROUND_COLOR_LIGHT_MODE,
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
                <Footer />
            </Box>
        </Box >
    );
}


export default DrawerAppBar;
