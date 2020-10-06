import React from "react"
import { graphql } from "gatsby"
import { RegularSection } from "../../style/organisms/Sections"
import MyHelmet from '../../style/components/MyHelmet';
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../../style/theme"
import GlobalStyle from "../../style/organisms/GlobalStyle"
import { StyledHeader } from "../../style/organisms/Header"
import { H1 } from "../../style/atoms/Headings"
import Img from "gatsby-image"

import { Breadcrumb, CrumbLink } from "../../style/molecules/Breadcrumb"
import Footer from "../../style/organisms/Footer"

import lightbulb from "../../style/atoms/icons/lightbulb.svg"

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

const FourImagesContainer = styled.div`
  background-color: "#fafafa";
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.6rem; margin-top: 1rem; padding: 0.6rem;
  text-align: center;
  font-size: 0.8rem;

  ${({ theme }) => theme.media.phone} {
    grid-template-columns: 1fr;
  }
`;

const TwoVideosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  font-size: 0.8rem;
  text-align: center;

  margin-top: 1rem;

  ${({ theme }) => theme.media.minRegularSection} {
    grid-template-columns: 1fr 1fr;
  }

`;

export default function Teamaton({ data }) {
  const {
    CoronaDrafts  } = data;

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
            <Callout><img src={lightbulb} /> <i>Firma Teamaton tworzy aplikację pod nazwą <a href="//discoverize.com">Discoverize</a>. Pozwala ona użytkownikowi stworzyć portal dowolnego rodzaju i dziedziny.</i></Callout>
            <p>
              Firma Teamaton zaprosiła mnie do współpracy tuż po tym, jak wróciłem z misji w Nowej Zelandii. Obdarzyli mnie dużym kredytem zaufania, ponieważ nie posiadałem żadnego informatycznego dyplomu. Moje portfolio zawierało przede wszystkim skrypty i aplikacje, które stworzyłem na swój własny użytek.
            </p>
            <p>
              Nie zawiodłem ich zaufania. Przez ostatnie trzy lata stworzyłem złożone rozwiązania i funkcjonalności takie jak panel statystyk lub nowoczesne narzędzie do przesyłania zdjęć.
            </p>
            <TwoVideosContainer>
              <div>
                <video autoPlay loop muted playsInline style={{width: "100%"}} >
                  <source src={dashboardWebM} type="video/webm" />
                  <source src={dashboardMP4} type="video/mp4" />
                </video>
                <span>Panel wraz z statystykami portalu</span>
              </div>
              <div>
                <video autoPlay loop muted playsInline style={{width: "100%"}} >
                  <source src={photoUploadWebM} type="video/webm" />
                  <source src={photoUploadMP4} type="video/mp4" />
                </video>
                <span>Pop-up umożliwiający dodanie zdjęcia użytkownikowi portalu</span>
              </div>
            </TwoVideosContainer>
            <p>
              Kiedy otrzymałem więcej odpowiedzialności za bazę stylów, zacząłem wprowadzać nowoczesne funkcjonalności jezyka CSS. Dzięki użyciu Flexboxa i Animacji CSS interfejs użytkownika aplikacji stał się bardziej responsywny i lżejszy.
            </p>
            <p>
              Z oprogramowania Discoverize korzysta więcej niż 60 portali. Ponieważ współdzielą wiele zależności - te muszą być tworzone w przemyślany sposób. W tym celu wykorzystałem możliwości preprocesora SASS i stworzyłem bibliotekę stylów, która dostosowuje się na podstawie wprowadzonych parametrów. To rozwiązanie nie tylko zmniełszyło rozmiar skompilowanego CSSa o dziesiątki kilobajtów, ale uprościło proces debugowania styli w narzędziach developerskich.
            </p>
            <p style={{ textAlign: "center"}}>
              <span style={{fontSize: "0.8rem"}}>Jak zmieniły się rozmiary istotnych zależności w portalu</span>
                <video autoPlay loop muted playsInline style={{maxWidth: "600px", width: "100%", display: "block", margin: "0 auto"}} >
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
              <video autoPlay loop muted playsInline style={{maxWidth: "600px", width: "100%", display: "block", margin: "0 auto"}} >
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
            <FourImagesContainer>
              <div>
                <img src={coronaDrafts2} />
                <span>Szkice do nowego logo</span>
              </div>
              <div>
                <Img fluid={CoronaDrafts.fluid} />
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
            </FourImagesContainer>
          </RegularSection>
        </Main>
        <Footer>
          <Breadcrumb style={{paddingLeft: "0"}}>
            <li>
              <CrumbLink to="/portfolio">Portfolio</CrumbLink>
            </li>
            <li>
              <CrumbLink to="/portfolio/teamaton">Teamaton</CrumbLink>
            </li>
          </Breadcrumb>
        </Footer>
  </ThemeProvider>
  </>
  )
}

export const pageQuery = graphql`
  query {
    CoronaDrafts: imageSharp(fluid: {originalName: {regex: "/corona-drafts.jpg/g"}}) {
      fluid(maxWidth: 480) {
        ...GatsbyImageSharpFluid
      }
    },
    CoronaLogos: file(relativePath: {regex: "/corona-logos.jpg/g"}) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

