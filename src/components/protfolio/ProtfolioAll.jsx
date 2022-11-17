import { Chip } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import brdchart from '../../assets/images/projects/brdchart.png';
import covid from '../../assets/images/projects/covid-19.png';
import covidapp from '../../assets/images/projects/covidapp.jpg';
import food from '../../assets/images/projects/food.png';
import food2 from '../../assets/images/projects/food2.png';
import gym from '../../assets/images/projects/gym2.png';
import learningapp from '../../assets/images/projects/learningapp.png';
import LiveStatus from '../../assets/images/projects/LiveStatus.png';
import ott from '../../assets/images/projects/ott.png';
import rbs from '../../assets/images/projects/rbs.png';
import rtc from '../../assets/images/projects/rtc.png';
import SeRemo from '../../assets/images/projects/SeRemo2.png';
import upcopo2 from '../../assets/images/projects/upocopo-2.png';
import { CButton, CTypography } from "../../utility";

const ProtfolioData = {
    mobileAppTitle: 'mobile apps',
    mobileApp: [
        {
            id: 1,
            title: 'Upcopo',
            skils: ["React Native", "Redux", "Redux Toolkit", "Native Base", "expo", "formik", "yup", "Google Map"],
            description: `NFTs app for Buy Virtual Real Estate.`,
            cardImage: upcopo2,
            liveUrl: '',
            youtubeUrl: 'https://www.youtube.com/watch?v=k7098_rTLlA&feature=youtu.be',
            figma: "https://www.figma.com/file/xxFZjSHJXT2yrQwS68DCDm/Upcopo?node-id=412%3A712",
            githubUrl: '',
            isPrivate: true
        },
        {
            id: 2,
            title: 'Brdcart',
            skils: ["React Native", "Redux", "Redux Toolkit", "Native Base", "expo", "formik", "yup", "Google Map"],
            description: 'E-commerce app',
            cardImage: brdchart,
            liveUrl: '',
            figma: "https://www.figma.com/file/HPX2Q9k7QC0jughEcor3Ad/Bai1234?fuid=1020350840147497557",
            youtubeUrl: '',
            githubUrl: '',
            isPrivate: true

        },
        {
            id: 3,
            title: 'UIUX_Learning_App',
            skils: ["React Native", "Redux", "Redux Toolkit", "Native Base", "expo", "formik", "yup",],
            description: 'Learning App',
            cardImage: learningapp,
            figma: "https://www.figma.com/file/G8IR3mlAuzpsykfRF7g5tU/UXchips_UIUX_Learning_App?t=ccx99V0x6MlRyjjj-0",
            // liveUrl: 'https://covid-19-survey-form-2020.netlify.app/',
            // youtubeUrl: 'https://www.youtube.com/watch?v=0KnPfVyOxeg&t=5s',
            // githubUrl: "https://github.com/abdulkadershohan/COVID-19-SURVEY-FROM"
            isPrivate: true
        },
        {
            id: 4,
            title: 'SeRemo',
            skils: ["React Native", "Redux", "Redux Toolkit", "Native Base", "expo", "formik", "yup",],
            description: 'Business app',

            cardImage: SeRemo,
            figma: "https://www.figma.com/file/xgeqbCe4AZMHuBE9q3ogNA/izackmbimi?node-id=440%3A614&t=yE99K0IDkJbE9StL-0",
            // liveUrl: 'https://covid-19-survey-form-2020.netlify.app/',
            // youtubeUrl: 'https://www.youtube.com/watch?v=0KnPfVyOxeg&t=5s',
            // githubUrl: "https://github.com/abdulkadershohan/COVID-19-SURVEY-FROM"
            isPrivate: true
        },
        {
            id: 5,
            title: 'RBS Movie App',
            skils: ["React Native", "Native Base", "expo", "formik", "yup",],
            description: 'OTT app',
            isPrivate: true,
            cardImage: ott,
            figma: "https://www.figma.com/file/xgeqbCe4AZMHuBE9q3ogNA/izackmbimi?node-id=440%3A614&t=yE99K0IDkJbE9StL-0",
            // liveUrl: 'https://covid-19-survey-form-2020.netlify.app/',
            // youtubeUrl: 'https://www.youtube.com/watch?v=0KnPfVyOxeg&t=5s',
            // githubUrl: "https://github.com/abdulkadershohan/COVID-19-SURVEY-FROM"
        },
        {
            id: 6,
            title: 'Covid-19 Survey App',
            skils: ["React Native", "Native Base", "Axios", "PHP", "MYSQL"],
            description: 'Helth Care App',
            cardImage: covidapp,
            figma: "",
            // liveUrl: 'https://covid-19-survey-form-2020.netlify.app/',
            youtubeUrl: 'https://www.youtube.com/watch?v=MGYeFVJtlQc',
            githubUrl: "https://github.com/abdulkadershohan/covid_19_survey_app",
            isPrivate: false
        },
    ],
    webAppTitle: 'web projects',
    webApp: [
        {
            id: 7,
            title: 'RBS Dashboard',
            skils: ["ReactJS", "RestAPi", "JavaScript", "Material UI", "React Reducer", "Micro Service", "WebSocket",],
            description: 'Company Dashboard & Admin Panel',
            cardImage: rbs,
            figma: "",
            isPrivate: true,
            liveUrl: 'http://161.97.157.117:5001/',
            // youtubeUrl: 'https://www.youtube.com/watch?v=0KnPfVyOxeg&t=5s',
        },
        {
            id: 1,
            title: 'Covid-19 Survey',
            skils: ["ReactJS", "HTML", "CSS", "JavaScript", "Bootstrap", "EmailJS", "Styled Component",
                "PHP", "MYSQL"],
            description: 'Helth Care App',
            cardImage: covid,
            figma: "",
            isPrivate: false,
            liveUrl: 'https://covid-19-survey-form-2020.netlify.app/',
            // youtubeUrl: 'https://www.youtube.com/watch?v=0KnPfVyOxeg&t=5s',
            githubUrl: "https://github.com/abdulkadershohan/COVID-19-SURVEY-FROM"
        },
        {
            id: 2,
            title: 'Covid-19 Live Status',
            skils: ["ReactJS",
                "HTML", "CSS", "Bootstrap", "JavaScript", "Axios"],
            description: `Worldometer Api`,
            cardImage: LiveStatus,
            liveUrl: 'https://covit-19-live-states.netlify.app/',
            // youtubeUrl: 'https://www.youtube.com/watch?v=k7098_rTLlA&feature=youtu.be',
            // figma: "https://www.figma.com/file/xxFZjSHJXT2yrQwS68DCDm/Upcopo?node-id=412%3A712",
            githubUrl: 'https://github.com/abdulkadershohan/covit-19-live-states',
            isPrivate: false
        },
        {
            id: 3,
            title: 'Gym Website',
            skils: ["ReactJS",
                "HTML", "CSS", "JavaScript"],
            description: 'Gym Landing Page',
            cardImage: gym,
            isPrivate: false,
            liveUrl: 'https://gym-website-9.netlify.app/',
            // figma: "https://www.figma.com/file/HPX2Q9k7QC0jughEcor3Ad/Bai1234?fuid=1020350840147497557",
            youtubeUrl: '',
            githubUrl: 'https://github.com/abdulkadershohan/gym-website'

        },
        {
            id: 4,
            title: 'Food Website',
            skils: ["ReactJS",
                "HTML", "CSS", "JavaScript"],
            description: 'Restaurant Landing Page',
            cardImage: food,
            isPrivate: false,
            liveUrl: 'https://restaurant-website-9.netlify.app/',
            // figma: "https://www.figma.com/file/HPX2Q9k7QC0jughEcor3Ad/Bai1234?fuid=1020350840147497557",
            youtubeUrl: '',
            githubUrl: 'https://github.com/abdulkadershohan/restaurant-website'

        },
        {
            id: 5,
            title: 'Food Website',
            skils: ["ReactJS",
                "HTML", "Styled Component",
                "JavaScript"],
            description: 'E-commerce food app',
            cardImage: food2,
            isPrivate: false,
            liveUrl: 'https://ecommerce-restaurant.netlify.app/',
            // figma: "https://www.figma.com/file/HPX2Q9k7QC0jughEcor3Ad/Bai1234?fuid=1020350840147497557",
            youtubeUrl: '',
            githubUrl: 'https://github.com/abdulkadershohan/ecommerce-restaurant'

        },
        {
            id: 6,
            title: 'Video Chat App',
            skils: ["ReactJS",
                "HTML", "CSS", "Socket.io", "express", "node.js",
                "JavaScript"],
            isPrivate: false,
            description: 'WebRTC Video Chat App',
            cardImage: rtc,
            liveUrl: 'https://video-chat-zoom-clone.netlify.app/',
            // figma: "https://www.figma.com/file/HPX2Q9k7QC0jughEcor3Ad/Bai1234?fuid=1020350840147497557",
            youtubeUrl: '',
            githubUrl: 'https://github.com/abdulkadershohan/web-rtc-video-chat-zoom-clone'

        },

    ],

}

