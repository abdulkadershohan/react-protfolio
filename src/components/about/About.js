import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import photo from "../../assets/images/about-me.png";
import photo from "../../assets/images/hero5.jpg";
import { CButton, CTypography } from "../../utility";

export default function About() {
    const Header = () => {
        return (
            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
            //  pt={8}
            >
                <CTypography
                    text='#'
                    color='#C778DD'
                    fontWeight={500}
                    fontSize={32}
                >
                    <span style={{ color: '#FFFFFF' }}>
                        About
                    </span>

                </CTypography>
                <Box
                    sx={{
                        width: {
                            xs: '10px', sm: '40px',
                            md: '60px', lg: '100px',
                        },
                        height: '1.5px',
                        backgroundColor: '#C778DD',
                    }}
                />
            </Stack>
        )
    }
    return (
        <Stack>
            <Grid container spacing={2}
                sx={{
                    alignItems: 'center',
                }}
            >
                <Grid item xs={12} md={6}  >
                    <Header />
                    <Stack
                        spacing={3}
                        py={8}
                    >
                        <CTypography
                            color="#ABB2BF"
                            fontWeight={400}
                            fontSize={16}
                        >
                            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                        </CTypography>
                        <CTypography
                            color="#ABB2BF"
                            fontWeight={400}
                            fontSize={16}
                        >
                            Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                        </CTypography>
                        <Box
                            display="flex"
                            gap={2}
                        >
                            <CButton
                                btnTitle="Viwe all =>"
                                component={Link}
                                to="/about"

                            />
                            <CButton
                                btnTitle="Download CV"
                            />
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}  >
                    <Stack
                        alignItems="center"
                    // sx={{
                    //     p: 20,

                    // }}
                    >
                        <Box
                            component="img"
                            src={photo}
                            alt="hero"
                            sx={{
                                width: {
                                    xs: '100%', sm: '100%',
                                    md: '100%', lg: '60%',
                                },
                                height: {
                                    xs: 'auto', sm: 'auto',
                                    md: 'auto', lg: 'auto',
                                },
                            }}
                        />
                    </Stack>
                </Grid>
            </Grid>
        </Stack >
    )
}
