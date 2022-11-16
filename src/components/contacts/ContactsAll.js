import { Grid, Stack } from "@mui/material";
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import discord from "../../assets/Icon/discord.svg";
import email from "../../assets/Icon/email.svg";
import { CTypography } from "../../utility";
// import ContactFrom from "./ContactFrom";

function ContactsAll() {

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
                            fontSize={32}
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
                            I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me.
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
                                Message me here:
                            </CTypography>
                            <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                                component={'a'}
                                href="https://discord.com/users/9548"
                            >
                                <img src={discord} alt="discord" />
                                <CTypography
                                    fontWeight={400}
                                    fontSize={16}
                                    color="#ABB2BF"
                                    component="span"
                                >
                                    !Abdul Kader shohan#9548
                                </CTypography>
                            </Stack>
                            <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                                component="a"
                                href="mailto: abdulkadirshohan@gmail.com"
                            >
                                <img src={email} alt="discord" />
                                <CTypography
                                    fontWeight={400}
                                    fontSize={16}
                                    color="#ABB2BF"
                                    component="span"
                                >
                                    abdulkadirshohan@gmail.com
                                </CTypography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid >
        </Stack >
    )
}
export default React.memo(ContactsAll);