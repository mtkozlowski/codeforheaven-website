import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import {
  centered,
  viewportHigh,
  col50,
  flex,
  boxPadding,
  relativePosition,
} from "../../style/organisms/Divs"
import {
  WideSection,
  NarrowSection,
  RegularSection,
} from "../../style/organisms/Sections"
import MyHelmet from "../../style/components/MyHelmet"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { theme } from "../../style/theme"
import GlobalStyle from "../../assets/styles/GlobalStyle"
import { H2, H3, H4, H6 } from "../../style/atoms/Headings"
import Footer from "../../style/organisms/Footer"
import { Breadcrumb, CrumbLink } from "../../style/molecules/Breadcrumb"

const Main = styled.main`
  margin: 0;
`

const PortfolioStyle = createGlobalStyle`
  iframe {
    max-width: 560px;
  }

  @keyframes speakBubbleAnimation {
  from {
    transform: translateX(0%);
  }

  25% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(-200%);
  }

  75% {
    transform: translateX(-300%);
  }

  to {
    transform: translateX(-400%);
  }
}
`
const SpeakBubble = styled.div`
  background-color: #ffffffaa;
  border-radius: 1rem;
  width: 360px;
  max-width: 100%;
  font-style: italic;
  padding: 1.6rem 2rem;
  position: relative;
  margin-bottom: 1rem;

  &::after {
    content: "";
    position: absolute;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }

  ${({ theme }) => theme.media.narrowSection} {
    flex-shrink: 0;
    margin: 0 calc(50% - 180px);
    padding: 1rem 1.2rem;

    &:after {
      border-left: 20px solid transparent !important;
      border-right: 20px solid transparent !important;
      border-bottom-width: 0px !important;

      border-top: 20px solid #ffffffaa !important;
      bottom: -20px !important;
      left: 2rem !important;
      right: unset !important;
    }
  }
  ${({ theme }) => theme.media.phoneS} {
    width: 320px;
    margin: 0 calc(50% - 160px);
  }
`

const SpeakBubbleWrapper = styled.div`
  display: flex;
  ${({ theme }) => theme.media.narrowSection} {
    display: block;
    width: 100%;
    overflow: hidden;
    padding-bottom: 20px;
  }
`

const SpeakBubbleAnimatedWrapper = styled.div`
  max-width: 100%;
  ${({ theme }) => theme.media.narrowSection} {
    display: flex;
    transition: transform 0.1s ease-in;
    animation: speakBubbleAnimation 15s infinite alternate;
    animation-delay: 3s;

    &:focus,
    &:focus-within {
      animation-play-state: paused;
    }
  }
`

const PortfolioHomeSection = styled.div`
  ${flex}

  &:nth-child(odd) {
    flex-direction: row-reverse;

    ${SpeakBubbleWrapper} {
      justify-content: flex-end;
    }

    ${SpeakBubble} {
      &::after {
        border-left: 20px solid #ffffffaa;
        bottom: 1rem;
        right: -20px;
      }
    }
  }
  &:nth-child(even) {
    ${SpeakBubble} {
      &::after {
        border-right: 20px solid #ffffffaa;
        bottom: 1rem;
        left: -20px;
      }
    }
  }

  ${({ theme }) => theme.media.narrowSection} {
    flex-direction: column-reverse !important;
  }
`

const LogoWrapper = styled.div`
  ${col50}
  ${boxPadding}
  ${relativePosition}
  ${centered}

  min-height: 260px;
`

const TextWrapper = styled.div`
  ${col50}
  ${boxPadding}

  ${({ theme }) => theme.media.narrowSection} {
    padding: 1rem;
  }
`

const GirlSvg = styled.img`
  order: 0;
  flex-grow: 0.8;
  align-self: flex-end;
  ${({ theme }) => theme.media.narrowSection} {
    display: none;
  }
`

const BoySvg = styled.img`
  order: 2;
  flex-grow: 0.8;
  align-self: flex-end;
  ${({ theme }) => theme.media.narrowSection} {
    display: none;
  }
`

