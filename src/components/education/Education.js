import { Box, Stack } from "@mui/system";
import React from "react";
import { CTypography } from "../../utility";

const education = [
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
                    <span style={{ color: '#FFFFFF' }}>
                        education
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
    const SkillsCard = ({ title, school, year }) => {
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
                    <CTypography
                        sx={{
                            borderBottom: '1px solid #ABB2BF',
                            p: 1,
                        }}
                        fontSize={16}
                        fontWeight={600}
                        text={title}
                    >
                        <Stack
                            alignItems="flex-end"
                            sx={{
                                fontSize: 12,
                                fontWeight: 400,
                                color: '#ABB2BF',
                                fontFamily: 'FiraCode',
                            }}
                        // sx={{
                        //     justifyContent: 'flex-end',
                        //     alignItems: 'end',
                        //     justifyItems: 'end',
                        // }}
                        >
                            {year}
                        </Stack>
                    </CTypography>
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
                        education.map((edu, index) => {
                            return (
                                <SkillsCard
                                    key={Math.random()}
                                    title={edu.title}
                                    school={edu.school}
                                    year={edu.year}

                                />
                            )
                        })
                    }
                </Stack>
            </Stack>
        </Stack>
    )
}
