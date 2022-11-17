import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import discordIcon from "../../assets/Icon/discord.svg";
import emailIcon from "../../assets/Icon/email.svg";
import { CTypography } from "../../utility";

const homeContactData = {
    text: `I’m interested in freelance opportunities. However, if you have other requests or questions, don’t hesitate to contact me.`,
    socailAccounts: [
        {
            id: 1,
            name: 'Discord',
            icon: discordIcon,
            link: 'https://discord.com/users/522431317447802900',
            text: '!Abdul Kader shohan#9548',
            isEmail: false

        },
        {
            id: 2,
            name: 'Discord',
            icon: emailIcon,
            link: 'abdulkadirshohan@gmail.com',
            text: 'abdulkadirshohan@gmail.com',
            isEmail: true
        },
    ],
    socailAccountsTitle: 'Message me here'
}

export default function Contacts() {
    const { text, socailAccounts, socailAccountsTitle } = homeContactData;
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
                        Contacts
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
                    pb: 8,
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
                            {text}
                        </CTypography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}  >
                    <Stack
                        justifyContent="center"
                        sx={{
                            alignItems: {
                                xs: 'start', sm: 'center',
                            },
                        }}
                    >
                        <Stack
                            sx={{
                                border: '1px solid #ABB2BF',
                                p: 1,
                            }}
                            spacing={1}
                        >
                            <CTypography>
                                {socailAccountsTitle}:
                            </CTypography>
                            {
                                socailAccounts.map((item) => {
                                    return (
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            alignItems="center"
                                            component={'a'}
                                            key={Math.random()}
                                            {...(item?.isEmail ? { href: `mailto:` + item?.link }

                                                : { href: item?.link, target: '_blank' })}
                                        >
                                            <img src={item?.icon} alt={item?.name} />
                                            <CTypography
                                                fontWeight={400}
                                                fontSize={16}
                                                color="#ABB2BF"
                                                component="span"
                                            >
                                                {item?.text}
                                            </CTypography>
                                        </Stack>
                                    )
                                })
                            }
                        </Stack>
                    </Stack>
                </Grid>
            </Grid >
        </Stack >
    )
}