const ProjectCard = ({ data }) => {
    return (
        <Stack direction="row"
            justifyContent="center"
            flexWrap="wrap"
            // alignItems="center"
            gap={2}
        >
            {
                data.map((item) => {
                    return (
                        <Box key={item.id}
                            sx={{
                                border: '1px solid #ABB2BF',
                            }}
                        >
                            <Box src={item.cardImage} alt=""
                                component="img"
                                sx={{
                                    aspectRatio: '16/9',
                                    borderBottom: '1px solid #ABB2BF',
                                    display: 'block',
                                    width: '360px',
                                    height: '200px'
                                }}
                            />
                            <Box
                                component="ul"
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '5px',
                                    padding: '10px',
                                    borderBottom: '1px solid #ABB2BF',
                                    maxWidth: '360px',

                                }}
                            >
                                {
                                    item.skils.map((skill) => {
                                        return (
                                            <Box
                                                key={skill}
                                                component="li"
                                                sx={{
                                                    display: 'inline-block',
                                                    padding: '0.5rem',
                                                    //  color: '#fff',
                                                    fontSize: '16px',
                                                    fontWeight: '400',
                                                    backgroundColor: '#ABB2BF',
                                                    borderRadius: '10px',
                                                    marginRight: '0.5rem',
                                                    marginBottom: '0.5rem'
                                                }}
                                            >
                                                {skill}
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                            <Stack
                                p={2}
                                spacing={2}
                            >
                                <Box
                                    fontSize={24}
                                    fontWeight={500}
                                    color="#FFF"
                                >
                                    {item.title}
                                    {
                                        item?.isPrivate && (

                                            <Chip
                                                sx={{
                                                    m: 1,
                                                    fontFamily: "FiraCode",
                                                    fontSize: '14px',
                                                    fontWeight: '400',
                                                    // backgroundColor: '#C470DB',
                                                    color: '#fff',
                                                    borderColor: '#C470DB',
                                                }}
                                                label="Private"
                                                //color='warning'
                                                size="small"
                                                variant="outlined"
                                            />
                                        )
                                    }
                                </Box>
                                <CTypography
                                    fontSize={14}
                                    fontWeight={400}
                                    color="#ABB2BF"
                                >
                                    {item.description}
                                </CTypography>
                                <Box
                                    display="flex"
                                    gap={2}
                                >
                                    {
                                        item.liveUrl && <CButton
                                            btnTitle="Live =>"
                                            component={'a'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={item.liveUrl}
                                        />
                                    }
                                    {
                                        item.figma && <CButton
                                            btnTitle="Figma =>"
                                            component={'a'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={item.figma}
                                        />
                                    }
                                    {
                                        item.youtubeUrl && <CButton
                                            btnTitle="Youtube =>"
                                            component={'a'}
                                            href={item.youtubeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"

                                        />
                                    }
                                    {
                                        item.githubUrl && <CButton
                                            btnTitle="Github repo =>"
                                            component={'a'}
                                            href={item.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"

                                        />
                                    }

                                </Box>
                            </Stack>

                        </Box>
                    )
                })
            }
        </Stack>
    )
}
export default function Protfolio() {
    const navigate = useNavigate();
    const { mobileAppTitle, mobileApp, webAppTitle, webApp } = ProtfolioData;
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [navigate])

    const HeaderWeb = () => {
        return (
            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                py={6}
            //  pt={8}
            >
                <CTypography
                    text='#'
                    color='#C778DD'
                    fontWeight={500}
                    fontSize={32}
                >
                    <span style={{ color: '#FFFFFF' }}>
                        {webAppTitle}
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
    const HeaderApp = () => {
        return (
            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                py={6}
            //  pt={8}
            >
                <CTypography
                    text='#'
                    color='#C778DD'
                    fontWeight={500}
                    fontSize={32}
                >
                    <span style={{ color: '#FFFFFF' }}>
                        {mobileAppTitle}
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
    return (
        <Stack
            spacing={2}
            pb={6}
        >
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
                            Projects
                        </span>

                    </CTypography>
                    {/* <Box
                        sx={{
                            width: {
                                xs: '10px', sm: '40px',
                                md: '60px', lg: '100px',
                            },
                            height: '1.5px',
                            backgroundColor: '#C778DD',
                        }}
                    /> */}
                </Stack>
                <CTypography
                    fontWeight={400}
                    fontSize={16}

                    component={Link}
                    // to='/'
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
                fontSize={16}
                fontWeight={400}
                color="#ABB2BF"
            >
                All of my projects
            </CTypography>
            <HeaderWeb />
            <ProjectCard
                data={webApp}

            />
            <HeaderApp />
            <ProjectCard
                data={mobileApp}
            />
        </Stack>
    )
}
