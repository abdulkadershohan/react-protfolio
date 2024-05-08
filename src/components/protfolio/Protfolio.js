import { Chip } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { CButton, CTypography } from "../../utility";
const homeProtfolioData = [
    {
        id: 8,
        title: 'Evibe E-commerce',
        skils: ["MERN Stack", "RTK Query", "Facebook Pixel", "Nodemailer", "Cloudinary", "TypeScript", "JavaScript",],
        description: 'Evibe an eCommerce platform tailored specifically for online shoe stores!',
        cardImage: require('../../assets/images/projects/ecommarce-3.png'),
        figma: "",
        isPrivate: true,
        liveUrl: 'https://friend-shoes-ecommerce.netlify.app/',
        youtubeUrl: 'https://youtu.be/h2SX4VHQHlE',
    },
    {
        id: 1,
        title: 'Upcopo',
        skils: ["React Native", "Redux", "Redux Toolkit", "Native Base", "expo", "formik", "yup", "Google Map"],
        description: `NFTs app for Buy Virtual Real Estate.`,
        cardImage: require('../../assets/images/projects/upocopo-2.png'),
        liveUrl: '',
        youtubeUrl: 'https://www.youtube.com/watch?v=k7098_rTLlA&feature=youtu.be',
        figma: "https://www.figma.com/file/xxFZjSHJXT2yrQwS68DCDm/Upcopo?node-id=412%3A712",
        githubUrl: '',
        isPrivate: true
    },
    // {
    //     id: 2,
    //     title: 'Brdcart',
    //     skils: ["React Native", "Redux", "Redux Toolkit", "Native Base", "expo", "formik", "yup", "Google Map"],
    //     description: 'E-commerce app',
    //     cardImage: require('../../assets/images/projects/brdchart.png'),
    //     liveUrl: '',
    //     figma: "https://www.figma.com/file/HPX2Q9k7QC0jughEcor3Ad/Bai1234?fuid=1020350840147497557",
    //     youtubeUrl: '',
    //     githubUrl: '',
    //     isPrivate: true

    // },
    {
        id: 2,
        title: 'Blockchain NFT website landing page',
        skils: ["ReactJS", 'Figma to React', 'HTML', 'CSS', "JavaScript", "Material UI",],
        description: 'Shihami is the world’s leading NFTs marketplace where you can discover, sell and bid NFTs and get rich.',
        cardImage: require('../../assets/images/projects/blockchaineNft.png'),
        figma: "",
        isPrivate: false,
        liveUrl: 'https://blockchain-nft-website-landing-page.netlify.app/',
        // youtubeUrl: 'https://www.youtube.com/watch?v=5_GNOpPsIy0',
        githubUrl: 'https://github.com/abdulkadershohan/Blockchain-NFT-Website-Landing-Page'

    },
    // {
    //     id: 3,
    //     title: 'Covid-19 Survey',
    //     skils: ["Bootstrap", "ReactJS", "EmailJS", "Styled Component",
    //         "HTML", "CSS", "JavaScript", "PHP", "MYSQL", "Axios"],
    //     description: 'Helth Care App',
    //     cardImage: require('../../assets/images/projects/covid-19.png'),
    //     figma: "",
    //     liveUrl: 'https://covid-19-survey-form-2020.netlify.app/',
    //     // youtubeUrl: 'https://www.youtube.com/watch?v=0KnPfVyOxeg&t=5s',
    //     githubUrl: "https://github.com/abdulkadershohan/COVID-19-SURVEY-FROM",
    //     isPrivate: false
    // },

]

export default function Protfolio() {
    const { mode, textDark, textLight, textWhite, textGray } = useSelector(state => state.theme)
    const isDark = Boolean(mode === 'dark')
    const ProjectCard = () => {
        return (
            <Stack direction="row"
                justifyContent="center"
                flexWrap="wrap"
                // alignItems="center"
                gap={2}
            >
                {
                    homeProtfolioData.map((item) => {
                        return (
                            <Box key={item.id}
                                sx={{
                                    border: '1px solid #ABB2BF',
                                }}
                            >
                                <Box alt=""
                                    // component="img"
                                    sx={{
                                        aspectRatio: '16/9',
                                        borderBottom: '1px solid #ABB2BF',
                                        display: 'block',
                                        width: '100%',
                                        height: '200px'
                                    }}
                                >
                                    <LazyLoadImage
                                        alt={item.title}
                                        effect="blur"
                                        src={item.cardImage}
                                        width={"100%"}
                                        height={"100%"}
                                    />
                                </Box>
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
                                                        color: isDark ? textDark : textWhite,
                                                        fontSize: '16px',
                                                        fontWeight: '400',
                                                        backgroundColor: isDark ? textLight : textGray,
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
                                    maxWidth="360px"

                                >
                                    <Box
                                        fontSize={24}
                                        fontWeight={500}
                                        color={isDark ? textWhite : textDark}

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
                                                        color: isDark ? textWhite : textDark,
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
                                        color={isDark ? textLight : textDark}
                                    >
                                        {item.description}
                                    </CTypography>
                                    <Box
                                        display="flex"
                                        gap={2}
                                        flexWrap="wrap"
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
                        fontSize={{
                            xs: 20,
                            sm: 32,
                        }}
                    >
                        <span style={{ color: isDark ? textWhite : textDark }}>
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
                    fontSize={{
                        xs: 12,
                        sm: 16,
                    }}

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