export default function Bethink({ data }) {
  const { pracaKomiks, boySvg, girlSvg } = data
  const myHelmetData = {
    description: "",
    domain: "https://codeforheaven.com",
    externalScriptsUrls: [],
    title: "Bethink - Portfolio - Mateusz Kozłowski",
    slug: "portfolio/bethink",
  }

  return (
    <>
      <MyHelmet data={myHelmetData} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PortfolioStyle />
        <Main>
          <div css={[centered]} style={{ backgroundColor: "#fafafa" }}>
            <WideSection>
              <div css={[centered, viewportHigh]}>
                <iframe
                  style={{ order: 1, zIndex: 1, margin: "0 1rem" }}
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/ShFAt29f-ak"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <GirlSvg src={girlSvg.publicURL} style={{ flexGrow: "1" }} />
                <BoySvg src={boySvg.publicURL} style={{ flexGrow: "1" }} />
              </div>
            </WideSection>
          </div>
          <RegularSection>
            <div css={[boxPadding]}>
              <p style={{ fontSize: "0.8rem" }}>
                <em>
                  Transkrypcja wideo. <a href="#main-section">Przewiń w dół</a>
                </em>
              </p>
              <h3>Cześć Bethink!</h3>
              <p>
                Nazywam się Mateusz Kozłowski. Wiem, że jeszcze dobrze się nie
                znamy, ale mam nadzieję, że to wideo pozwoli to zmienić.
                Pierwszy raz z&nbsp;Waszą firmą zetknąłem się podczas pewnego
                pięknego popołudniowego spaceru po Sołaczu. Mijaliśmy kolejne
                wille i&nbsp;w&nbsp;pewnym momencie moją uwagę zwrócił piękny
                dwupoziomowy dom z&nbsp;przeszklonym wykuszem. i&nbsp;dopiero po
                chwili zauważyłem, że obok drzwi jest tabliczka. Jeszcze
                w&nbsp;trakcie tego spaceru sprawdziłem, co to za firma
                i&nbsp;powiedziałem do swoich znajomych
                <em>&quot;hmmm, mógłbym tam pracować&quot;</em>.
              </p>
              <p>
                Jestem front endowcem z&nbsp;trzyletnim doświadczeniem, ale od
                kilku miesięcy poświęcam swój czas i&nbsp;pieniądze na to, aby
                coraz lepiej poznawać i&nbsp;uczyć się projektowania user
                experience. Lubię programowanie, naprawde lubię, ale jeszcze
                więcej satysfakcji czerpię z&nbsp;tego, gdy robię coś, co ma
                ręce i&nbsp;nogi, a&nbsp;ja mogę mieć na to realny wpływ.
              </p>
              <p>
                Szukam miejsca, w&nbsp;którym mógłbym rozwijać się UXowo
                i&nbsp;robić dobrą robotę. Myślę, że praca nad platformą
                edukacyjną to doskonała okazja. Żeby dowiedzieć się trochę
                więcej o&nbsp;Więcej&nbsp;niż&nbsp;LEK, zrobiłem malutkie
                badania UXowe wśród swoich znajomych -&nbsp;studentów medycyny
                i&nbsp;absolwentów. Nie, nie powstanie z&nbsp;tego raport.
                Raczej myślę, że z&nbsp;tego, co tu się zapowiada będzie jakiś
                mały komiks.
              </p>
              <p>
                Dziękuję, że poświęciliście swój czas na obejrzenie tego wideo.
                Mam nadzieję, że niedługo uda nam się spotkać osobiście.
                A&nbsp;w&nbsp;tak zwanym międzyczasie zapraszam Was do
                zapoznania się z&nbsp;
                <Link to="/portfolio">moim portfolio</Link>.
              </p>
              <p>Do zobaczenia.</p>
            </div>
          </RegularSection>
          <section id="main-section">
            <PortfolioHomeSection style={{ background: "#ccc" }}>
              <LogoWrapper style={{ backgroundColor: "#ffffffcc" }}>
                <img src={girlSvg.publicURL} style={{ flexGrow: "1" }} />
              </LogoWrapper>
              <TextWrapper
                style={{ backgroundColor: "rgba(255, 255, 255, 0.667)" }}
              >
                <SpeakBubbleWrapper>
                  <SpeakBubbleAnimatedWrapper>
                    <SpeakBubble>
                      Chciałam po prostu coś z&nbsp;biologią i&nbsp;chemią,
                      a&nbsp;ludzie wydali mi się bardziej ciekawi od mikrobów.
                    </SpeakBubble>
                    <SpeakBubble>Platforma na całe studia.</SpeakBubble>
                    <SpeakBubble>
                      Tylko nie mów, że to ja (..) Miałam jeszcze screenshoty
                      z&nbsp;tej drugiej aplikacji. Od koleżanki.
                    </SpeakBubble>
                    <SpeakBubble>
                      Mapa myśli - idea dobra, tylko ja nie miałam czasu ;)
                    </SpeakBubble>
                    <SpeakBubble>
                      Czy wynik powyżej 90% na LEK oznacza, że będę dobrym
                      lekarzem?
                    </SpeakBubble>
                  </SpeakBubbleAnimatedWrapper>
                </SpeakBubbleWrapper>
              </TextWrapper>
            </PortfolioHomeSection>
            <section>
              <Img fluid={pracaKomiks.fluid} />
            </section>
            <PortfolioHomeSection style={{ background: "rgb(224, 194, 174)" }}>
              <LogoWrapper style={{ backgroundColor: "#ffffffcc" }}>
                <img src={boySvg.publicURL} style={{ flexGrow: "1" }} />
              </LogoWrapper>
              <TextWrapper
                style={{ backgroundColor: "rgba(255, 255, 255, 0.667)" }}
              >
                <SpeakBubbleWrapper>
                  <SpeakBubbleAnimatedWrapper>
                    <SpeakBubble>
                      To jest fajne, że w&nbsp;prezentacjach jest prosta
                      odpowiedź, a&nbsp;w&nbsp;komentarzach jest wyjaśnienie. Bo
                      jak coś się rozumie, to łatwiej zapamiętać.
                    </SpeakBubble>
                    <SpeakBubble>
                      Dzięki Więcej niż LEK zrozumiałem EKG.
                    </SpeakBubble>
                    <SpeakBubble>
                      Oni mnie oceniają negatywnie, ale jak wiem, że niektóre są
                      słuszne, a&nbsp;dużo wynika z&nbsp;tego, że nie realizuję
                      planu pracy tak, jak by tego chcieli. Tymi się nie
                      przejmuję.
                    </SpeakBubble>
                    <SpeakBubble>Tabelki mnie przerażają.</SpeakBubble>
                    <SpeakBubble>
                      W&nbsp;momencie, gdy mi 20 pytań znika, to nie pamiętam,
                      które zaznaczyłem ia&nbsp;jest ryzyko, że zaznaczam to
                      samo.
                    </SpeakBubble>
                  </SpeakBubbleAnimatedWrapper>
                </SpeakBubbleWrapper>
              </TextWrapper>
            </PortfolioHomeSection>
          </section>
          <NarrowSection>
            <H3 style={{ textAlign: "center", marginTop: "3rem" }}>
              Zapraszam do mojego <Link to="/portfolio">portfolio</Link> oraz{" "}
              <a href="mailto:mateusz@codeforheaven.com">kontaktu</a>
            </H3>
          </NarrowSection>
        </Main>
        <Footer>
          <Breadcrumb style={{ paddingLeft: "0" }}>
            <li>
              <CrumbLink to="/portfolio">Portfolio</CrumbLink>
            </li>
            <li>
              <CrumbLink to="/portfolio/bethink">Bethink</CrumbLink>
            </li>
          </Breadcrumb>
        </Footer>
      </ThemeProvider>
    </>
  )
}

export const pageQuery = graphql`
  query {
    pracaKomiks: file(name: { eq: "bethink__komiks" }) {
      childImageSharp {
        fluid(
          maxWidth: 1920
          cropFocus: CENTER
          srcSetBreakpoints: [480, 640, 960, 1920]
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
        fixed(height: 690, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    boySvg: file(name: { eq: "bethink__boy" }) {
      publicURL
    }
    girlSvg: file(name: { eq: "bethink__girl" }) {
      publicURL
    }
  }
`
