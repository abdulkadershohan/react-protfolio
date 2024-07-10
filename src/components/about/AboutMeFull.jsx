import { Grid } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import photo from "../../assets/images/sohanFormal-2.jpg";
// import photo from "../../assets/images/hero5.jpg";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
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
            text: `In my previous role as a React Frontend Developer at RBS Tech LTD Company, RBS Tech LTD is a
construction-based company located in Mirpur 12, Dhaka. We have a small team to develop program
management tools for managing whole construction projects. We implemented more than 50 features
for this project, like chat modules, kanban boards with real-time drag-and-drop features, projects,
tasks, requisitions, VAT, TAX, invoice management, data grid view, calendar view, user permissions,
multilevel user permissions segment, etc. I was responsible for developing and maintaining multiple
web applications that received high praise for their performance and user experience. I have a deep
understanding of React’s core principles and best practices, and I am proficient in using Redux for
state management. Additionally, I have experience working with RESTful APIs and integrating
third-party libraries to enhance functionality`
        },
        {
            id: 4,
            text: `I am highly skilled in HTML, CSS, JavaScript, and Typescript, and I have a strong understanding of
responsive design principles. I am also experienced in using version control systems such as Git and
have a solid understanding of Agile development methodologies. My ability to collaborate effectively
with cross-functional teams and my strong problem-solving skills have been instrumental in delivering
successful projects on time and within budget.`

        },
        // {
        //     id: 3,
        //     text: ` Mobile app development is my other passion. React and React Native is my favorite JavaScript libraries. I'm also a big fan of Python Django. In the future, I want to be a Full Stack Developer`,
        // }
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
                                        startIcon={<PictureAsPdfIcon />}

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