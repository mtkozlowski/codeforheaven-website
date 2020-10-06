import React from "react"
import { centered, viewportHigh, col50, flex, boxPadding, relativePosition } from "../style/organisms/Divs"
import MyHelmet from '../style/components/MyHelmet';
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { theme } from "../style/theme"
import GlobalStyle from "../style/organisms/GlobalStyle"
import { Link } from 'gatsby';
import { H2, H6 } from "../style/atoms/Headings"
import TeamatonRotatingLogo from "../style/atoms/TeamatonRotatingLogo"

import BadgesBelt from "./portfolio/BadgesBelt"

import PortfolioSection_1 from "./portfolio/portfolioSection1"
import lednica01 from "./portfolio/lednica/lednica-logo.png"
import teamaton01 from "./portfolio/teamaton/teamaton-logo.png"
import teamaton02 from "./portfolio/teamaton/teamaton-new.png"
import lmiux from "./portfolio/lmiux.jpg"
import findIt from "./portfolio/find-it.png"

const Main = styled.main`
  margin: 0;
`;

const PortfolioStyle = createGlobalStyle`
  iframe {
    max-width: 560px;
  }
`;

const PortfolioHomeSection = styled.div`
    ${flex}

    &:nth-child(odd) {
      flex-direction: row-reverse;
    }

    ${({ theme }) => theme.media.narrowSection} {
      display: block;
    }
`;

const LogoWrapper = styled.div`
  ${col50}
  ${boxPadding}
  ${relativePosition}
  ${centered}
`;

const TextWrapper = styled.div`
  ${col50}
  ${boxPadding}
`;

const LearnMoreLink = styled(Link)`
  margin-top: 1rem;
  display: block;
`;

const Portfolio = () => {
  const myHelmetData = {
    description: "Portfolio - Mateusz Kozłowski",
    domain: "https://codeforheaven.com",
    externalScriptsUrls: [],
    facebookThumbnail: "",
    title: "Portfolio - Mateusz Kozłowski",
    slug: "portfolio",
  };

  return (
    <>
    <MyHelmet data={myHelmetData} />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PortfolioStyle />
      <Main>
        <div css={[centered, viewportHigh]} style={{backgroundColor: "#fafafa"}}>
          <PortfolioSection_1 />
        </div>
        <div>
          <p style={{textAlign: "center", padding: "1rem 0"}}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/-9Ivat0imI0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </p>
        </div>
        <section id="mainsection">
        <BadgesBelt />
        <PortfolioHomeSection style={{background: "#ccc"}}>
          <LogoWrapper style={{backgroundColor: "#ffffffcc"}}>
            <TeamatonRotatingLogo>
              <img src={teamaton01} style={{display: "inline-block", marginRight: "20px"}} />
              <img src={teamaton02} style={{display: "inline-block", width: "70%"}} />
            </TeamatonRotatingLogo>
          </LogoWrapper>
          <TextWrapper style={{backgroundColor: "#ffffffaa"}}>
            <H2 id="teamaton">Projektowanie, realizacja, utrzymanie - Teamaton</H2>
            <H6><i>Poza to, co widać</i></H6>
            <p>
              Moja współpraca z tym założonym w Berlinie startupem dotyczyła różnych kompetencji. Zaczynałem od pracy jako Junior C# Developer jednak szybko przeszedłem do rozwijania front-endu. Za pomocą bibliotek JavaScriptu i pre-procesorów SASS stworzyłem wiele biznesowych rozwiązań dla naszych klientów.
            </p>
            <LearnMoreLink to="/portfolio/teamaton">Dowiedz się więcej</LearnMoreLink>
          </TextWrapper>
        </PortfolioHomeSection>
        <PortfolioHomeSection style={{background: "rgb(184, 214, 184)"}}>
          <LogoWrapper style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
            <img src={lednica01} style={{width: "60%", minWidth: "240px"}} />
          </LogoWrapper>
          <TextWrapper style={{backgroundColor: "rgba(255, 255, 255, 0.667)"}}>
            <H2 id="lednica">Zaangażowana kreacja - Lednica2000</H2>
            <H6>Warsztaty, promocja, edukacja</H6>
            <p>
              Współpracowałem przy tworzeniu tych wielkich spotkań młodzieży przez lata. W ostatnich latach angażowałem się przede wszystkim w prace kreatywną. Pomagałem i prowadziłem zespoły, które tworzyły filmy i stategie dla mediów społecznościowych.
            </p>
            <LearnMoreLink to="/portfolio/lednica">Dowiedz się więcej</LearnMoreLink>
          </TextWrapper>
        </PortfolioHomeSection>
        <PortfolioHomeSection style={{background: "rgb(234, 184, 234)"}}>
          <LogoWrapper style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
            <img src={findIt} style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover"}} />
          </LogoWrapper>
          <TextWrapper style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
            <H2 id="find-it">Projekt Find.it</H2>
            <p>
              Warsztaty Elementarz UX zaowocowały powstaniem czteroosobowego zespołu, w którym podjęliśmy się próby zaprojektowania aplikacji do organizacji ludzi wokół pet-projektów.
            </p>
            <LearnMoreLink to="/portfolio/find-it">Dowiedz się więcej</LearnMoreLink>
          </TextWrapper>
        </PortfolioHomeSection>
        <PortfolioHomeSection style={{background: "rgb(174, 204, 234)"}}>
          <LogoWrapper style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
            <img src={lmiux} style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover"}} />
          </LogoWrapper>
          <TextWrapper style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
            <H2 id="let-me-in-ux">Podcast Let me in UX</H2>
            <H6>Od nas dla Was</H6>
            <p>
              Kiedy zacząłem bardziej interesować się tematyką projektowania User Experience, zapropononwałem dziewczynom z teamu Find.It nagrywanie audycji internetowej poświeconej stawianiu pierwszych kroków w branży.
            </p>
            <LearnMoreLink to="/portfolio/let-me-in-ux">Dowiedz się więcej</LearnMoreLink>
          </TextWrapper>
        </PortfolioHomeSection>
        <PortfolioHomeSection style={{background: "rgb(224, 194, 174)"}}>
          <LogoWrapper style={{background: "#ffdab9",fontSize: "6rem", fontFamily: "serif", fontWeight: "700"}}>
            <p >Szukaj Słowa</p>
          </LogoWrapper>
          <TextWrapper style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
            <H2 id="szukaj-slowa">Aplikacja Szukaj Słowa</H2>
            <p>
              To mój autorski, fullstackowy projekt aplikacji przeznaczonej do wyszukiwania komentarzy biblijnych za pomocą specyficznych odnośników do wersetów, tzw. sigli. Projekt jest rozwijany wspólnie ze społecznością chrześcijan, którzy zgłaszali się na grupach w mediach społecznościowych.
            </p>
            <LearnMoreLink to="/portfolio/szukaj-slowa">Dowiedz się więcej</LearnMoreLink>
          </TextWrapper>
        </PortfolioHomeSection>
      </section>
      </Main>
    </ThemeProvider>
  </>
  )
}

export default Portfolio;