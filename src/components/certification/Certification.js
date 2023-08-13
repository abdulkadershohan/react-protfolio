import { Box, Chip, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import courseCertificate from '../../assets/images/certification/LWS-Certificate.png';
import recommendation from '../../assets/images/certification/LWS-Recommendation-Letter.png';
import courseReport from '../../assets/images/certification/LWS-Report-Card.png';
import { CTypography } from "../../utility";

const data = {
    title: 'Think in A Redux way',
    platform: 'Learn with Sumit Platform',
    tag: ['REDUX', 'REACT - REDUX', ' REDUX - TOOLKIT', 'REDUX - THUNK', 'RTK QUERY', 'RESELECT'],
    feedback: 'MD. Abdul Kader participated in Learn with Sumit Platform presents "Think in a Redux Way" course and performed exceptionally well. He completed all the modules very seriously and participated in all the quizzes & all the assignments with excellent results. He appeared in the Final Examination of the course and scored 96% marks. Learn with Sumit Platform believes he can be an excellent resource for any web development company. We wish him continued success in life.',
    courseCertificate: courseCertificate,
    courseReport: courseReport,
    recommendation: recommendation,
}
export default function Certification() {
    const navigate = useNavigate();
    const { mode, textDark, textLight, textWhite, textGray } = useSelector(state => state.theme)
    const isDark = Boolean(mode === 'dark')
    const Header = () => {
        return (
            <>
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
                                certification
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
                    color={isDark ? textLight : textGray}
                >
                    My Certifications
                </CTypography>
            </>
        )
    }
    const getColor = (index) => {
        switch (index) {
            case 0:
                return 'primary';
            case 1:
                return 'secondary';
            case 2:
                return 'success';
            case 3:
                return 'warning';
            case 4:
                return 'error';
            default:
                return 'primary';
        }

    }
    return (
        <Container maxWidth='xl'>
            <Stack pb={8}>
                <Header />
                <Stack
                    mt={4}
                    p={2}
                    borderRadius={2}
                    sx={{
                        backgroundColor: isDark ? '#2E3440' : '#f5f5f5',
                    }}

                >
                    <CTypography>
                        {data?.title} by {' '}
                        <a href="https://learnwithsumit.com/certificates/verify/LWSCTXN-SNT7PO6I" target="_blank" rel="noreferrer"
                            title="Click to verify the certificate"
                        >
                            <font color={'#C778DD'}>{data?.platform}</font>
                        </a>
                    </CTypography>
                    <Stack
                        width={'100%'}
                        height={'1px'}
                        mt={2}
                        backgroundColor={'#ABB2BF'}
                    />
                    <CTypography
                        color={isDark ? textLight : textGray}
                        fontSize={16}
                        fontWeight={400}
                        mt={2}
                    >
                        Topics i learned from this course
                    </CTypography>
                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        gap={2}
                        py={2}
                    >
                        {
                            data?.tag?.map((item, index) => (
                                <Chip key={index} label={item}
                                    size="small"
                                    color={getColor(index)}
                                />
                            ))
                        }
                    </Stack>
                    <Stack
                        width={'100%'}
                        height={'1px'}
                        mt={2}
                        backgroundColor={'#ABB2BF'}
                    />
                    <CTypography
                        color={isDark ? textWhite : textDark}
                        fontSize={16}
                        fontWeight={400}
                        mt={2}
                    >
                        Course instructor feedback
                    </CTypography>
                    <CTypography
                        color={isDark ? textLight : textGray}
                        fontSize={14}
                        fontWeight={400}
                        my={2}
                    >
                        {data?.feedback}
                    </CTypography>

                    <Stack direction="row"
                        justifyContent="center"
                        flexWrap="wrap"
                        // alignItems="center"
                        gap={2}
                        p={2}
                        border={'1px solid #ABB2BF'}
                        pb={4}

                    >
                        <Stack
                            width={{
                                xs: '100%',
                                sm: '100%',
                                md: '30%'
                            }}
                        >
                            <CTypography
                                color={isDark ? textWhite : textDark}
                                fontSize={16}
                                fontWeight={400}
                                pb={2}
                            >
                                Course Certificate
                            </CTypography>
                            <Box
                                sx={{
                                    aspectRatio: '16/9',
                                    borderBottom: '1px solid #ABB2BF',
                                    display: 'block',
                                    width: '100%',
                                    height: '400px',
                                    borderRadius: '10px',
                                    overflow: 'hidden'
                                }}
                            >
                                <LazyLoadImage
                                    alt="certificate"
                                    effect="blur"
                                    src={data?.courseCertificate}
                                    width={"100%"}
                                    height={"100%"}
                                />
                            </Box>
                        </Stack>
                        <Stack
                            width={{
                                xs: '100%',
                                md: '30%'
                            }}
                        >
                            <CTypography
                                color={isDark ? textWhite : textDark}

                                fontSize={16}
                                fontWeight={400}
                                pb={2}
                            >
                                Course Report
                            </CTypography>
                            <Box
                                sx={{
                                    aspectRatio: '16/9',
                                    borderBottom: '1px solid #ABB2BF',
                                    display: 'block',
                                    width: '100%',
                                    height: '400px',
                                    borderRadius: '10px',
                                    overflow: 'hidden'
                                }}
                            >
                                <LazyLoadImage
                                    alt="certificate"
                                    effect="blur"
                                    src={data?.courseReport}
                                    width={"100%"}
                                    height={"100%"}

                                />
                            </Box>
                        </Stack>
                        <Stack
                            width={{
                                xs: '100%',
                                sm: '100%',
                                md: '30%'
                            }}
                        >
                            <CTypography
                                color={isDark ? textWhite : textDark}
                                fontSize={16}
                                fontWeight={400}
                                pb={2}
                            >
                                Recommendation Letter
                            </CTypography>
                            <Box
                                sx={{
                                    aspectRatio: '16/9',
                                    borderBottom: '1px solid #ABB2BF',
                                    display: 'block',
                                    width: '100%',
                                    height: '400px',
                                    borderRadius: '10px',
                                    overflow: 'hidden'
                                }}
                            >
                                <LazyLoadImage
                                    alt="certificate"
                                    effect="blur"
                                    src={data?.recommendation}
                                    width={"100%"}
                                    height={"100%"}
                                />
                            </Box>
                        </Stack>
                    </Stack>


                </Stack >


            </Stack >
        </Container>
    )
}