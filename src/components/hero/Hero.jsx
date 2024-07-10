import { Container, Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import dotLight from "../../assets/images/dot.svg";
import dotDark from "../../assets/images/dotDark.svg";
import hero from "../../assets/images/hero.png";
import logoOutline from "../../assets/images/logoOutline.svg";
import { CButton, CTypography } from "../../utility";
import About from "../about/About";
import Contacts from "../contacts/Contacts";
import Protfolio from "../protfolio/Protfolio";
import Skils from "../skils/Skils";
import styles from "./hero.module.css";
const heroTopSectionData = {
  title: {
    title1: "Abdul Kader",
    title2: "is a",
    title3: "Frontend Engineer",
    title4: "&",
    title5: "React Native",
    title6: "developer!",
  },
  subtitle: `Experienced React JS Developer and adept MERN stack developer skilled in building robust web and mobile
applications using MongoDB, Express, React.js, Next.js, and Node.js. Proficient in creating professional mobile
solutions with a strong focus on user experience. Passionate about delivering user-centric experiences through
technology and dedicated to crafting high-quality applications.`,
  image: hero,
  doing: {
    text: "Currently working on",
    url: 'https://vitlous.com/',
    urlText: 'RBS ERP'
  },
  blockquote: {
    quoteText1: "Experience is",
    quoteText2: "the name",
    quoteText3: "everyone",
    quoteText4: "gives to their mistakes",
    quoteBy: "Oscar Wilde",
  }


}

export default function Hero() {
  const {
    title: { title1, title2, title3, title4, title5, title6 },
    subtitle,
    doing: { text, url, urlText },
    blockquote: { quoteText1, quoteText2, quoteText3, quoteText4, quoteBy },
    image } = heroTopSectionData;
  const { mode, mainBgColorDark, mainBgColorLight, textDark, textLight, textWhite, textGray } = useSelector(state => state.theme)
  const isDark = Boolean(mode === 'dark')
  return (
    <Container maxWidth="xl">
      <Stack >
        <Grid container spacing={2}
          sx={{
            alignItems: "center",
          }}
        >
          <Grid item xs={12} md={6} >
            <Stack spacing={2}>
              <CTypography
                text={title1}
                fontWeight={600}
                fontSize={'32px'}

              > {title2}
                {<br />}
                <span style={{
                  color: "#C778DD",
                  fontWeight: 700,

                }}>
                  {title3} {"\t"}
                </span>
                {title4} {<br />}
                <span color="#C778DD"
                  style={{
                    color: "#C778DD",
                    fontWeight: 700,

                  }}
                >
                  {"\t"} {title5} {"\t"}
                </span>
                {title6}
              </CTypography>
              <CTypography
                color={isDark ? textLight : textDark}
                fontSize={'16px'}
                fontWeight={400}
              >{subtitle}
              </CTypography>
              <Box pt={2}>
                <CButton
                  component={Link}
                  to="/contact"
                >
                  Contact Me ={'>'}
                </CButton>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                px: { xs: 0, md: 2, lg: 12 },
              }}
            >
              <Box
                component={'img'}
                src={logoOutline} alt=""
                style={{
                  fontSize: "32px",
                  width: 200,
                  height: 200,
                  position: "absolute",
                  top: '10%',
                  zIndex: 1,
                  aspectRatio: "1/1",
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  borderBottom: "1px solid #C778DD",
                  display: "block",
                  maxWidth: "100%",
                }}
              >
                <LazyLoadImage
                  alt={"hero_img"}
                  effect="blur"
                  src={image}
                  width={"100%"}
                  height={"100%"}
                />
              </Box>

              <Box
                sx={{
                  padding: "8px",
                  border: " 1px solid #ABB2BF",
                  color: isDark ? textLight : textDark,

                  margin: "0px auto",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  top: -"1px",
                  zIndex: 3,
                  gap: "8px",
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    content: "",
                    display: "inline-blocl",
                    aspectRatio: "1/1",
                    width: "16px",
                    backgroundColor: "#C770DB1A",
                    border: "1px solid #C778DD",
                  }}
                ></span>
                {text}
                <a href={url} target="_blank" rel="noreferrer"
                  style={{
                    color: "#C778DD",
                  }}
                >
                  {urlText}
                </a>
              </Box>
              <Box
                sx={{
                  ":after": {
                    content: '""',
                    // display: 'block',
                    backgroundImage: `url(${isDark ? dotLight : dotDark})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    top: '40%',
                    left: '70%',
                    bottom: 30,
                    width: 100,
                    height: 100,
                    zIndex: 0

                  },
                }}
              />
            </Box>

          </Grid>
        </Grid >
        <div className={styles.blockquoteWrapper}>
          <div className={styles.blockquote}>
            <h1>
              {quoteText1}  <span
                style={{ color: isDark ? textWhite : textDark }}
              >{quoteText2}</span> {quoteText3} <span
                style={{ color: isDark ? textWhite : textDark }}

              >  {quoteText4}</span>
            </h1>
            <h4
              style={{
                color: isDark ? textWhite : textDark
              }}
            >—{quoteBy}<br />
              {/* <em>Web Site Usability: A Designer's Guide</em> */}
            </h4>
          </div>
        </div>
        <Protfolio />
        <Skils />
        <About />
        <Contacts />

      </Stack >
    </Container>
  )
}