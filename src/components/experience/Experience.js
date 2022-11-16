import { Box, Stack } from "@mui/system";
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { CTypography } from "../../utility";
const experience = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Taqwah Digital",
        hireFor: "React & React Native",
        year: "NOV 2021 - APR 2022",
        role: [
            "Responsible for Develop the Front-end of Web Application.",
            "Responsible for Develop the Front-end of Mobile App",
            "Responsible for debugging and testing Web Application & Mobile Application",
            "Responsible for feature extraction from UI/UX design or Reference Website or Apps",
        ],
        address: "Mirpur-2, Dhaka 1216",


    }, {
        id: 2,
        title: "Frontend Engineer",
        company: "RBS Tech Limited",
        year: "MAY 2022 - PRESENT",
        hireFor: "React & React Native",
        role: [
            "Working on RBS ERP Project(React JS)- ongoing",
            "Working on RBS OTT Platform APP(React Native).-closed",
            "Team work",
            "Responsible for API Integration, Project Management etc."
        ],
        address: "House# TA-99, 8th Floor, Gulshan Link Tower, Gulshan-Badda Link Road, Dhaka-1212",
    }
]

export default function Experience() {
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
                                experience
                            </span>

                        </CTypography>
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
            </Stack>

        )
    }
    const ExperienceCard = ({ title, company, year, role, address, hireFor }) => {
        return (
            <Box
                sx={{
                    border: '1px solid #ABB2BF',
                    display: 'inline-block',
                    // minWidth: '600px',
                    // maxWidth: '700px',
                    // minWidth: {
                    //     xs: '300px',
                    //     sm: '500px',
                    //     md: '700px',
                    // },
                    // maxWidth: {
                    //     xs: '600px',
                    //     sm: '500px',
                    //     md: '700px',

                    // },
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
                        <span style={{
                            color: "#C778DD",
                            fontWeight: 700,

                        }}>
                            {"\t"} {'('} {hireFor}{')'}
                        </span>
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
                    </CTypography>
                </Box>
                <Box
                    sx={{
                        borderBottom: '1px solid #ABB2BF',
                        p: 1,
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <CTypography
                        fontSize={16}
                        fontWeight={700}
                        text={company}

                    />
                    <CTypography
                        fontSize={12}
                        fontWeight={400}
                        text={address}
                        color='#ABB2BF'
                    />
                </Box>
                <Box
                    // component={"ul"}
                    sx={{
                        p: 1,
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        justifyContent: 'start',
                        alignItems: 'start',

                    }}
                >

                    {
                        role.map((item, index) => {
                            return (
                                <CTypography
                                    component={"li"}
                                    fontSize={14}
                                    fontWeight={500}
                                    text={item}
                                    color='#ABB2BF'
                                />
                            )
                        })
                    }

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
                        experience.map((item, index) => {
                            return (
                                <ExperienceCard
                                    key={Math.random()}
                                    title={item.title}
                                    company={item.company}
                                    year={item.year}
                                    role={item.role}
                                    address={item.address}
                                    hireFor={item.hireFor}

                                />
                            )
                        })
                    }
                </Stack>
            </Stack>
        </Stack>
    )
}