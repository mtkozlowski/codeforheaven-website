import React from "react"
import { graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import Img from "gatsby-image"

import { theme } from "../../style/theme"

import { H1, H2, H3 } from "../../style/atoms/Headings"
import ImageCaptionParagraph from "../../style/atoms/ImageCaptionParagraph"

import { Breadcrumb, CrumbLink } from "../../style/molecules/Breadcrumb"

import MyHelmet from "../../style/components/MyHelmet"

import GlobalStyle from "../../assets/styles/GlobalStyle"
import { StyledHeader } from "../../style/organisms/Header"
import { RegularSection } from "../../style/organisms/Sections"
import Footer from "../../style/organisms/Footer"

const Main = styled.main`
  margin-top: 2rem;
`

export default function FindIt({ data }) {
  const { BriefStaraAppka, FindItBrief, Ankieta } = data

  const myHelmetData = {
    description: "Portfolio - Find.it - Mateusz Kozłowski",
    domain: "https://codeforheaven.com",
    externalScriptsUrls: [],
    facebookThumbnail: "",
    title: "Portfolio - Find.it - Mateusz Kozłowski",
    slug: "portfolio/find-it",
  }

  return (
    <>
      <MyHelmet data={myHelmetData} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledHeader>
          <H1 style={{ order: "2" }}>Projekt Find.it</H1>
          <Breadcrumb style={{ order: "1", width: "100%", paddingLeft: "0" }}>
            <li>
              <CrumbLink to="/portfolio">Portfolio</CrumbLink>
            </li>
            <li>
              <CrumbLink to="/portfolio/find-it">Find.it</CrumbLink>
            </li>
          </Breadcrumb>
        </StyledHeader>
        <Main>
          <RegularSection>
            <p>
              Find.it to aplikacja pozwalająca użytkownikom znaleźć odpowiednich
              ludzi do wspólnej realizacji ciekawych pet projektów. Pomysł
              projektu narodził się w naszej grupce warsztatowej na koniec
              konferencji Elementarz UX.
            </p>
            <ImageCaptionParagraph>
              <Img fluid={BriefStaraAppka.childImageSharp.fluid} />
              <span>
                Praca podczas warsztatów nad aplikacją, która dała impuls do
                stworzenia Find.it
              </span>
            </ImageCaptionParagraph>
            <p>
              Od tamtej pory wspólnie pracujemy, aby zrealizować wizję, nad
              którą dyskutowaliśmy wieczorami. W pracy wykorzystujemy wszystko,
              o czym dowiedzieliśmy się w trakcie konferencji i warsztatów.
            </p>
            <H3>Ankieta</H3>
            <p>
              Po wstępnej dyskusji w naszym własnym gronie przyszedł czas na
              poszerzenie horyzontów. Przygotowaliśmy{" "}
              <a href="https://forms.gle/oQujStkvY6pJy89B8">ankietę</a> i
              rozesłaliśmy ją wśród znajomych oraz do grup gromadzących osoby z
              branży kreatywnej i informatycznej.
            </p>
            <ImageCaptionParagraph>
              <Img fluid={Ankieta.childImageSharp.fluid} />
            </ImageCaptionParagraph>
            <H3>Brief</H3>
            <p>
              Na podstawie wyników ankiety, których liczba przerosła nasze
              oczekiwania, opracowaliśmy persony i zaplanowaliśmy kluczowe
              funkcjonalności. Podsumowaniem pracy badawczej było stworzenie
              briefu. W tym celu, po tygodniach pracy zdalnej, spotkaliśmy się w
              Warszawie <em>na żywo</em>.
            </p>
            <ImageCaptionParagraph>
              <Img fluid={FindItBrief.childImageSharp.fluid} />
              <span>
                Brief aplikacji Find.it - podsumowaniem dotychczasowej pracy
              </span>
            </ImageCaptionParagraph>
            <H2>Plany</H2>
            <p>
              Obecnie tworzymy pierwsze <em>low-fidelity wireframes</em>.
              Kolejnym etapem będzie przełożenie ich na interaktywne makiety. Z
              ich pomocą będziemy mogli przeprowadzić pierwsze testy.
            </p>
          </RegularSection>
        </Main>
        <Footer>
          <Breadcrumb style={{ paddingLeft: "0" }}>
            <li>
              <CrumbLink to="/portfolio">Portfolio</CrumbLink>
            </li>
            <li>
              <CrumbLink to="/portfolio/find-it">Find.it</CrumbLink>
            </li>
          </Breadcrumb>
        </Footer>
      </ThemeProvider>
    </>
  )
}

export const pageQuery = graphql`
  {
    BriefStaraAppka: file(name: { eq: "findIt__brief-stara-appka" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    FindItBrief: file(name: { eq: "findIt__brief" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Ankieta: file(name: { eq: "findIt__ankieta" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
