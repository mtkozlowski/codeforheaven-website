import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { graphql } from "gatsby"

import { theme } from "../../style/theme"

import { H1, H2, H3, H5 } from "../../style/atoms/Headings"
import ImageCaptionParagraph from "../../style/atoms/ImageCaptionParagraph"

import { Breadcrumb, CrumbLink } from "../../style/molecules/Breadcrumb"
import MyHelmet from "../../style/components/MyHelmet"

import GlobalStyle from "../../assets/styles/GlobalStyle"
import { StyledHeader } from "../../style/organisms/Header"
import {
  RegularSection,
} from "../../style/organisms/Sections"
import Footer from "../../style/organisms/Footer"

const Main = styled.main`
  margin-top: 2rem;
`

export default function SzukajSlowa({data}) {
  const {szukajSlowaWebM, szukajSlowaMP4} = data;
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
              Pomysł zrodził się w mojej głowie, ponieważ Biblia jest jednym z
              moich szczególnych zainteresowań. Pociąga mnie nie tylko ze
              względu na swoje walory historyczne i literackie. Czytanie Bibli -
              czy jak powinienem ją nazwać po chrześcijańsku - Słowa Bożego było
              i jest dla mnie źródłem nadziei i otwartości, a jego poszczególne
              fragmenty są dla mnie zachętą do tworzenia wokół siebie kultury
              sprawiedliwości i równości.
            </p>
            <p>
              Gdy potrzebuję komuś szybko wytłumaczyć ogólne założenia tej
              aplikacji nazywam ją biblijnym Pinterestem. Podobnie jak ta
              platforma, Szukaj Słowa ma być bazą budowaną przez użytkowników -
              dla użytkowników.
            </p>
            <H3>Założenia</H3>
            <p>
              <ul>
                <li>
                  użytkownicy powinni być w stanie wyszukiwać video komentarze
                  na podstawie adresów fragmentów biblijnych (tzw. sigli)
                </li>
                <li>
                  użytkownicy powinni móc dodawać nowe komentarze, a aplikacja
                  powinna ściagać dodatkowe informacje, o ile to możliwe
                </li>
                <li>
                  zadania CRON powinny aktualizować bazę o nowe odcinki znanych
                  serii
                </li>
                <li>
                  użytkownicy powinni móc zapisywać ulubione komentarze w
                  playlisty
                </li>
              </ul>
            </p>
            <p>
              Aplikacja powstaje z wykorzystaniem popularnych frameworków
              Javascriptowych:
              <ul>
                <li>Front end: React</li>
                <li>Back end: Express</li>
              </ul>
            </p>
            <ImageCaptionParagraph>
              Przyklad działania aplikacji w jej podstawowej funkcjonalności:
              wyszukiwania komentarzy.
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
                <source src={szukajSlowaWebM.publicURL} type="video/webm" />
                <source src={szukajSlowaMP4.publicURL} type="video/mp4" />
              </video>
            </ImageCaptionParagraph>
            <H2>Roadmap</H2>
            <ImageCaptionParagraph>
              Lista jest na bieżąco aktualizowana.
            </ImageCaptionParagraph>
            <p>
              <ul>
                <li>
                  <s>stworzenie endpointów, dla operacji CRUD</s>
                </li>
                <li>
                  <s>walidacja sigli</s>
                </li>
                <li>
                  <s>konwersja sigli na objekt</s>
                </li>
                <li>
                  <s>
                    pobranie dodaktowych informacji o źródle dla linków
                    pochodzących z Youtube&#x27;a
                  </s>
                </li>
                <li>
                  <s>wyświetlenie listy rezultatów</s>
                </li>
                <li>
                  <s>wyświetlenie strony rezultatu</s>
                </li>
                <li>
                  <s>routing</s>
                </li>
                <li>stworzenie panelu zarządzania</li>
                <li>
                  <s>stworzenie zadań CRON dla znanych serii</s>
                </li>
                <li>
                  zaprojektowanie interfejsu użytkownika (+ testy, wdrożenie)
                </li>
                <li>
                  <s>
                    stworzenie ankiety poświęconej nawykom i potrzebom
                    użytkowników
                  </s>
                </li>
                <li>
                  opublikowanie ankiety w różnych grupach chrześcijańskich
                </li>
                <li>zebranie i analiza wyników</li>
                <li>zaplanowanie kolejnych funkcjonalności</li>
                <li>zbieranie grupy testerów</li>
                <li>testy</li>
                <li>publikacja aplikacji</li>
              </ul>
            </p>
            <H5>
              Aplikacja jest intensywnie rozwijana, dlatego powyższą stronę będę
              uzupełniał o kolejne mikro-osiągnięcia. Zapraszam ponownie.
            </H5>
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

export const query = graphql`
{
  szukajSlowaWebM: file(name: {eq: "szukajSlowa"}, extension: {eq: "webm"}) {
    publicURL
  },
  szukajSlowaMP4: file(name: {eq: "szukajSlowa"}, extension: {eq: "mp4"}) {
    publicURL
  }
}
`