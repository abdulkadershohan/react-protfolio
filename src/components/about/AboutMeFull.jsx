import { Grid } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import photo from "../../assets/images/sohanFormal-2.jpg";
// import photo from "../../assets/images/hero5.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector } from "react-redux";
import { CButton, CTypography } from "../../utility";

const aboutMeData = {
    aboutData: [
        {
            id: 1,
            text: `An extremely positive individual & who can stay focused and motivated. Responsible, dependable, and takes great pride in all my work. Can work both independently and in a team, which has been proven from past work experience and academic experiences.`,
        },
        {
            id: 2,
            text: `HI! I'm MD. Abdul Kader. I'm a Frontend Engineer. I'm passionate about building scalable and maintainable web applications. Currently, I'm working as a Frontend Engineer at RBS Tech LTD. I'm also a part-time freelancer. I love to learn new things and share my knowledge with others.`
        },
        {
            id: 3,
            text: ` Mobile app development is my other passion. React and React Native is my favorite JavaScript libraries. I'm also a big fan of Python Django. In the future, I want to be a Full Stack Developer`,
        }
    ],
    mySkills: [
        {
            id: 1,
            title: "Programming Languages",
            items: ["JavaScript,TypeScript,", "C++,", "C,", "C#,", "Python,", "Java,", "PHP"]
        },
        {
            id: 2,
            title: 'Libraries & Frameworks',
            items: ["React JS,", "Next JS,", "React Native,", "Node JS,", "Express,", "Mongoose.", "Tailwind CSS,", "Material UI,", "Native Base,", "Bootstrap"]
        },
        {
            id: 3,
            title: 'Other Skills & Tools',
            items: ["Redux,", "Redux Toolkit,", "RTK Query,", "Context API,", "WebSocket,", "Git,", "GitHub"]
        },
        {
            id: 4,
            title: 'Databases',
            items: ["MySQL"]
        },
        {
            id: 5,
            title: 'Communication Languages',
            items: ["Bengali (Native),", " English(fluent speaker),", " Hindi/Urdu (fluent speaker)"]
        },

    ],
    funFact: [
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

    ],
    overleafResume: 'https://www.overleaf.com/read/vgxvgygfvxjw#28ee64',
    image: photo,
}


export default function AboutMeFull() {
    const navigate = useNavigate();
    const { mode, textDark, textLight, textWhite, textGray } = useSelector(state => state.theme)
    const isDark = Boolean(mode === 'dark')
    const { aboutData, mySkills, funFact, overleafResume, image } = aboutMeData;
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
                    color={isDark ? textLight : textGray}
                    fontWeight={400}
                    fontSize={16}
                />
            </Stack>

        )
    }
    const SkillHeader = () => {
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
                                color={isDark ? textLight : textGray}
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
                    <span style={{ color: isDark ? textWhite : textDark }}>
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
                                    color={isDark ? textLight : textGray}
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
        <Container maxWidth="xl">
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
                                    sx={{
                                        width: {
                                            xs: '100%', sm: '100%',
                                            md: 'auto', lg: 'auto',
                                        },
                                        height: {
                                            xs: 'auto', sm: 'auto',
                                            md: 350, lg: 600,
                                        },
                                        filter: isDark && 'grayscale(100%)',
                                        aspectRatio: '1/1',
                                        borderRadius: 2,
                                        overflow: 'hidden',

                                    }}
                                >
                                    <LazyLoadImage
                                        alt='about-image'
                                        effect="blur"
                                        src={image}
                                        width={"100%"}
                                        height={"100%"}
                                    />
                                </Box>
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
                                            color={isDark ? textLight : textGray}
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
                                        href={overleafResume}
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
        </Container>
    )
}