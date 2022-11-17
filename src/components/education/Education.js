import { Box, Stack } from "@mui/system";
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { CTypography } from "../../utility";

const educationData = [
    {
        id: 1,
        title: "BSC in Computer Science and Engineering",
        school: "Bangladesh University of Business and Technology (BUBT)",
        year: "FEB 2018 - APR 2022",
    },
    {
        id: 2,
        title: "Higher Secondary Certificate (HSC)",
        school: "Dhunat College, Dhunat, Bogra",
        year: "MAR  2015 - APR  2017",
    },
    {
        id: 3,
        title: "Secondary School Certificate (SSC)",
        school: "Dhunat Adarsha High School, Dhunat, Bogra",
        year: "MAR  2010 - FEB  2015",
    }
]

export default function Education() {
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
                                education
                            </span>

                        </CTypography>
                    </Stack>
                    <CTypography
                        fontWeight={400}
                        fontSize={16}

                        component={Link}
                        // to={navigate(-1)}
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
            </Stack>

        )
    }
    const SkillsCard = ({ data }) => {
        const { title, school, year } = data;
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
                <Box>
                    <Box
                        sx={{
                            borderBottom: '1px solid #ABB2BF',
                            p: 1,
                            color: '#FFFFFF',
                        }}
                        fontSize={16}
                        fontWeight={600}
                    >{title}
                        <Stack
                            alignItems="flex-end"
                            sx={{
                                fontSize: 12,
                                fontWeight: 400,
                                color: '#ABB2BF',
                                fontFamily: 'FiraCode',
                            }}
                        >
                            {year}
                        </Stack>
                    </Box>
                </Box>
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

                    <CTypography
                        component={"li"}
                        fontSize={14}
                        fontWeight={500}
                        text={school}
                        color='#ABB2BF'
                    />

                </Box>

            </Box >
        )
    }
    return (
        <Stack>
            <Header />
            <Stack
                alignItems="center"
                py={4}
                pb={8}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    flexWrap="wrap"
                    gap={1}
                >
                    {
                        educationData.map((item, index) => {
                            return (
                                <SkillsCard
                                    key={Math.random()}
                                    data={item}

                                />
                            )
                        })
                    }
                </Stack>
            </Stack>
        </Stack>
    )
}
