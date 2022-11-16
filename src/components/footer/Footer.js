import { Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import discord from "../../assets/Icon/discord.svg";
import github from "../../assets/Icon/github.svg";
import linkedin from "../../assets/Icon/linkedin.svg";
import telegram from "../../assets/Icon/telegram.svg";
import twitter from "../../assets/Icon/twitter.svg";
import logo from "../../assets/images/logo.png";
import { CTypography } from "../../utility";

const socials = [
    {
        name: 'github',
        link: "https://github.com/abdulkadershohan",
        img: github
    },
    {
        name: 'linkedin',
        link: "https://www.linkedin.com/in/abdulkadershohan/",
        img: linkedin
    },
    {
        name: 'telegram',
        link: "https://t.me/Abdulkadershohan",
        img: telegram
    },
    {
        name: 'twitter',
        link: "https://twitter.com/dev_shohan",
        img: twitter
    },
    {
        name: 'discord',
        link: "https://discord.com/users/522431317447802900",
        img: discord
    }
]
const footerDiscription = `Frontend Engineer & React Native developer based in Bangladesh`
export default function Footer() {
    return (
        <Stack
            sx={{
                borderTop: '1px solid #ABB2BF',
                py: 8,
            }}
        >
            <Grid container spacing={2}
                sx={{
                    // px: {
                    //     // xs: 3, sm: 6, md: 8, lg: 20
                    //     al
                    // }

                }}
            >
                <Grid item xs={12} md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Stack
                        spacing={4}
                    >
                        <Stack
                            direction="row"
                            spacing={6}
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
                                <CTypography>
                                    Abdul Kader
                                </CTypography>
                            </Stack>
                            <CTypography
                                fontSize="16px"
                                fontWeight={400}
                                color="#ABB2BF"
                                component={"a"}
                                href="#"
                            >
                                httt://abdulkader.com
                            </CTypography>
                        </Stack>

                        <CTypography
                            fontSize="16px"
                            fontWeight={400}
                        >
                            {footerDiscription}
                        </CTypography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack
                        alignItems="center"
                        justifyContent='center'
                    >
                        <CTypography>
                            Social Media
                        </CTypography>
                        <Stack
                            direction="row"
                            py={1}
                            gap={1}
                        >
                            {
                                socials.map((item, index) => {
                                    return (
                                        <Box
                                            component={"a"}
                                            href={item.link}
                                            target="_blank"
                                            key={Math.random()}
                                            sx={{
                                                '&:hover': {
                                                    transform: 'scale(1.1)',
                                                }
                                            }}
                                        >
                                            <Box
                                                component='img'
                                                src={item.img}
                                                alt="item.name"
                                            >

                                            </Box>

                                        </Box>
                                    )
                                })
                            }


                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <Stack
                justifyContent="center"
                alignItems="center"
                py={6}
            >
                <CTypography
                    fontSize="12px"
                    fontWeight={400}
                    color="#ABB2BF"
                >
                    ©{' '}
                    {
                        new Date().getFullYear()
                    }
                    {' '}
                    Abdul Kader. All rights reserved.
                </CTypography>
            </Stack>
        </Stack>
    )
}
