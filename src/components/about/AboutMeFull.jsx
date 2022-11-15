import { Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import photo from "../../assets/images/hero5.jpg";
import { CButton, CTypography } from "../../utility";

const Frameworks = ["React", "Node", "Express", "Django", "Flask"]
const Tools = ["Git", "Docker", "AWS", "GCP", "Kubernetes", "Terraform", "Ansible", "Jenkins", "Linux"]
const Databases = ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
const Languages = ["Python", "JavaScript", "TypeScript", "Java", "C++", "C", "C#", "Go", "Rust", "PHP", "HTML", "CSS", "SQL"]

export default function AboutMeFull() {
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
                        to='/'
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
    return (
        <Stack>
            <Header />
            <Stack>
                <Grid container spacing={2}
                    sx={{
                        alignItems: 'center',
                    }}
                >
                    <Grid item xs={12} md={6}>
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
                                I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                            </CTypography>
                            <CTypography
                                color="#ABB2BF"
                                fontWeight={400}
                                fontSize={16}
                            >
                                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                            </CTypography>
                            <CTypography
                                color="#ABB2BF"
                                fontWeight={400}
                                fontSize={16}
                            >
                                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                            </CTypography>
                            <Box
                                display="flex"
                            >
                                <CButton
                                    btnTitle="Download CV"
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
                            title="Languages"
                            skills={Languages}
                        />
                        <SkillsCard
                            title="Frameworks"
                            skills={Frameworks}
                        />
                        <SkillsCard
                            title="Tools"
                            skills={Tools}
                        />
                        <SkillsCard
                            title="Databases"
                            skills={Databases}
                        />

                    </Stack>
                </Stack>
            </Stack>

        </Stack>
    )
}
