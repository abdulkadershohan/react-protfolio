import { Box, Stack } from "@mui/material";
import React from "react";
import discord from '../../assets/Icon/discord.svg';
import email from '../../assets/Icon/email.svg';
import github from '../../assets/Icon/github.svg';
const sidebarData = [
    {
        name: 'discord',
        icon: discord,
        link: 'https://discord.com/users/522431317447802900',
        id: 1
    },
    {
        name: 'github',
        icon: github,
        link: "https://github.com/abdulkadershohan",
        id: 2
    },
    {
        name: 'email',
        icon: email,
        link: "mailto: abdulkadirshohan@gmail.com",
        id: 3
    }

]
export default function Sidebar() {
    return (
        <Stack
            sx={{
                width: "100%",
                pt: 4
            }}
        >
            <Stack
                alignItems="center"
                spacing={2}
                width="35%"
            >
                <Box
                    sx={{
                        width: "2px",
                        height: 240,
                        backgroundColor: "#ABB2BF",
                    }}
                />
                <Stack>
                    {
                        sidebarData.map((item) => (
                            <Box
                                component="a"
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                key={item.id}
                                sx={{
                                    "&:hover": {
                                        transform: "scale(1.1)",
                                        // transition: "all 0.3s ease-in-out",
                                    },
                                }}
                            >  <img src={item.icon} alt={item.name} />
                            </Box>
                        ))
                    }

                    {/* <a href="https://discord.com/users/522431317447802900"
                        target={"_blank"} rel="noreferrer"
                    >
                        <img src={discord} alt="discord" />
                    </a>
                    <a href="https://github.com/abdulkadershohan"
                        target={"_blank"} rel="noreferrer"
                    >
                        <img src={github} alt="github" />

                    </a>
                    <a href="mailto: abdulkadirshohan@gmail.com"
                        target={"_blank"} rel="noreferrer"
                    >
                        <img src={email} alt="email" />
                    </a> */}
                </Stack>

            </Stack>
        </Stack>
    )
}
