import { Toolbar } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
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
export default function Navbar({ drawerWidth, open }) {
  return (
    <Toolbar sx={[{
      display: "flex",
      width: "100%",
    }]}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="80%"
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
          // sx={{
          //   fontWeight: 800,
          //   fontSize: 16,
          //   fontFamily: 'FiraCode',

          // }}

          >
            Abdul Kader
          </CTypography>
        </Stack>
        < Stack
          direction="row"
          spacing={4}
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
      </Stack>
    </Toolbar >
  )
}
