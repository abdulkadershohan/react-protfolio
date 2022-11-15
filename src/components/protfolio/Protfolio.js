import { Box, Stack } from "@mui/system";
import React from "react";
import { Link } from 'react-router-dom';
import chertnodes from '../../assets/images/projects/chertnodes.jpg';
import khanswers from '../../assets/images/projects/khanswers.jpg';
import madhost from '../../assets/images/projects/madhost.jpg';
import { CButton, CTypography } from "../../utility";
const cardData = [
    {
        id: 1,
        title: 'Card 1',
        skils: ['HTML', 'CSS', 'JS'],
        subtitle: 'Card 1 subtitle',
        description: 'Card 1 description',
        cardImage: chertnodes,
        liveUrl: 'https://chertnodes.com/',
        figma: "https://chertnodes.com/",
    },
    {
        id: 2,
        title: 'Card 1',
        skils: ['HTML', 'CSS', 'JS', 'React', 'Node', 'MongoDB', 'Express', 'Next', 'Redux', 'Material UI', 'Tailwind CSS'],
        subtitle: 'Card 1 subtitle',
        description: 'Card 1 description',
        cardImage: khanswers,
        liveUrl: 'https://chertnodes.com/',
        figma: "",

    },
    {
        id: 3,
        title: 'ProtectX web',
        skils: ['HTML', 'CSS', 'JS'],
        subtitle: 'Minecraft servers hosting',
        description: 'Card 1 description',
        cardImage: madhost,
        figma: "",
        liveUrl: 'https://chertnodes.com/',
    }
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
                                <CTypography
                                    fontSize={24}
                                    fontWeight={500}
                                >
                                    {item.title}
                                </CTypography>
                                <CTypography
                                    fontSize={16}
                                    fontWeight={400}
                                    color="#ABB2BF"
                                >
                                    {item.description}
                                </CTypography>
                                <Box
                                    display="flex"
                                    gap={2}
                                >
                                    <CButton
                                        btnTitle="Live =>"
                                    />
                                    {
                                        item.figma && <CButton
                                            btnTitle="Figma =>"
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
        <Stack>
            <Stack
                direction="row"
                justifyContent="space-between"
                py={4}
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
            <ProjectCard />
        </Stack>
    )
}
