import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Breadcrumb, CrumbLink } from "../../style/molecules/Breadcrumb"
import { H1, H2 } from "../../style/atoms/Headings"
import MyHelmet from '../../style/components/MyHelmet';
import { theme } from "../../style/theme"
import GlobalStyle from "../../style/organisms/GlobalStyle"
import { StyledHeader } from "../../style/organisms/Header"

const Main = styled.main`
  margin-top: 2rem;
`;

export default function FindIt() {
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
          <H1 style={{order: "2"}}>Projekt Find.it</H1>
          <Breadcrumb style={{order: "1", width: "100%", paddingLeft: "0"}}>
            <li>
              <CrumbLink to="/portfolio">Portfolio</CrumbLink>
            </li>
            <li>
              <CrumbLink to="/portfolio/find-it">Find.it</CrumbLink>
            </li>
          </Breadcrumb>
        </StyledHeader>
        <Main>
        </Main>
  </ThemeProvider>
  </>
  )
}