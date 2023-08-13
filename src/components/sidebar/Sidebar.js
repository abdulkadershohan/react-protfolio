import { Box, Stack } from "@mui/material";
import React from "react";
import DiscordIcon from "../../assets/svg/DiscordIcon";
import EmailIcon from "../../assets/svg/EmailIcon";
import GithubIcon from "../../assets/svg/GithubIcon";
const sidebarData = [
    {
        name: 'discord',
        icon: <DiscordIcon />,
        link: 'https://discord.com/users/522431317447802900',
        id: 1
    },
    {
        name: 'github',
        icon: <GithubIcon />,
        link: "https://github.com/abdulkadershohan",
        id: 2
    },
    {
        name: 'email',
        icon: <EmailIcon />,
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
                            >  {item.icon}
                            </Box>
                        ))
                    }

                </Stack>

            </Stack>
        </Stack>
    )
}
