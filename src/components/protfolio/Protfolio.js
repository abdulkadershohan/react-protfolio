import { Chip } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { Link } from 'react-router-dom';

import brdchart from '../../assets/images/projects/brdchart.png';
import covid from '../../assets/images/projects/covid-19.png';
import upcopo2 from '../../assets/images/projects/upocopo-2.png';
import { CButton, CTypography } from "../../utility";
const cardData = [
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
        title: 'Covid-19 Survey',
        skils: ["Bootstrap", "ReactJS", "EmailJS", "Styled Component",
            "HTML", "CSS", "JavaScript", "PHP", "MYSQL"],
        description: 'Helth Care App',
        cardImage: covid,
        figma: "",
        liveUrl: 'https://covid-19-survey-form-2020.netlify.app/',
        // youtubeUrl: 'https://www.youtube.com/watch?v=0KnPfVyOxeg&t=5s',
        githubUrl: "https://github.com/abdulkadershohan/COVID-19-SURVEY-FROM",
        isPrivate: false
    },
]


const ProjectCard = () => {
    return (
        <Stack direction="row"
            justifyContent="center"
            flexWrap="wrap"
            // alignItems="center"
            gap={2}
        >
            {
                cardData.map((item) => {
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
                                    color='#fff'
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

    return (
        <Stack
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                py={4}
            >
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                >
                    <CTypography
                        text='#'
                        color='#C778DD'
                        fontWeight={500}
                        fontSize={32}
                    >
                        <span style={{ color: '#FFFFFF' }}>
                            Protfolio
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
                <CTypography
                    fontWeight={400}
                    fontSize={16}

                    component={Link}
                    to='/protfolio'
                    sx={{
                        borderBottom: '2px solid #C778DD',
                        "&:hover": {
                            color: '#C778DD'
                        }
                    }}
                >
                    View all ~~{'>'}
                </CTypography>


            </Stack>
            <ProjectCard
            />
        </Stack>
    )
}
