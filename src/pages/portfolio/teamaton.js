import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../style/organisms/Layout"
import { RegularSection, FullWidthSection } from "../../style/organisms/Sections"
import MyHelmet from '../../style/components/MyHelmet';
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../../style/theme"
import GlobalStyle from "../../style/organisms/GlobalStyle"
import { StyledHeader } from "../../style/organisms/Header"
import { Link } from 'gatsby';
import { H1, H2 } from "../../style/atoms/Headings"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Breadcrumb, CrumbLink } from "../../style/molecules/Breadcrumb"

import biurkoImg from "./teamaton/biurko.jpg"
import lightbulb from "../../style/atoms/icons/lightbulb.svg"

import originalLogo from "./teamaton/original-logo.jpg"
import drafts from "./teamaton/drafts.jpg"
import suggestions from "./teamaton/suggestions.jpg"
import suggestions2 from "./teamaton/suggestions-2.jpg"
import coronaDrafts from "./teamaton/corona-drafts.jpg"
import coronaDrafts2 from "./teamaton/corona-drafts-2.jpg"
import coronaLogos from "./teamaton/corona-logos.jpg"
import coronaHomepage from "./teamaton/corona-homepage.jpg"

import dashboardWebM from "./teamaton/dashboard.webm"
import dashboardMP4 from "./teamaton/dashboard.mp4"
import fileSizesWebM from "./teamaton/fileSizes.webm"
import fileSizesMP4 from "./teamaton/fileSizes.mp4"
import CssGIFWebM from "./teamaton/tenor.webm"
import CssGIFMP4 from "./teamaton/tenor.mp4"
import photoUploadWebM from "./teamaton/photoUpload.webm"
import photoUploadMP4 from "./teamaton/photoUpload.mp4"


const Main = styled.main`
`

const Callout = styled.p`
  background-color: #f9f9fa;
  padding: 2rem;
`;

