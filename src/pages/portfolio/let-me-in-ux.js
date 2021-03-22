import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from '../../style/theme';

import { H1 } from '../../style/atoms/Headings';
import ImageCaptionParagraph from '../../style/atoms/ImageCaptionParagraph';
import MyHelmet from '../../style/components/MyHelmet';

import { Breadcrumb, CrumbLink } from '../../style/molecules/Breadcrumb';

import GlobalStyle from '../../assets/styles/GlobalStyle';
import { StyledHeader } from '../../style/organisms/Header';
import { RegularSection, WideSection } from '../../style/organisms/Sections';
import Footer from '../../style/organisms/Footer';

import { graphql } from 'gatsby';

const Main = styled.main`
  margin-top: 2rem;
`;

const EpisodesContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.media.minPhone} {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.media.minRegularSection} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const EpisodeImg = styled.img`
  max-width: 100%;
  min-width: 230px;
`;

export default function LetMeInUX({ data }) {
  const {
    episode01,
    episode05,
    episode06,
    episode07,
    episode08,
    episode09,
    podsumowanieWarsztatow,
    naszeTwarze,
  } = data;
  const myHelmetData = {
    description: 'Portfolio - Lednica2000 - Mateusz Kozłowski',
    domain: 'https://codeforheaven.com',
    externalScriptsUrls: [],
    facebookThumbnail: '',
    title: 'Portfolio - Lednica2000 - Mateusz Kozłowski',
    slug: 'portfolio/lednica',
  };

  return (
    <>
      <MyHelmet data={myHelmetData} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledHeader>
          <H1 style={{ order: '2' }}>Podcast Let me in UX</H1>
          <Breadcrumb style={{ order: '1', width: '100%', paddingLeft: '0' }}>
            <li>
              <CrumbLink to="/portfolio">Portfolio</CrumbLink>
            </li>
            <li>
              <CrumbLink to="/portfolio/let-me-in-ux">Let me in UX</CrumbLink>
            </li>
          </Breadcrumb>
        </StyledHeader>
        <Main>
          <RegularSection>
            <p>
              Podcast Let me in UX tworzę razem z Anią Michalik oraz Moniką
              Rybińską. W audycji staramy się opowiedzieć o wszystkim, co wiąże
              się z projektowaniem doświadczenia użytkownika. Ponieważ sami
              stawiamy pierwsze kroki w branży, nasze rozmowy są pełne
              zaciekawienia, świeżości, humoru.
            </p>
            <p>
              <img src={podsumowanieWarsztatow.publicURL} />
            </p>
            <p>
              Każdy jakoś zaczynał, ale mimo tej świadomości, początki często są
              obezwładniające. Dlatego naszym słuchaczom chcemy dodawać otuchy i
              podrzucać ciekawe treści. W połowie września założyliśmy kanał w
              aplikacji Slack, na który zapraszamy wszystkich zainteresowanych
              wspólnym rozwijaniem się.
            </p>
            <p>
              <img src={naszeTwarze.publicURL} />
            </p>
            <p>
              Przygotowanie każdego odcinka to okazja do zgłębienia kolejnego
              tematu. Najlepszym sposobem nauki jest próba wyjaśnienia czegoś
              drugiej osobie. Na spotkaniach redakcyjnych z ogromu artykułów,
              źródeł i natchnień staramy się wyłuskać to, co najważniejsze, aby
              nadać odcinkowi spójny charakter.
            </p>
            <p>
              Prowadząc podcast realizuję swoje redaktorskie marzenia. W audycji
              pełnię rolę głównego gospodarza.{' '}
            </p>
          </RegularSection>
          <WideSection>
            <p></p>
            <ImageCaptionParagraph>
              Poniższe okładki są odnośnikami do poszczególnych odcinków
            </ImageCaptionParagraph>
            <EpisodesContainer>
              <a href="https://www.letmeinux.com/started-from-elementarz-ux-now-we-re-here">
                <EpisodeImg src={episode01.publicURL} alt="" />
              </a>
              <a href="https://www.letmeinux.com/design-thinking-prawdziwe-historie">
                <EpisodeImg src={episode05.publicURL} alt="" />
              </a>
              <a href="https://www.letmeinux.com/poznajemy-jezyki-programowania">
                <EpisodeImg src={episode06.publicURL} alt="" />
              </a>
              <a href="https://www.letmeinux.com/customer-journey-na-wystawie">
                <EpisodeImg src={episode07.publicURL} alt="" />
              </a>
              <a href="https://www.letmeinux.com/rozmowki-technologiczne-jak-sie-komunikujemy">
                <EpisodeImg src={episode08.publicURL} alt="" />
              </a>
              <a href="https://www.letmeinux.com/czy-kazdy-asap-oznacza-fakap">
                <EpisodeImg src={episode09.publicURL} alt="" />
              </a>
            </EpisodesContainer>
          </WideSection>
        </Main>
        <Footer>
          <Breadcrumb style={{ paddingLeft: '0' }}>
            <li>
              <CrumbLink to="/portfolio">Portfolio</CrumbLink>
            </li>
            <li>
              <CrumbLink to="/portfolio/let-me-in-ux">Let me in UX</CrumbLink>
            </li>
          </Breadcrumb>
        </Footer>
      </ThemeProvider>
    </>
  );
}

export const query = graphql`
  {
    episode01: file(name: { eq: "letMeInUx__episode01" }) {
      publicURL
    }
    episode05: file(name: { eq: "letMeInUx__episode05" }) {
      publicURL
    }
    episode06: file(name: { eq: "letMeInUx__episode06" }) {
      publicURL
    }
    episode07: file(name: { eq: "letMeInUx__episode07" }) {
      publicURL
    }
    episode08: file(name: { eq: "letMeInUx__episode08" }) {
      publicURL
    }
    episode09: file(name: { eq: "letMeInUx__episode09" }) {
      publicURL
    }
    podsumowanieWarsztatow: file(
      name: { eq: "letMeInUx__podsumowanie-warsztatow" }
    ) {
      publicURL
    }
    naszeTwarze: file(name: { eq: "letMeInUx__zdj-warszawa" }) {
      publicURL
    }
  }
`;
