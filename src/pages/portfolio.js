import React from 'react';
import { graphql, Link } from 'gatsby';

import {
  centered,
  viewportHigh,
  col50,
  flex,
  boxPadding,
  relativePosition,
} from '../style/organisms/Divs';
import MyHelmet from '../style/components/MyHelmet';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '../style/theme';
import GlobalStyle from '../assets/styles/GlobalStyle';
import ResettedLink from '../style/atoms/ResettedLink';
import { H2, H3, H6 } from '../style/atoms/Headings';
import TeamatonRotatingLogo from '../style/atoms/TeamatonRotatingLogo';

import BadgesBelt from '../components/BadgesBelt/BadgesBelt';

import PortfolioSection_1 from './portfolio/portfolioSection1';

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

  min-height: 260px;
`;

const TextWrapper = styled.div`
  ${col50}
  ${boxPadding}
`;

const LearnMoreLink = styled(Link)`
  margin-top: 1rem;
  display: block;
`;

export default function Portfolio({ data }) {
  const {
    CvPdf,
    facebookThumbnail,
    lednica01,
    teamaton01,
    teamaton02,
    lmiux,
    findIt,
    roboticketLogo
  } = data;
  const myHelmetData = {
    description:
      'Czy normalny misjonarz z bródką może zostać... projektantem User Experience? Ostatnie kilka lat to najpierw misje w Nowej Zelandii, a następnie praca w world wide webie - żeby pozostać mobilnym i robić ciekawe rzeczy. Obecny rok to czas szkoleń w Porozumieniu bez przemocy oraz powrót na studia z psychologii. Wreszcie ostanie dwa miesiące, to pierwsze kroki w user experience.',
    domain: 'https://codeforheaven.com',
    externalScriptsUrls: [],
    facebookThumbnail: facebookThumbnail.publicURL,
    title: 'Portfolio - Mateusz Kozłowski',
    slug: 'portfolio',
  };
  return (
    <>
      <MyHelmet data={myHelmetData} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PortfolioStyle />
        <Main>
          <div
            css={[centered, viewportHigh]}
            style={{ backgroundColor: '#fafafa' }}
          >
            <PortfolioSection_1 cvPdf={CvPdf.publicURL} />
          </div>
          <div id="mainsection">
            <p style={{ textAlign: 'center', padding: '1rem 0' }}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/-9Ivat0imI0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </p>
          </div>
          <section>
            <BadgesBelt />
            <PortfolioHomeSection>
              <LogoWrapper style={{ backgroundColor: '#A3106E0A' }}>
                <img
                    src={roboticketLogo.publicURL}
                  />
              </LogoWrapper>
              <TextWrapper style={{ backgroundColor: '#A3106E1F' }} >
                <H2>
                  <ResettedLink to="/portfolio/roboticket">
                    UI, UX - Roboticket
                  </ResettedLink>
                </H2>
                <H6>
                  <i>Piłka jest okrągła a bramki są dwie</i>
                </H6>
                <p>
                  Praca nad oprogramowaniem dla wydarzeń sportowych dostarcza wielu emocji. System, który nieustannie się rozwija potrzebuje odpowiedniego formowania, aby zachował spójność i pozostał zrozumiały dla każdego użytkownika.
                </p>
                <LearnMoreLink to="/portfolio/roboticket">
                  Dowiedz się więcej
                </LearnMoreLink>
              </TextWrapper>
            </PortfolioHomeSection>
            <PortfolioHomeSection style={{ background: '#ccc' }}>
              <LogoWrapper style={{ backgroundColor: '#ffffffcc' }}>
                <TeamatonRotatingLogo>
                  <img
                    src={teamaton01.publicURL}
                    style={{ display: 'inline-block', marginRight: '20px' }}
                  />
                  <img
                    src={teamaton02.publicURL}
                    style={{ display: 'inline-block', width: '70%' }}
                  />
                </TeamatonRotatingLogo>
              </LogoWrapper>
              <TextWrapper style={{ backgroundColor: '#ffffffaa' }}>
                <H2 id="teamaton">
                  <ResettedLink to="/portfolio/teamaton">
                    Projektowanie, realizacja, utrzymanie - Teamaton
                  </ResettedLink>
                </H2>
                <H6>
                  <i>Poza to, co widać</i>
                </H6>
                <p>
                  Moja współpraca z tym założonym w Berlinie startupem dotyczyła
                  różnych kompetencji. Zaczynałem od pracy jako Junior C#
                  Developer jednak szybko przeszedłem do rozwijania front-endu.
                  Za pomocą bibliotek JavaScriptu i pre-procesorów SASS
                  stworzyłem wiele biznesowych rozwiązań dla naszych klientów.
                </p>
                <LearnMoreLink to="/portfolio/teamaton">
                  Dowiedz się więcej
                </LearnMoreLink>
              </TextWrapper>
            </PortfolioHomeSection>
            <PortfolioHomeSection style={{ background: 'rgb(184, 214, 184)' }}>
              <LogoWrapper
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
              >
                <img
                  src={lednica01.publicURL}
                  style={{ width: '60%', minWidth: '240px' }}
                />
              </LogoWrapper>
              <TextWrapper
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.667)' }}
              >
                <H2 id="lednica">
                  <ResettedLink to="/portfolio/lednica">
                    Zaangażowana kreacja - Lednica2000
                  </ResettedLink>
                </H2>
                <H6>Warsztaty, promocja, edukacja</H6>
                <p>
                  Współpracowałem przy tworzeniu tych wielkich spotkań młodzieży
                  przez lata. W ostatnich latach angażowałem się przede
                  wszystkim w prace kreatywną. Pomagałem i prowadziłem zespoły,
                  które tworzyły filmy i stategie dla mediów społecznościowych.
                </p>
                <LearnMoreLink to="/portfolio/lednica">
                  Dowiedz się więcej
                </LearnMoreLink>
              </TextWrapper>
            </PortfolioHomeSection>
            <PortfolioHomeSection style={{ background: 'rgb(234, 184, 234)' }}>
              <LogoWrapper
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
              >
                <img
                  src={findIt.publicURL}
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </LogoWrapper>
              <TextWrapper
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
              >
                <H2 id="find-it">
                  <ResettedLink to="/portfolio/find-it">
                    Projekt Find.it
                  </ResettedLink>
                </H2>
                <p>
                  Warsztaty Elementarz UX zaowocowały powstaniem czteroosobowego
                  zespołu, w którym podjęliśmy się próby zaprojektowania
                  aplikacji do organizacji ludzi wokół pet-projektów.
                </p>
                <LearnMoreLink to="/portfolio/find-it">
                  Dowiedz się więcej
                </LearnMoreLink>
              </TextWrapper>
            </PortfolioHomeSection>
            <PortfolioHomeSection style={{ background: 'rgb(174, 204, 234)' }}>
              <LogoWrapper
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
              >
                <img
                  src={lmiux.publicURL}
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </LogoWrapper>
              <TextWrapper
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
              >
                <H2 id="let-me-in-ux">
                  <ResettedLink to="/portfolio/let-me-in-ux">
                    Podcast i grupa Let me in UX
                  </ResettedLink>
                </H2>
                <H6>Od nas dla Was</H6>
                <p>
                  Kiedy zacząłem bardziej interesować się tematyką projektowania
                  User Experience, zapropononwałem dziewczynom z teamu Find.It
                  nagrywanie audycji internetowej poświeconej stawianiu
                  pierwszych kroków w branży.
                </p>
                <LearnMoreLink to="/portfolio/let-me-in-ux">
                  Dowiedz się więcej
                </LearnMoreLink>
              </TextWrapper>
            </PortfolioHomeSection>
            <PortfolioHomeSection style={{ background: 'rgb(224, 194, 174)' }}>
              <LogoWrapper
                style={{
                  background: '#ffdab9',
                  fontSize: 'calc(2.8rem + 2vw)',
                  fontFamily: 'serif',
                  fontWeight: '700',
                }}
              >
                <p style={{ lineHeight: '1.1' }}>Szukaj Słowa</p>
              </LogoWrapper>
              <TextWrapper
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
              >
                <H2 id="szukaj-slowa">
                  <ResettedLink to="/portfolio/szukaj-slowa">
                    Aplikacja Szukaj Słowa
                  </ResettedLink>
                </H2>
                <H6>React, Node, Express i MongoDB</H6>

                <p>
                  To mój autorski, fullstackowy projekt aplikacji przeznaczonej
                  do wyszukiwania komentarzy biblijnych za pomocą specyficznych
                  odnośników do wersetów, tzw. sigli. Projekt jest rozwijany
                  wspólnie ze społecznością chrześcijan, którzy zgłaszali się na
                  grupach w mediach społecznościowych.
                </p>
                <LearnMoreLink to="/portfolio/szukaj-slowa">
                  Dowiedz się więcej
                </LearnMoreLink>
              </TextWrapper>
            </PortfolioHomeSection>
          </section>
        </Main>
      </ThemeProvider>
    </>
  );
}

export const sectionQuery = graphql`
  query sectionQuery {
    CvPdf: file(name: { eq: "Mateusz-Kozlowski-CV" }) {
      publicURL
    }
    facebookThumbnail: file(name: { eq: "fbThumb-portfolio" }) {
      childImageSharp {
        fixed(width: 1200, height: 628) {
          src
        }
      }
    }
    lednica01: file(name: { eq: "lednica__logo" }) {
      publicURL
    }
    teamaton01: file(name: { eq: "teamaton-logo" }) {
      publicURL
    }
    teamaton02: file(name: { eq: "teamaton-new" }) {
      publicURL
    }
    lmiux: file(name: { eq: "lmiux" }) {
      publicURL
    }
    findIt: file(name: { eq: "findIt" }) {
      publicURL
    }
    roboticketLogo: file(name: { eq: "roboticket-logo" }) {
      publicURL
    }
  }
`;
