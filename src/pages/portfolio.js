import React from "react"
import Layout from "../style/organisms/Layout"
import { centered, viewportHigh, textCentered, col50, flex, boxPadding, relativePosition } from "../style/organisms/Divs"
import MyHelmet from '../style/components/MyHelmet';
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../style/theme"
import GlobalStyle from "../style/organisms/GlobalStyle"
import { StyledHeader } from "../style/organisms/Header"
import { Link } from 'gatsby';
import { H1, H2, H3, H4, H5, H6 } from "../style/atoms/Headings"
import TeamatonRotatingLogo from "../style/atoms/TeamatonRotatingLogo"
import RotatingSpan from "../style/atoms/RotatingSpan"
import ListWithoutBullets from "../style/components/ListWithoutBullets"

import { NarrowSection, RegularSection, WideSection, FullWidthSection } from "../style/organisms/Sections"
import ToggleBlock from "../style/components/ToggleBlock"

import BadgesBelt from "./portfolio/BadgesBelt"

import PortfolioSection_1 from "./portfolio/portfolioSection1"
import lednica01 from "./portfolio/lednica/lednica-logo.png"
import teamaton01 from "./portfolio/teamaton/teamaton-logo.png"
import teamaton02 from "./portfolio/teamaton/teamaton-new.png"
import lmiux from "./portfolio/lmiux.png"
import szukajslowa from "./portfolio/szukajslowa.png"
import findIt from "./portfolio/find-it.png"

const Main = styled.main`
  margin: 0;
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
  const percent = "30%";
  const color = "hsl(208, 55%, 93%)";

  return (
    <>
    <MyHelmet data={myHelmetData} />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <div css={[centered, viewportHigh]} style={{backgroundColor: "#fafafa"}}>
          <PortfolioSection_1 />
        </div>
        <FullWidthSection id="mainsection">
          <BadgesBelt />
        </FullWidthSection>
        <FullWidthSection css={flex} style={{background: "#ccc"}}>
          <div css={[col50, relativePosition]} style={{backgroundColor: "#ffffffcc"}}>
            <TeamatonRotatingLogo>
              <img src={teamaton01} style={{display: "inline-block", marginRight: "20px"}} />
              <img src={teamaton02} style={{display: "inline-block", width: "70%"}} />
            </TeamatonRotatingLogo>
          </div>
          <div css={[col50, boxPadding]} style={{backgroundColor: "#ffffffaa"}}>
            <H2 id="teamaton">Projektowanie, realizacja, utrzymanie - Teamaton</H2>
            <H6><i>Poza to, co widać</i></H6>
            <p>
              Moja współpraca z tym założonym w Berlinie startupem dotyczyła różnych kompetencji. Zaczynałem od pracy jako Junior C# Developer jednak szybko przeszedłem do rozwijania front-endu. Za pomocą bibliotek JavaScriptu i pre-procesorów SASS stworzyłem wiele biznesowych rozwiązań dla naszych klientów.
            </p>
            <Link to="/portfolio/teamaton"style={{marginTop: "1rem", display: "block"}} >Dowiedz się więcej</Link>
          </div>
        </FullWidthSection>
        <FullWidthSection css={flex} style={{background: "rgb(184, 214, 184)"}}>
          <div css={[col50, relativePosition]} style={{backgroundColor: "rgba(255, 255, 255, 0.8)", order: "1"}}>
            <img src={lednica01} style={{position: "absolute", top: "50%", left: "50%", width: "60%", minWidth: "240px", transform: "translate(-50%, -50%)"}} />
          </div>
          <div css={[col50, boxPadding]} style={{backgroundColor: "rgba(255, 255, 255, 0.667)", order: "0"}}>
            <H2 id="lednica">Zaangażowana kreacja - Lednica2000</H2>
            <H6>Warsztaty, promocja, edukacja</H6>
            <p>
              Współpracowałem przy tworzeniu tych wielkich spotkań młodzieży przez lata. W ostatnich latach angażowałem się przede wszystkim w prace kreatywną. Pomagałem i prowadziłem zespoły, które tworzyły filmy i stategie dla mediów społecznościowych.
            </p>
            <Link to="/portfolio/lednica"style={{marginTop: "1rem", display: "block"}} >Dowiedz się więcej</Link>
          </div>
        </FullWidthSection>
        <FullWidthSection css={flex} style={{background: "rgb(234, 184, 234)"}}>
          <div css={[col50, relativePosition]} style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
            <img src={findIt} style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover"}} />
          </div>
          <div css={[col50, boxPadding]} style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
            <H2 id="find-it">Projekt Find.it</H2>
            <p>
              Warsztaty Elementarz UX zaowocowały powstaniem czteroosobowego zespołu, w którym podjęliśmy się próby zaprojektowania aplikacji do organizacji ludzi wokół pet-projektów.
            </p>
            <Link to="/portfolio/find-it"style={{marginTop: "1rem", display: "block"}} >Dowiedz się więcej</Link>
          </div>
        </FullWidthSection>
        <FullWidthSection css={flex} style={{background: "rgb(174, 204, 234)"}}>
          <div css={[col50, relativePosition]} style={{backgroundColor: "rgba(255, 255, 255, 0.8)", order: "1"}}>
            <img src={lmiux} style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover"}} />
          </div>
          <div css={[col50, boxPadding]} style={{backgroundColor: "rgba(255, 255, 255, 0.8)", order: "0"}}>
            <H2 id="let-me-in-ux">Podcast Let me in UX</H2>
            <H6>Od nas dla Was</H6>
            <p>
              Kiedy zacząłem bardziej interesować się tematyką projektowania User Experience, zapropononwałem dziewczynom z teamu Find.It nagrywanie audycji internetowej poświeconej stawianiu pierwszych kroków w branży.
            </p>
            <Link to="/portfolio/let-me-in-ux"style={{marginTop: "1rem", display: "block"}} >Dowiedz się więcej</Link>
          </div>
        </FullWidthSection>
        <FullWidthSection css={flex} style={{background: "rgb(224, 194, 174)"}}>
          <div css={[col50, relativePosition]} style={{backgroundImage: `url(${szukajslowa})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}}>
          </div>
          <div css={[col50, boxPadding]} style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
            <H2 id="szukaj-slowa">Aplikacja Szukaj Słowa</H2>
            <p>
              To mój autorski, fullstackowy projekt aplikacji przeznaczonej do wyszukiwania komentarzy biblijnych za pomocą specyficznych odnośników do wersetów, tzw. sigli. Projekt jest rozwijany wspólnie ze społecznością chrześcijan, którzy zgłaszali się na grupach w mediach społecznościowych.
            </p>
            <Link to="/portfolio/szukaj-slowa"style={{marginTop: "1rem", display: "block"}} >Dowiedz się więcej</Link>
          </div>
        </FullWidthSection>
      </Main>
    </ThemeProvider>
  </>
  )
}

export default Portfolio;