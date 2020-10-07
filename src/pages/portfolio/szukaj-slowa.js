import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Breadcrumb, CrumbLink } from "../../style/molecules/Breadcrumb"
import { H1, H2 } from "../../style/atoms/Headings"
import MyHelmet from "../../style/components/MyHelmet"
import { theme } from "../../style/theme"
import GlobalStyle from "../../style/organisms/GlobalStyle"
import { StyledHeader } from "../../style/organisms/Header"
import {
  RegularSection,
  FullWidthSection,
} from "../../style/organisms/Sections"
import Footer from "../../style/organisms/Footer"

import szukajSlowaWebM from "./szukajSlowa/szukajSlowa.webm"
import szukajSlowaMP4 from "./szukajSlowa/szukajSlowa.mp4"

const Main = styled.main`
  margin-top: 2rem;
`

export default function SzukajSlowa() {
  const myHelmetData = {
    description: "Portfolio - Szukaj Slowa - Mateusz Kozłowski",
    domain: "https://codeforheaven.com",
    externalScriptsUrls: [],
    facebookThumbnail: "",
    title: "Portfolio - Szukaj Slowa - Mateusz Kozłowski",
    slug: "portfolio/szukaj-slowa",
  }

  return (
    <>
      <MyHelmet data={myHelmetData} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledHeader>
          <H1 style={{ order: "2" }}>Aplikacja Szukaj Słowa</H1>
          <Breadcrumb style={{ order: "1", width: "100%", paddingLeft: "0" }}>
            <li>
              <CrumbLink to="/portfolio">Portfolio</CrumbLink>
            </li>
            <li>
              <CrumbLink to="/portfolio/szukaj-slowa">Szukaj Słowa</CrumbLink>
            </li>
          </Breadcrumb>
        </StyledHeader>
        <Main>
          <RegularSection>
            <p>
              To mój autorski, fullstackowy projekt aplikacji przeznaczonej do
              wyszukiwania komentarzy biblijnych za pomocą specyficznych
              odnośników do wersetów, tzw. sigli. Projekt jest rozwijany
              wspólnie ze społecznością chrześcijan, którzy zgłaszali się na
              grupach w mediach społecznościowych.
            </p>
            <p style={{ textAlign: "center" }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  maxWidth: "600px",
                  display: "block",
                  margin: "0 auto",
                  width: "100%",
                }}
              >
                <source src={szukajSlowaWebM} type="video/webm" />
                <source src={szukajSlowaMP4} type="video/mp4" />
              </video>
              <span style={{ fontSize: "0.8rem" }}>
                Sposób działania aplikacji
              </span>
            </p>
          </RegularSection>
        </Main>
        <Footer>
          <Breadcrumb style={{ paddingLeft: "0" }}>
            <li>
              <CrumbLink to="/portfolio">Portfolio</CrumbLink>
            </li>
            <li>
              <CrumbLink to="/portfolio/szukaj-slowa">Szukaj Słowa</CrumbLink>
            </li>
          </Breadcrumb>
        </Footer>
      </ThemeProvider>
    </>
  )
}
