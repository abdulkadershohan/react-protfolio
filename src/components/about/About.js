import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import photo from "../../assets/images/about-me.png";
import photo from "../../assets/images/hero5.jpg";
import { CButton, CTypography } from "../../utility";

const aboutData = [
    {
        id: 1,
        text: `HI! I'm MD. Abdul Kader. I'm a Frontend Engineer. I'm passionate about building scalable and maintainable web applications. Currently I'm working as a Frontend Engineer at RBS Tech LTD. I'm also a part time freelancer. I love to learn new things and share my knowledge with others.`

    },
    {
        id: 2,
        text: ` Mobile app development is my another passion.React and React Native are my favorite JavaScript libraries. I'm also a big fan of Node.js and Express.js. In future I want to be a Full Stack Developer.`
    }
]
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
                        {
                            aboutData.map((item) => (
                                <CTypography
                                    color="#ABB2BF"
                                    fontWeight={400}
                                    fontSize={16}
                                    key={item.id}
                                >{item.text}</CTypography>
                            ))
                        }

                        <Box
                            display="flex"
                            gap={2}
                        >
                            <CButton
                                btnTitle="Viwe all =>"
                                component={Link}
                                to="/about"

                            />
                            {/* <Box
                                component={"a"}
                                href={item.link}
                                target="_blank"
                            >

                            </Box> */}
                            <CButton
                                btnTitle="Download CV"
                                component={"a"}
                                target="_blank"
                                href='https://www.overleaf.com/read/xhbzrbckykqj'
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