import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../../style/theme"
import { graphql, Link } from "gatsby"

import { WideSection } from "../../style/organisms/Sections"
import { H1 } from "../../style/atoms/Headings"
import { Breadcrumb, CrumbLink } from "../../style/molecules/Breadcrumb"

import meImg from "./portfolioSection1/me.jpg"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: minmax(30px, auto) minmax(70px, auto) minmax(80px, auto) 1rem minmax(
      25px,
      auto
    );
  grid-template-areas:
    ". picture breadcrumb breadcrumb . ."
    ". picture name name name ."
    ". . description description description ."
    ". . . . . ."
    ". links links links links .";
  align-items: center;

  h1,
  p {
    margin-top: 0;
    padding-left: 1rem;
  }

  ${({ theme }) => theme.media.phone} {
    grid-template-columns: 0.5fr repeat(4, 1fr) 0.5fr;
    grid-template-rows: minmax(60px, auto) minmax(70px, auto) minmax(80px, auto) 1rem minmax(
        25px,
        auto
      );
    grid-template-areas:
      ". picture breadcrumb breadcrumb . ."
      ". name name name name ."
      ". description description description description ."
      ". . . . . ."
      "links links links links links links";
    h1,
    p {
      padding-left: 0;
    }
  }
`

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  grid-area: links;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.phone} {
    padding: 0 0.5rem;
  }
`

const Img = styled.img`
  grid-area: picture;
  border-radius: 50%;
`

export default function PortfolioSection_1({ cvPdf }) {
  return (
    <ThemeProvider theme={theme}>
      <WideSection>
        <Container>
          <H1 style={{ gridArea: "name", marginTop: "0", lineHeight: "1.1" }}>
            Nazywam się Mateusz Kozłowski
          </H1>
          <p style={{ gridArea: "description" }}>
            Tworzę szeroko rozumiany front-end
            <br />
            Lubię tworzyć świadome treści
            <br />
            Dbam o jak najlepsze doświadczenia
            <br />
            Studiuję Psychologię na SWPS
            <br />
            Pracowałem w Polsce i za granicą
          </p>
          <Breadcrumb>
            <li>
              <CrumbLink to="/portfolio">Portfolio</CrumbLink>
            </li>
          </Breadcrumb>
          <Img src={meImg} />
          <Links>
            <a
              href={cvPdf}
              style={{ marginTop: "2rem", gridArea: "CV", textAlign: "center" }}
            >
              pobierz CV w PDF
            </a>
            <a
              href="#mainsection"
              style={{
                marginTop: "2rem",
                gridArea: "scrolldown",
                textAlign: "center",
              }}
            >
              kliknij, aby przewinąć w dół
              <br />
            </a>
            <a
              href="mailto:mateusz@codeforheaven.com"
              style={{
                marginTop: "2rem",
                gridArea: "kontakt",
                textAlign: "center",
              }}
            >
              E-mail
            </a>
          </Links>
        </Container>
      </WideSection>
    </ThemeProvider>
  )
}
