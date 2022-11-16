import { Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import photo from "../../assets/images/sohanFormal-2.jpg";
// import photo from "../../assets/images/hero5.jpg";
import { CButton, CTypography } from "../../utility";

const aboutData = [
    {
        id: 1,
        text: `An extremely positive and individual & can stay focused and motivated. Responsible, dependable and takes great pride in all my
        work. Can work both independently and in a team, which has been proven from past work experience and academic experiences`,
    },
    {
        id: 2,
        text: `HI! I'm MD. Abdul Kader. I'm a Frontend Engineer. I'm passionate about building scalable and maintainable web applications. Currently I'm working as a Frontend Engineer at RBS Tech LTD. I'm also a part time freelancer. I love to learn new things and share my knowledge with others.`

    },
    {
        id: 3,
        text: ` Mobile app development is my another passion.React and React Native are my favorite JavaScript libraries. I'm also a big fan of Node.js and Express.js. In future I want to be a Full Stack Developer.`
    }
]
const Frameworks = ["React,", "React Native,", "Bootstrap,", "Native Base,", "Material UI,", "React Bootstrap"]
const other = ["Context API,", "Git,", "GitHub,", "React Reducer,", "RestAPI,", "React Redux,", "WebSocket,", "Redux toolkit"]
const Databases = ["MySQL"]
const Languages = ["JavaScript,", "C++,", "C,", "C#,", "Python,", "Java,", "PHP"]
const communication = ["Bengali (Native),", " English(fluent speaker),", " Hindi/Urdu (fluent speaker)"]

const funFact = [
    "Coding is my passion",
    "Cricket is my favorite sport",
    "Love to sing songs when I'm alone",
    "I love to spend time with my family",
    "I love to travel",
    "Eating is my hobby!",
    "I often bike with my friends",
    "Winter is my favorite season",
    "Miss my childhood days",
    "When i depressed, i love to coding and pray to Allah",

]
export default function AboutMeFull() {
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
                                about-me
                            </span>

                        </CTypography>
                    </Stack>
                    <CTypography
                        fontWeight={400}
                        fontSize={16}

                        component={Link}
                        //  to='/'
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
                <CTypography
                    text='Who am I?'
                    color='#ABB2BF'
                    fontWeight={400}
                    fontSize={16}
                />
            </Stack>

        )
    }
    const SkillHeader = () => {
        return (
            // <Stack
            //     direction="row"
            //     justifyContent="space-between"
            //     alignItems="center"
            //     py={4}
            // >
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
                    <span style={{ color: '#FFFFFF' }}>
                        skils
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
                    fontSize={16}
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
                    {skills.map((skill, index) => {
                        return (
                            <CTypography
                                key={index}
                                component={"li"}
                                fontSize={14}
                                fontWeight={500}
                                text={skill}
                                color='#ABB2BF'
                            />
                        )
                    })}

                </Box>

            </Box >
        )
    }
    const FunHeader = () => {
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
                    <span style={{ color: '#FFFFFF' }}>
                        fun-facts
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
    const FunFactCard = () => {
        return (
            <Stack
                direction="row"
                flexWrap="wrap"
                gap={1}
            >
                {
                    funFact.map((fact, index) => {
                        return (
                            <Box
                                sx={{
                                    border: '1px solid #ABB2BF',
                                    p: 1,
                                }}
                                key={Math.random()}
                            >
                                <CTypography
                                    fontSize={16}
                                    fontWeight={400}
                                    color='#ABB2BF'
                                    text={fact}
                                />
                            </Box >
                        )
                    })
                }
            </Stack>

        )
    }
    return (
        <Stack>
            <Header />
            <Stack>
                <Grid container spacing={2}
                    sx={{
                        alignItems: 'center',
                        py: 4,
                    }}
                >
                    <Grid item xs={12} md={4}>
                        <Stack >
                            <Box
                                component="img"
                                src={photo}
                                alt="hero"
                                sx={{
                                    width: {
                                        xs: '100%', sm: '100%',
                                        md: '100%', lg: '80%',
                                    },
                                    height: {
                                        xs: 'auto', sm: 'auto',
                                        md: 'auto', lg: 'auto',
                                    },
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={8}  >
                        <Stack
                            spacing={3}
                            py={8}
                        >
                            {
                                aboutData.map((data, index) => (
                                    <CTypography
                                        color="#ABB2BF"
                                        fontWeight={400}
                                        fontSize={16}
                                        key={data.id}
                                    >{data.text}</CTypography>
                                ))
                            }
                            <Box
                                display="flex"
                            >
                                <CButton
                                    btnTitle="Download CV"
                                    component={"a"}
                                    target="_blank"
                                    href='https://www.overleaf.com/read/xhbzrbckykqj'
                                />
                            </Box>
                        </Stack>
                    </Grid>

                </Grid>
            </Stack >
            <Stack
                py={4}
                spacing={8}
            >
                <SkillHeader />
                <Stack
                    alignItems="center"
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        flexWrap="wrap"
                        gap={1}
                    >
                        <SkillsCard
                            title="Programming Languages"
                            skills={Languages}
                        />
                        <SkillsCard
                            title="Libraries & Frameworks"
                            skills={Frameworks}
                        />
                        <SkillsCard
                            title="Other Skills & Tools"
                            skills={other}
                        />
                        <SkillsCard
                            title="Databases"
                            skills={Databases}
                        />
                        <SkillsCard
                            title="Communication Languages"
                            skills={communication}
                        />
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                py={4}
                pb={8}
                spacing={8}
            >
                <FunHeader />
                <FunFactCard />
            </Stack>

        </Stack >
    )
}