export default function Teamaton() {
  const myHelmetData = {
    description: "Portfolio - Teamaton - Mateusz Kozłowski",
    domain: "https://codeforheaven.com",
    externalScriptsUrls: [],
    facebookThumbnail: "",
    title: "Portfolio - Teamaton - Mateusz Kozłowski",
    slug: "portfolio/teamaton",
  };

  return (
    <>
    <MyHelmet data={myHelmetData} />
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledHeader>
          <H1 style={{order: "2"}}>Teamaton</H1>
          <Breadcrumb style={{order: "1", width: "100%", paddingLeft: "0"}}>
            <li>
              <CrumbLink to="/portfolio">Portfolio</CrumbLink>
            </li>
            <li>
              <CrumbLink to="/portfolio/teamaton">Teamaton</CrumbLink>
            </li>
          </Breadcrumb>
        </StyledHeader>
        <Main>
          <RegularSection>
            <Callout><img src={lightbulb} /> <i>Firma Teamaton tworzy aplikację pod nazwą <a href="discoverize.com">Discoverize</a>. Pozwala ona użytkownikowi stworzyć portal dowolnego rodzaju i dziedziny.</i></Callout>
            <p>
              Firma Teamaton zaprosiła mnie do współpracy tuż po tym, jak wróciłem z misji w Nowej Zelandii. Obdarzyli mnie dużym kredytem zaufania, ponieważ nie posiadałem żadnego informatycznego dyplomu. Moje portfolio zawierało przede wszystkim skrypty i aplikacje, które stworzyłem na swój własny użytek.
            </p>
            <p>
              Nie zawiodłem ich zaufania. Przez ostatnie trzy lata stworzyłem złożone rozwiązania i funkcjonalności takie jak panel statystyk lub nowoczesne narzędzie do przesyłania zdjęć.
            </p>
            <div style={{display: "flex",marginTop: "1rem", justifyContent: "space-between"}}>
              <div style={{width: "49%"}}>
                <p style={{ textAlign: "center"}}>
                  <video autoPlay loop muted playsinline style={{width: "100%"}} >
                    <source src={dashboardWebM} type="video/webm" />
                    <source src={dashboardMP4} type="video/mp4" />
                  </video>
                  <span style={{fontSize: "0.8rem"}}>Panel wraz z statystykami portalu</span>
                </p>
              </div>
              <div style={{width: "49%"}}>
                <p style={{ textAlign: "center"}}>
                  <video autoPlay loop muted playsinline style={{width: "100%"}} >
                    <source src={photoUploadWebM} type="video/webm" />
                    <source src={photoUploadMP4} type="video/mp4" />
                  </video>
                  <span span style={{fontSize: "0.8rem"}}>Pop-up umożliwiający dodanie zdjęcia użytkownikowi portalu</span>
                </p>
              </div>
            </div>
            <p>
              Kiedy otrzymałem więcej odpowiedzialności za bazę stylów, zacząłem wprowadzać nowoczesne funkcjonalności jezyka CSS. Dzięki użyciu Flexboxa i Animacji CSS interfejs użytkownika aplikacji stał się bardziej responsywny i lżejszy.
            </p>
            <p>
              Z oprogramowania Discoverize korzysta więcej niż 60 portali. Ponieważ współdzielą wiele zależności - te muszą być tworzone w przemyślany sposób. W tym celu wykorzystałem możliwości preprocesora SASS i stworzyłem bibliotekę stylów, która dostosowuje się na podstawie wprowadzonych parametrów. To rozwiązanie nie tylko zmniełszyło rozmiar skompilowanego CSSa o dziesiątki kilobajtów, ale uprościło proces debugowania styli w narzędziach developerskich.
            </p>
            <p style={{ textAlign: "center"}}>
              <span style={{fontSize: "0.8rem"}}>Jak zmieniły się rozmiary istotnych zależności w portalu</span>
                <video autoPlay loop muted playsinline style={{maxWidth: "600px", display: "block", margin: "0 auto"}} >
                  <source src={fileSizesWebM} type="video/webm" />
                  <source src={fileSizesMP4} type="video/mp4" />
              </video>
            </p>
            <p>
              Jeżeli chcieliby Państwo zobaczyć kilka z najbardziej wymagających projektów i przekonać się o zróżnicowaniu portali opartych o Discoverize, zachęcam do odwiedzenia poniższych portali:
            </p>
            <ul>
              <li><a href="https://mylauf.de/">MyLauf.de</a></li>
              <li><a href="https://werwowas.de/">WerWoWas</a></li>
              <li><a href="https://schoenheitsklinik.info/">Schoenheitsklinik</a></li>
              <li><a href="https://weconnectarts-portal.de/">We Connect Arts</a></li>
              <li><a href="https://stellplatz.info/">Stellplatz</a></li>
            </ul>
            <p>
              Wszystko, nad czym pracowałem miało być wykorzystywane przez setki właścicieli portali oraz właścicieli wpisów na tych portalach. Mnożąc liczbę ludzi razy liczbę rodzajów treści powinniśmy otrzymać ogólne pojęcie o tym, jak uniwersalne musiały być to rozwiązania.
            </p>
            <p style={{ textAlign: "center"}}>
              <video autoPlay loop muted playsinline style={{maxWidth: "600px", display: "block", margin: "0 auto"}} >
                <source src={CssGIFWebM} type="video/webm" />
                <source src={CssGIFMP4} type="video/mp4" />
              </video>
            </p>
            <p>
              Jak zapewne Państwo wiecie, wspólnota web developerów świętowała niedawno odejście do cyfrowej wieczności starej i wysłużonej przeglądarki: Internet Explorera. Jednak, kiedy współpracowałem z Teamaton, liczba użytkowników IE11 wciąż była na tyle wysoka, że wymagała ode mnie pisania kodu dostępnego dla tej wiekowej przeglądarki. Te wymagania napewno rozwinęły we mnie cierpliwość, kreatywność i dociekliwość, ale dobrze, że można już z tym skończyć.
            </p>
            <p>
              W trakcie swojej pracy zajmowałem się również wszelkimi problemami zgłaszanymi przez serwis Google Search Console, które dotyczyły użyteczności mobilnej. To zadanie nauczyło mnie wielu kwesti, o których nie dowiedziałbym się w tradycyjny sposób. Starałem się reagować najszybciej jak się da, żeby uchronić klientów przed utratą punków SEO, a użytkowników przed jakimikolwiek mobilnymi niedogodnościami.
            </p>
            <div style={{backgroundColor: "#fafafa", display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "0.6rem", marginTop: "1rem", padding: "0.6rem", textAlign:"center", fontSize: "0.8rem"}}>
              <div>
                <img src={coronaDrafts2} />
                <span>Szkice do nowego logo</span>
              </div>
              <div>
                <img src={coronaDrafts} />
                <span>Szkice do nowego logo</span>
              </div>
              <div>
                <img src={coronaLogos} />
                <span>Propozycje przesłane do klienta</span>
              </div>
              <div>
                <img src={coronaHomepage} />
                <span>Projekt strony głównej portalu Corona Helden</span>
              </div>
            </div>
          </RegularSection>
        </Main>
  </ThemeProvider>
  </>
  )
}