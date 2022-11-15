import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/images/hero.png";
import logoOutline from "../../assets/images/logoOutline.svg";
import { CButton, CTypography } from "../../utility";
import Protfolio from "../protfolio/Protfolio";
import styles from "./hero.module.css";
export default function Hero() {
  return (
    <Stack>
      <Grid container spacing={2}
        sx={{
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={6}
          spacing={2}
        >
          <CTypography
            text="I'm "
            fontWeight={600}
            fontSize={'32px'}

          >A React
            {<br />}
            <span style={{
              color: "#C778DD",
              fontWeight: 700,

            }}>
              Frontend Engineer {"\t"}
            </span>
            & {<br />}
            <span color="#C778DD"
              style={{
                color: "#C778DD",
                fontWeight: 700,

              }}
            >
              {"\t"} React Native {"\t"}
            </span>
            developer
          </CTypography>
          <CTypography
            color={"#ABB2BF"}
            fontSize={'16px'}
            fontWeight={400}
          >
            I'm a Frontend Engineer with 1 years of experience in React and React Native. I'm passionate about building scalable and maintainable web applications.
          </CTypography>
          <Stack py={1} />
          <CButton
            component={Link}
            to="/contact"
          >
            Contact Me
          </CButton>
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
            <img src={hero} alt="hero_img"

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
              Currently working on
              <a href="https://www.thesocialcomment.com/" target="_blank" rel="noreferrer">
                RBS ERP
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
            Experience is  <span style={{ color: '#ffffff' }}>the name</span> everyone <span style={{ color: '#ffffff' }}>  gives to their  mistakes</span>
          </h1>
          <h4>—Oscar Wilde<br />
            {/* <em>Web Site Usability: A Designer's Guide</em> */}
          </h4>
        </div>
      </div>
      <Protfolio />
    </Stack >
  )
}
