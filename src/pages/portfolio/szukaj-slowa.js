import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Breadcrumb, CrumbLink } from "../../style/molecules/Breadcrumb"
import { H1, H2 } from "../../style/atoms/Headings"
import MyHelmet from '../../style/components/MyHelmet';
import { theme } from "../../style/theme"
import GlobalStyle from "../../style/organisms/GlobalStyle"
import { StyledHeader } from "../../style/organisms/Header"
import { RegularSection, FullWidthSection } from "../../style/organisms/Sections"

import szukajSlowaWebM from "./szukajSlowa/szukajSlowa.webm"
import szukajSlowaMP4 from "./szukajSlowa/szukajSlowa.mp4"

const Main = styled.main`
  margin-top: 2rem;
`;

export default function SzukajSlowa() {
  const myHelmetData = {
    description: "Portfolio - Lednica2000 - Mateusz Kozłowski",
    domain: "https://codeforheaven.com",
    externalScriptsUrls: [],
    facebookThumbnail: "",
    title: "Portfolio - Lednica2000 - Mateusz Kozłowski",
    slug: "portfolio/lednica",
  };


  return (
    <>
    <MyHelmet data={myHelmetData} />
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledHeader>
          <H1 style={{order: "2"}}>Aplikacja Szukaj Słowa</H1>
          <Breadcrumb style={{order: "1", width: "100%", paddingLeft: "0"}}>
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
          <p style={{ textAlign: "center"}}>
                <video autoplay loop muted playsinline style={{maxWidth: "600px", display: "block", margin: "0 auto"}} >
                  <source src={szukajSlowaWebM} type="video/webm" />
                  <source src={szukajSlowaMP4} type="video/mp4" />
              </video>
              <span style={{fontSize: "0.8rem"}}>Sposób działania aplikacji</span>
            </p>
          </RegularSection>
        </Main>
  </ThemeProvider>
  </>
  )
}