import { Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import discordIcon from "../../assets/Icon/discord.svg";
import emailIcon from "../../assets/Icon/email.svg";
import { CTypography } from "../../utility";
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
                            <span style={{ color: '#FFFFFF' }}>
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
        <Container>
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
                                color="#ABB2BF"
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
        </Container>
    )
}
export default React.memo(ContactsAll);