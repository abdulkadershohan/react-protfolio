import { Grid, Stack } from "@mui/material";
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import discordIcon from "../../assets/Icon/discord.svg";
import emailIcon from "../../assets/Icon/email.svg";
import { CTypography } from "../../utility";
import { useSelector } from "react-redux";
// import ContactFrom from "./ContactFrom";
const contactData = {
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
function ContactsAll() {
    const { text, socailAccounts, socailAccountsTitle } = contactData;
    const navigate = useNavigate();
    const { mode, mainBgColorDark, mainBgColorLight, textDark, textLight, textWhite, textGray } = useSelector(state => state.theme)
    const isDark = Boolean(mode === 'dark')
    const Header = () => {
        return (
            <Stack spacing={2}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    pt={4}
                >
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                    >
                        <CTypography
                            text='/'
                            color='#C778DD'
                            fontWeight={500}
                            fontSize={{
                                xs: 24,
                                sm: 32,
                            }}
                        >
                            <span style={{ color: isDark ? textWhite : textDark }}>
                                contacts
                            </span>

                        </CTypography>
                    </Stack>
                    <CTypography
                        fontWeight={400}
                        fontSize={16}

                        component={Link}
                        // to={navigate(-1)}
                        onClick={() => navigate(-1)}
                        sx={{
                            borderBottom: '2px solid #C778DD',
                            "&:hover": {
                                color: '#C778DD'
                            }
                        }}
                    >
                        {'<'}~~ Back
                    </CTypography>
                </Stack>
            </Stack>

        )
    }
    return (
        <Stack
            pb={8}
        >
            <Header />
            <Grid container spacing={2}
                sx={{
                    alignItems: 'center',
                }}
            >
                <Grid item xs={12} md={6}  >
                    <Stack
                        spacing={3}
                        py={8}
                    >
                        <CTypography
                            color={isDark ? textLight : textGray}
                            fontWeight={400}
                            fontSize={16}
                        >
                            {text}
                        </CTypography>
                    </Stack>
                    {/* <ContactFrom /> */}
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
                                                color={isDark ? textLight : textGray}
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
export default React.memo(ContactsAll);