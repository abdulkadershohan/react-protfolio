import { Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import skillLeftImg from '../../assets/images/skillRacktangle.svg';
import { CTypography } from "../../utility";

const Ractangle = () => {
    return (
        <Stack p={4}>
            <img src={skillLeftImg} alt="skillLeftImg" style={{ width: '100%', height: 'auto' }} />
        </Stack >

    )
}
const mySkills = [
    {
        id: 1,
        title: "Programming Languages",
        items: ["JavaScript,TypeScript,", "C++,", "C,", "C#,", "Python,", "Java,", "PHP"]
    },
    {
        id: 2,
        title: 'Libraries & Frameworks',
        items: ["React ,", " React Native (Expo and Bare), ", "NextJs, ", "Express JS, ", "Redux/RTK Query"]
    },
    {
        id: 3,
        title: 'Frontend CSS Library',
        items: ["HTML/CSS,", "SASS, ", " Material-UI, ", "Tailwind CSS,", "Bootstrap, ", "Native Base, ", "Mantine"]
    },
    {
        id: 4,
        title: 'Other Skills & Tools',
        items: ["Git/Github, ", " VS Code, ", "XCode, ", "Android Studio, ", " MongoDB Compass"]
    },
    {
        id: 5,
        title: 'Cloud/Databases',
        items: ["MongoDB, ", "Firebase, ", "Relational Database(MySQL)"]
    },
    {
        id: 7,
        title: 'Areas of Interest',
        items: ["Web Design and Development, ", " Mobile App Development"]
    },
    {
        id: 8,
        title: 'Soft Skills',
        items: ["Problem Solving, Self-learning, ", "Presentation, ", "Adaptability"]
    },
    {
        id: 9,
        title: 'Other Skills',
        items: ["Figma, ", "WebSocket"]
    },
    {
        id: 6,
        title: 'Communication Languages',
        items: ["Bengali (Native),", " English(fluent speaker),", " Hindi/Urdu (fluent speaker)"]
    }
]

export default function Skils() {
    const { mode, textDark, textLight, textWhite, textGray } = useSelector(state => state.theme)
    const isDark = Boolean(mode === 'dark')
    const Header = () => {
        return (

            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                pt={8}
            >
                <CTypography
                    text='#'
                    color='#C778DD'
                    fontWeight={500}
                    fontSize={32}
                >
                    <span style={{ color: isDark ? textWhite : textDark }}>

                        Skils
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

            // </Stack>
        )
    }
    const SkillsCard = ({ title, skills }) => {
        return (
            <Box
                sx={{
                    border: '1px solid #ABB2BF',
                    display: 'inline-block',
                    minWidth: '200px',
                    maxWidth: '300px',
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: 0,
                }}
            >
                <CTypography
                    sx={{
                        borderBottom: '1px solid #ABB2BF',
                        p: 1,
                    }}
                    fontSize={15}
                    fontWeight={600}
                    text={title}
                />
                <Box
                    component={"ul"}
                    sx={{
                        p: 1,
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        justifyContent: 'start',
                        alignItems: 'start',
                    }}
                >
                    {skills?.map((skill, index) => {
                        return (
                            <CTypography
                                key={index}
                                component={"li"}
                                fontSize={14}
                                fontWeight={500}
                                text={skill}
                                color={isDark ? textLight : textGray}
                            />
                        )
                    })}

                </Box>

            </Box >
        )
    }
    return <Stack
    >
        <Header />
        <Grid container spacing={2}
            sx={{
                alignItems: "center",
                py: 2,
                pb: 8,
            }}
        >
            <Grid item xs={12} md={4}>
                <Stack
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Ractangle />
                </Stack>
            </Grid>
            <Grid item xs={12} md={8}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    flexWrap="wrap"
                    gap={1}
                >
                    {
                        mySkills?.map((skill, index) => {
                            return (
                                <SkillsCard
                                    key={Math.random()}
                                    title={skill?.title}
                                    skills={skill?.items}
                                />
                            )
                        })
                    }

                </Stack>
            </Grid>
        </Grid>

    </Stack >
}
