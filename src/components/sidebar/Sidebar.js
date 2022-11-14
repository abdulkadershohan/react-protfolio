import { Box, Stack } from "@mui/material";
import React from "react";
import discord from '../../assets/Icon/discord.svg';
import email from '../../assets/Icon/email.svg';
import github from '../../assets/Icon/github.svg';
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
                    <a href="https://discord.com/users/9548"
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
                    </a>
                </Stack>

            </Stack>
        </Stack>
    )
}
