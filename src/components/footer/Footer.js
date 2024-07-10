import { Container, Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/images/logo.png";

import { CTypography } from "../../utility";
import { DiscordIcon, FigmaIcon, GithubIcon, LinkDinIcon, LogoImg, TelegramIcon, TwitterIcon } from "../../assets/svg";
const footerData = {
    socials: [
        {
            id: 1,
            name: 'github',
            link: "https://github.com/abdulkadershohan",
            img: <GithubIcon />
        },
        {
            id: 2,
            name: 'linkedin',
            link: "https://www.linkedin.com/in/abdulkadershohan/",
            img: <LinkDinIcon />
        },
        {
            id: 3,
            name: 'telegram',
            link: "https://t.me/Abdulkadershohan",
            img: <TelegramIcon />
        },
        {
            id: 4,
            name: 'twitter',
            link: "https://twitter.com/dev_shohan",
            img: <TwitterIcon />
        },
        {
            id: 5,
            name: 'discord',
            link: "https://discord.com/users/522431317447802900",
            img: <DiscordIcon />
        }
    ],
    socialsTitle: "Social Media",
    discription: `Frontend Engineer & React Native developer based in Bangladesh`,
    link: 'https://dev-shohan.netlify.app/',
    copyRight: 'Abdul Kader Shohan. All rights reserved.',
    logo: logo,
    logoTitle: 'Abdul Kader',
    refText: 'Special Thanks to Elias Dev for sharing this UI/UX design with Figma Community',

}

export default function Footer() {
    const { mode, textDark, textLight, textGray } = useSelector(state => state.theme)
    const isDark = Boolean(mode === 'dark')
    const { socials, socialsTitle, discription, link, copyRight, logo, logoTitle,
        refText } = footerData;
    return (
        <Container maxWidth="xl">
            <Stack
                sx={{
                    borderTop: '1px solid #ABB2BF',
                    py: 8,
                }}
            >
                <Grid container spacing={2}
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
                                    component="a"
                                    href="/"
                                    sx={{
                                        cursor: "pointer",
                                    }}
                                >
                                    <LogoImg
                                        iconColor={isDark ? textLight : textDark}
                                    />
                                    <CTypography>
                                        {logoTitle}
                                    </CTypography>
                                </Stack>
                                <CTypography
                                    fontSize="16px"
                                    fontWeight={400}
                                    color={isDark ? textLight : textGray}
                                    component={"a"}
                                    href="/"
                                    target="_blank"
                                >
                                    {link}
                                </CTypography>
                            </Stack>

                            <CTypography
                                fontSize="16px"
                                fontWeight={400}
                                align="center"
                            >
                                {discription}
                            </CTypography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack
                            alignItems="center"
                            justifyContent='center'
                        >
                            <CTypography>
                                {socialsTitle}
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
                                                {item.img}

                                            </Box>
                                        )
                                    })
                                }


                            </Stack>
                            <Stack
                                justifyContent='center'
                                alignItems='center'
                            >
                                {
                                    refText && (
                                        <>
                                            <CTypography
                                                fontSize="12px"
                                                fontWeight={400}
                                                color={isDark ? textLight : textGray}
                                            >
                                                {refText}
                                            </CTypography>
                                            <Box>
                                                <Box
                                                    component={"a"}
                                                    href={"https://www.figma.com/community/file/1164933568884615740"}
                                                    target="_blank"
                                                >
                                                    <FigmaIcon />
                                                </Box>
                                            </Box>
                                        </>
                                    )
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
                        color={isDark ? textLight : textGray}
                    >
                        ©{' '}
                        {
                            new Date().getFullYear()
                        }
                        {' '}
                        {copyRight}
                    </CTypography>
                </Stack>
            </Stack >
        </Container>
    )
}