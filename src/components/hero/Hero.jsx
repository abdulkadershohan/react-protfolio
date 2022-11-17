import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/images/hero.png";
import logoOutline from "../../assets/images/logoOutline.svg";
import { CButton, CTypography } from "../../utility";
import About from "../about/About";
import Contacts from "../contacts/Contacts";
import Protfolio from "../protfolio/Protfolio";
import Skils from "../skils/Skils";
import styles from "./hero.module.css";

const heroTopSection = {
  title: {
    title1: "I'm",
    title2: "A React",
    title3: "Frontend Engineer",
    title4: "&",
    title5: "React Native",
    title6: "developer!",
  },
  subtitle: `I'm a Frontend Engineer with 1 years of experience in React and React Native. I'm passionate about building scalable and maintainable web applications.`,
  image: hero,
  doing: {
    text: "Currently working on",
    url: 'http://161.97.157.117:5001/',
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
    image } = heroTopSection;
  return (
    <Stack>
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
              color={"#ABB2BF"}
              fontSize={'16px'}
              fontWeight={400}
            >{subtitle}
            </CTypography>
            <Box>
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
            <img src={logoOutline} alt=""
              style={{
                fontSize: "32px",
                width: '30vmin',
                position: "absolute",
                top: '10%',
                zIndex: 1,
                aspectRatio: "1/1",
              }}
            />
            <img src={image} alt="hero_img"

              style={{
                position: 'relative',
                zIndex: 2,
                borderBottom: "1px solid #C778DD",
                display: "block",
                maxWidth: "100%",
              }}
            />
            <Box
              sx={{
                padding: "8px",
                border: " 1px solid #ABB2BF",
                color: " #ABB2BF",
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
              <a href={url} target="_blank" rel="noreferrer">
                {urlText}
              </a>
            </Box>
            <svg
              style={{
                position: "absolute",
                top: '40%',
                width: "12vmin",
                left: "70%",
                zIndex: 4,
              }}
              width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2" cy="2" r="2" fill="#ABB2BF" />
              <circle cx="22" cy="2" r="2" fill="#ABB2BF" />
              <circle cx="42" cy="2" r="2" fill="#ABB2BF" />
              <circle cx="62" cy="2" r="2" fill="#ABB2BF" />
              <circle cx="82" cy="2" r="2" fill="#ABB2BF" />
              <circle cx="2" cy="22" r="2" fill="#ABB2BF" />
              <circle cx="22" cy="22" r="2" fill="#ABB2BF" />
              <circle cx="42" cy="22" r="2" fill="#ABB2BF" />
              <circle cx="62" cy="22" r="2" fill="#ABB2BF" />
              <circle cx="82" cy="22" r="2" fill="#ABB2BF" />
              <circle cx="2" cy="42" r="2" fill="#ABB2BF" />
              <circle cx="22" cy="42" r="2" fill="#ABB2BF" />
              <circle cx="42" cy="42" r="2" fill="#ABB2BF" />
              <circle cx="62" cy="42" r="2" fill="#ABB2BF" />
              <circle cx="82" cy="42" r="2" fill="#ABB2BF" />
              <circle cx="2" cy="62" r="2" fill="#ABB2BF" />
              <circle cx="22" cy="62" r="2" fill="#ABB2BF" />
              <circle cx="42" cy="62" r="2" fill="#ABB2BF" />
              <circle cx="62" cy="62" r="2" fill="#ABB2BF" />
              <circle cx="82" cy="62" r="2" fill="#ABB2BF" />
              <circle cx="2" cy="82" r="2" fill="#ABB2BF" />
              <circle cx="22" cy="82" r="2" fill="#ABB2BF" />
              <circle cx="42" cy="82" r="2" fill="#ABB2BF" />
              <circle cx="62" cy="82" r="2" fill="#ABB2BF" />
              <circle cx="82" cy="82" r="2" fill="#ABB2BF" />
            </svg>
          </Box>

        </Grid>
      </Grid >
      <div className={styles.blockquoteWrapper}>
        <div className={styles.blockquote}>
          <h1>
            {quoteText1}  <span style={{ color: '#ffffff' }}>{quoteText2}</span> {quoteText3} <span style={{ color: '#ffffff' }}>  {quoteText4}</span>
          </h1>
          <h4>—{quoteBy}<br />
            {/* <em>Web Site Usability: A Designer's Guide</em> */}
          </h4>
        </div>
      </div>
      <Protfolio />
      <Skils />
      <About />
      <Contacts />
    </Stack >
  )
}
