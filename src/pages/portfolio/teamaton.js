/* eslint-disable react/prop-types */
import React from "react"
import { graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import Img from "gatsby-image"

import { theme } from "../../style/theme"

import { H1, H3, H4 } from "../../style/atoms/Headings"
import ImageCaptionParagraph from "../../style/atoms/ImageCaptionParagraph"

import MyHelmet from "../../style/components/MyHelmet"

import { Breadcrumb, CrumbLink } from "../../style/molecules/Breadcrumb"

import GlobalStyle from "../../assets/styles/GlobalStyle"
import { RegularSection } from "../../style/organisms/Sections"
import { StyledHeader } from "../../style/organisms/Header"
import Footer from "../../style/organisms/Footer"

import lightbulb from "../../style/atoms/icons/lightbulb.svg"
import dashboardWebM from "./teamaton/dashboard.webm"
import dashboardMP4 from "./teamaton/dashboard.mp4"
import fileSizesWebM from "./teamaton/fileSizes.webm"
import fileSizesMP4 from "./teamaton/fileSizes.mp4"
import CssGIFWebM from "./teamaton/tenor.webm"
import CssGIFMP4 from "./teamaton/tenor.mp4"
import photoUploadWebM from "./teamaton/photoUpload.webm"
import photoUploadMP4 from "./teamaton/photoUpload.mp4"

const Main = styled.main``

const Callout = styled.p`
  background-color: #f9f9fa;
  padding: 2rem;
`

const FourImagesContainer = styled.div`
  background-color: #fafafa;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "drafts"
    "draft"
    "suggestions"
    "result";
  grid-gap: 0.6rem;
  margin-top: 1rem;
  padding: 0.6rem;
  text-align: center;
  font-size: 0.8rem;

  ${({ theme }) => theme.media.minPhone} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "drafts draft"
      "drafts suggestions"
      "result result";
  }
`

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
`

export default function Teamaton({ data }) {
  const {
    CoronaDrafts,
    CoronaLogos,
    CoronaHomepage,
    CoronaDrafts2,
    FearOfConflict,
    Biurko,
  } = data

  const myHelmetData = {
    description: "Portfolio - Teamaton - Mateusz Kozłowski",
    domain: "https://codeforheaven.com",
    externalScriptsUrls: [],
    facebookThumbnail: "",
    title: "Portfolio - Teamaton - Mateusz Kozłowski",
    slug: "portfolio/teamaton",
  }

  return (
    <>
      <MyHelmet data={myHelmetData} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledHeader>
          <H1 style={{ order: "2" }}>Teamaton</H1>
          <Breadcrumb style={{ order: "1", width: "100%", paddingLeft: "0" }}>
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
            <Callout>
              <img src={lightbulb} />{" "}
              <i>
                Firma Teamaton tworzy aplikację pod nazwą{" "}
                <a href="//discoverize.com">Discoverize</a>. Pozwala ona
                użytkownikowi stworzyć portal dowolnego rodzaju i dziedziny.
              </i>
            </Callout>
            <p>
              Firma Teamaton zaprosiła mnie do współpracy tuż po tym, jak
              wróciłem z misji w Nowej Zelandii. Obdarzyli mnie dużym kredytem
              zaufania, ponieważ nie posiadałem żadnego informatycznego dyplomu.
              Moje portfolio zawierało przede wszystkim skrypty i aplikacje,
              które stworzyłem na swój własny użytek.
            </p>
            <p>
              Nie zawiodłem ich zaufania. Przez ostatnie trzy lata stworzyłem
              złożone rozwiązania i funkcjonalności takie jak panel statystyk
              lub nowoczesne narzędzie do przesyłania zdjęć.
            </p>
            <TwoVideosContainer>
              <div>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: "100%" }}
                >
                  <source src={dashboardWebM} type="video/webm" />
                  <source src={dashboardMP4} type="video/mp4" />
                </video>
                <span>Panel wraz z statystykami portalu</span>
              </div>
              <div>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: "100%" }}
                >
                  <source src={photoUploadWebM} type="video/webm" />
                  <source src={photoUploadMP4} type="video/mp4" />
                </video>
                <span>
                  Pop-up umożliwiający dodanie zdjęcia użytkownikowi portalu
                </span>
              </div>
            </TwoVideosContainer>
            <H3>SASS, elastyczność i skalowalność</H3>
            <p>
              Kiedy otrzymałem więcej odpowiedzialności za bazę stylów, zacząłem
              wprowadzać nowoczesne funkcjonalności jezyka CSS. Dzięki użyciu
              Flexboxa i Animacji CSS interfejs użytkownika aplikacji stał się
              bardziej responsywny i lżejszy.
            </p>
            <p>
              Z oprogramowania Discoverize korzysta więcej niż 60 portali.
              Ponieważ współdzielą wiele zależności - te muszą być tworzone w
              przemyślany sposób. W tym celu wykorzystałem możliwości
              preprocesora SASS i stworzyłem bibliotekę stylów, która
              dostosowuje się na podstawie wprowadzonych parametrów. To
              rozwiązanie nie tylko zmniełszyło rozmiar skompilowanego CSSa o
              dziesiątki kilobajtów, ale uprościło proces debugowania styli w
              narzędziach developerskich.
            </p>
            <ImageCaptionParagraph>
              <span>
                Jak zmieniły się rozmiary istotnych zależności w portalu
              </span>
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  maxWidth: "600px",
                  width: "100%",
                  display: "block",
                  margin: "0 auto",
                }}
              >
                <source src={fileSizesWebM} type="video/webm" />
                <source src={fileSizesMP4} type="video/mp4" />
              </video>
            </ImageCaptionParagraph>
            <p>
              Jeżeli chcieliby Państwo zobaczyć kilka z najbardziej wymagających
              projektów i przekonać się o zróżnicowaniu portali opartych o
              Discoverize, zachęcam do odwiedzenia poniższych portali:
            </p>
            <ul>
              <li>
                <a href="https://mylauf.de/">MyLauf.de</a>
              </li>
              <li>
                <a href="https://werwowas.de/">WerWoWas</a>
              </li>
              <li>
                <a href="https://schoenheitsklinik.info/">Schoenheitsklinik</a>
              </li>
              <li>
                <a href="https://weconnectarts-portal.de/">We Connect Arts</a>
              </li>
              <li>
                <a href="https://stellplatz.info/">Stellplatz</a>
              </li>
            </ul>
            <p>
              Wszystko, nad czym pracowałem miało być wykorzystywane przez setki
              właścicieli portali oraz właścicieli wpisów na tych portalach.
              Mnożąc liczbę ludzi razy liczbę rodzajów treści powinniśmy
              otrzymać ogólne pojęcie o tym, jak uniwersalne musiały być to
              rozwiązania.
            </p>
            <ImageCaptionParagraph>
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  maxWidth: "600px",
                  width: "100%",
                  display: "block",
                  margin: "0 auto",
                }}
              >
                <source src={CssGIFWebM} type="video/webm" />
                <source src={CssGIFMP4} type="video/mp4" />
              </video>
            </ImageCaptionParagraph>
            <H3>
              Zgodność z <em>dziedzictwem</em>
            </H3>
            <p>
              Jak zapewne Państwo wiecie, wspólnota web developerów świętowała
              niedawno odejście do cyfrowej wieczności starej i wysłużonej
              przeglądarki: Internet Explorera. Jednak, kiedy współpracowałem z
              Teamaton, liczba użytkowników IE11 wciąż była na tyle wysoka, że
              wymagała ode mnie pisania kodu dostępnego dla tej wiekowej
              przeglądarki. Te wymagania napewno rozwinęły we mnie cierpliwość,
              kreatywność i dociekliwość, ale dobrze, że można już z tym
              skończyć.
            </p>
            <H3>Google Search Console Mobile Reports</H3>
            <p>
              W trakcie swojej pracy zajmowałem się również wszelkimi problemami
              zgłaszanymi przez serwis Google Search Console, które dotyczyły
              użyteczności mobilnej. To zadanie nauczyło mnie wielu kwesti, o
              których nie dowiedziałbym się w tradycyjny sposób. Starałem się
              reagować najszybciej jak się da, żeby uchronić klientów przed
              utratą punków SEO, a użytkowników przed jakimikolwiek mobilnymi
              niedogodnościami.
            </p>
            <H3>Projektowanie logotypów i motywów graficznych</H3>
            <p>
              Gdy klient zgłaszał się do nas bez gotowego projektu, moim
              pierwszym zadaniem było zazwyczaj przygotowanie projektu prostego
              logotypu i motywu graficznego portalu. Przykładowy proces wyglądał
              następująco:
              <ul>
                <li>Research branży - budowa skojarzeń</li>
                <li>Dobór palety kolorów</li>
                <li>Wybór fontów (max. 2)</li>
                <li>
                  Szkic logotypu, który po konsultacjach z klientem zamieniałem
                  na projekt w krzywych (Adobe Illustrator, Affinity Designer, a
                  jeszcze wcześniej Inkscape)
                </li>
                <li>
                  Zrealizowanie projektu w nowo utworzonym motywie graficznym
                </li>
              </ul>
            </p>
            <FourImagesContainer>
              <div style={{ gridArea: "drafts" }}>
                <Img fluid={CoronaDrafts2.fluid} />
                <span>Szkice do nowego logo</span>
              </div>
              <div style={{ gridArea: "draft" }}>
                <Img fluid={CoronaDrafts.fluid} />
                <span>Szkice do nowego logo</span>
              </div>
              <div style={{ gridArea: "suggestions" }}>
                <Img fluid={CoronaLogos.fluid} />
                <span>Propozycje przesłane do klienta</span>
              </div>
              <div style={{ gridArea: "result" }}>
                <Img fluid={CoronaHomepage.fluid} />
                <span>Projekt strony głównej portalu Corona Helden</span>
              </div>
            </FourImagesContainer>
            <H3>Mini CASE STUDY: mini search</H3>
            <p>
              W miarę upływu czasu dokładałem starań, aby wygląd portali nie
              odbiegał zbyt daleko od współczesnych standardów. Jednocześnie nie
              wszyscy właściciele portali chcieli aktualizacji wyglądu.
              Doprowadziło to do sytuacji, w której tzw. <em>mini search</em>{" "}
              był dostępny w 5 różnych wzorach. Back end renderował ten element
              w tej samej strukturze HTML i tym samym zestawem klas CSS. Było to
              ograniczenie, którego mówiąc kolokwialnie developerzy nie byli w
              stanie przeskoczyć. Dlatego ciężar wszelkiego rodzaju modyfikacji
              spoczął na stylach.
            </p>
            <ImageCaptionParagraph>
              <Img fluid={Biurko.fluid} />
              <span>
                Moja praca najczęściej zaczyna się poza laptopem, nad szybkim
                szkicami i mapami na papierze
              </span>
            </ImageCaptionParagraph>
            <H4>Wymagania</H4>
            <p>
              <ul>
                <li>uprościć bazę stylów</li>
                <li>
                  ułatwić testowanie front endu (ponad 60 działających portali)
                </li>
                <li>niczego nie zepsuć</li>
                <li>zapewnić łatwy dostęp do modyfikacji</li>
                <li>
                  stworzyć przejrzystą strukturę komponentów, czytelną dla
                  innych developerów
                </li>
              </ul>
            </p>
            <p>
              W rezultacie chciałem otrzymać czystszy kod zarówno w plikach
              SCSS, jak i w skompilowanym <em>bundle'u</em>. Dotychczasową
              bolączką modyfikacji poszczególnych stylów była praktyka
              nadpisywania domyślnych właściwości za pomocą nowych deklaracji.
              Łatwość w użyciu SASSowych mixinów sprzyjała tej praktyce, jednak
              jej efektem był kompletny chaos w debuggerze styli dostępnym w
              narzędziach przeglądarki.
            </p>
            <H4>Rozwiązanie</H4>
            <p>
              Po analizie zastanej sytuacji, zdecydowałem że pierwszym krokiem
              będzie refaktoryzacja struktury HTMLu. Zależało mi na tym, aby
              blok wyszukiwania wyglądał znośnie nawet wtedy, gdy nie załadują
              się style. Chciałem, żeby Flexbox i CSS Grid były tzw.{" "}
              <em>progressive enhancement</em>, a nie rdzeniem układu. Niektóre
              elementy tych technologii nie były wówczas wspierane przez
              Internet Explorera 11, którego używała znaczna część naszych
              użytkowników.
            </p>
            <p>
              Po uporządkowaniu HTMLa okazało się, że potrzebuję dużo mniej
              styli, aby nadać wyszukiwarce oczekiwane kształty. Wykorzystując
              wspomniane technologie, zadbałem o to, aby poszczególne części
              były względem siebie wyrównane, a całość dopasowywała się do
              różnych rozmiarów ekranów.
            </p>
            <p>
              Podsumowując:
              <ul>
                <li>wykorzystałem naturalne właściwości komponentów HTML</li>
                <li>
                  zamieniłem nadpisywanie na parametryzację możliwą w plikach
                  bazowych każdego z motywów
                </li>
                <li>
                  nadając spójne i zrozumiałe nazwy zmiennych, ułatwiłem
                  modyfikację w kolejnych miesiącach
                </li>
                <li>
                  uniknąłem walki o specyficzność selektorów - nie do uniknięcia
                  przy nadpisywaniu
                </li>
                <li>
                  spójność wygenerowanych styli oszczędziła nam sporo czasu na
                  testowaniu w przyszłości
                </li>
              </ul>
            </p>
            <H3>Sketchnoting</H3>
            <p>
              <em>Last, but not least.</em> Moją wielką pasją jest nauka nowych
              rzeczy. Najbardziej lubię uczyć się, próbując opowiedzieć o tych
              nowych treściach innnym. Stąd też inne moje projekty, jak{" "}
              <a href="//codeforheaven.com">blog</a>, czy{" "}
              <a href="//letmeinux.com">podcast</a>. Do tego celu czasami
              wykorzystuję sketchnoting, nadając graficzny wymiar tekstowym
              treściom. Poniżej znajduje się przykład jednej z takich notatek,
              które sporządziłem przy okazji wewnętrznego szkolenia poświęconemu
              budowaniu zaangażowanego i odpowiedzialnego zespołu.
            </p>
            <p>
              <Img fluid={FearOfConflict.fluid} />
            </p>
          </RegularSection>
        </Main>
        <Footer>
          <Breadcrumb style={{ paddingLeft: "0" }}>
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
    CoronaDrafts: imageSharp(
      fluid: { originalName: { regex: "/corona-draft.jpg/g" } }
    ) {
      fluid(maxWidth: 480) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    CoronaLogos: imageSharp(
      fluid: { originalName: { regex: "/corona-suggestions.jpg/g" } }
    ) {
      fluid(maxWidth: 480) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    CoronaHomepage: imageSharp(
      fluid: { originalName: { regex: "/corona-result.jpg/g" } }
    ) {
      fluid(maxWidth: 768) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    CoronaDrafts2: imageSharp(
      fluid: { originalName: { regex: "/corona-drafts.jpg/g" } }
    ) {
      fluid(maxWidth: 480) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    FearOfConflict: imageSharp(
      fluid: { originalName: { regex: "/fear-of-conflict.jpg/g" } }
    ) {
      fluid(maxWidth: 768) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    Biurko: imageSharp(fluid: { originalName: { regex: "/biurko.jpg/g" } }) {
      fluid(maxWidth: 768) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`
