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

import cytat1 from "./findIt/cytat-1.jpg"
import cytat2 from "./findIt/cytat-2.jpg"
import cytat3 from "./findIt/cytat-3.jpg"
import starybrief from "./findIt/brief-stara-appka.jpg"
import findItBrief from "./findIt/find-it-brief.jpg"

const Main = styled.main`
  margin-top: 2rem;
`

const TrippleDiv = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Img30 = styled.img`
  width: 33%;
  min-width: 200px;
  max-width: 420px;
`

export default function FindIt() {
  const myHelmetData = {
    description: "Portfolio - Lednica2000 - Mateusz Kozłowski",
    domain: "https://codeforheaven.com",
    externalScriptsUrls: [],
    facebookThumbnail: "",
    title: "Portfolio - Lednica2000 - Mateusz Kozłowski",
    slug: "portfolio/lednica",
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
            <TrippleDiv>
              <Img30 src={cytat1} />
              <Img30 src={cytat2} />
              <Img30 src={cytat3} />
              <img src={starybrief} style={{ width: "100%" }} />
            </TrippleDiv>
            <p>
              Od tamtej pory wspólnie pracujemy, aby zrealizować wizję, nad
              którą dyskutowaliśmy wieczorami. W pracy wykorzystujemy wszystko,
              o czym dowiedzieliśmy się w trakcie konferencji i warsztatów.
            </p>
            <p>
              Po wstępnej dyskusji w naszym własnym gronie przyszedł czas na
              poszerzenie horyzontów. Przygotowaliśmy ankietę i rozesłaliśmy ją
              wśród znajomych oraz do grup gromadzących osoby z branży
              kreatywnej i informatycznej.
            </p>
            <p>
              Na podstawie wyników ankiety, których liczba przerosła nasze
              oczekiwania, opracowaliśmy persony i zaplanowaliśmy kluczowe
              funkcjonalności. Podsumowaniem pracy badawczej było stworzenie
              briefu. W tym celu, po tygodniach pracy zdalnej, spotkaliśmy się w
              Warszawie <em>na żywo</em>.
            </p>
            {/* </RegularSection>
          <FullWidthSection> */}
            <img src={findItBrief} />
            {/* </FullWidthSection>
            <RegularSection> */}
            <p>
              Obecnie tworzymy pierwsze <em>low-fidelity wireframes</em>.
              Kolejnym etapem będzie przełożenie ich na interaktywne makiety. Z
              ich pomocą będziemy mogli przeprowadzić pierwsze testy.
            </p>
          </RegularSection>
        </Main>
      </ThemeProvider>
    </>
  )
}
