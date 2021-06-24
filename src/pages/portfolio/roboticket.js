/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import Img from 'gatsby-image';

import { theme } from '../../style/theme';

import { H1, H3, H4 } from '../../style/atoms/Headings';
import ImageCaptionParagraph from '../../style/atoms/ImageCaptionParagraph';

import MyHelmet from '../../style/components/MyHelmet';

import { Breadcrumb, CrumbLink } from '../../style/molecules/Breadcrumb';

import GlobalStyle from '../../assets/styles/GlobalStyle';
import { RegularSection } from '../../style/organisms/Sections';
import { StyledHeader } from '../../style/organisms/Header';
import Footer from '../../style/organisms/Footer';

const Main = styled.main``;

const Callout = styled.p`
  background-color: #f9f9fa;
  padding: 2rem;
`;

const FourImagesContainer = styled.div`
  background-color: #fafafa;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'drafts'
    'draft'
    'suggestions'
    'result';
  grid-gap: 0.6rem;
  margin-top: 1rem;
  padding: 0.6rem;
  text-align: center;
  font-size: 0.8rem;

  ${({ theme }) => theme.media.minPhone} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'drafts draft'
      'drafts suggestions'
      'result result';
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
    lightbulb,
    uxwriting
  } = data;

  const myHelmetData = {
    description: 'Portfolio - Roboticket - Mateusz Kozłowski',
    domain: 'https://codeforheaven.com',
    externalScriptsUrls: [],
    facebookThumbnail: '',
    title: 'Portfolio - Roboticket - Mateusz Kozłowski',
    slug: 'portfolio/roboticket',
  };

  return (
    <>
      <MyHelmet data={myHelmetData} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledHeader>
          <H1 style={{ order: '2' }}>Roboticket</H1>
          <Breadcrumb style={{ order: '1', width: '100%', paddingLeft: '0' }}>
            <li>
              <CrumbLink to="/portfolio">Portfolio</CrumbLink>
            </li>
            <li>
              <CrumbLink to="/portfolio/teamaton">Roboticket</CrumbLink>
            </li>
          </Breadcrumb>
        </StyledHeader>
        <Main>
          <RegularSection>
            <Callout>
              <img src={lightbulb.publicURL} />{' '}
              <i>
                Firma Roboticket tworzy aplikację do ticketingu i kontroli dostępu na dużych wydarzeniach sportowych. Klientami firmy są polskie kluby piłkarskie, żużlowe oraz reprezentacje narodowe.
              </i>
            </Callout>
            <p>
              Ze względu na bieżący charakter wymienionych poniżej prac, nie mogę zaspokoić ciekawości czytelnika bezwstydnymi szczegółami lub screenshotami. Postaram się jednak opowiedzieć o swojej pracy w najbardziej przystępny sposób.
            </p>
            <h2>
              Analiza Design Systemu
            </h2>
            <p>
              W ciągu kilkanastu lat istnienia produktu na rynku w aplikacji rozwinął się własny design system oparty w dużej mierze na wczesnej wersji Material Design. Moja praca na tym polu polega na analizie i modernizacji zastanych komponentów, template'ów oraz widoków.
            </p>
            <p>
              W tym celu w trakcie zapoznawania się z systemem, tworzę wizualne notatki, a te z kolei układam w sieć połączeń, dzięki której mogę w łatwiejszy sposób zauważyć powiązania, miejsca, które wymagają uspójnienia itp.
            </p>
            <h2>Poprawa UX Writing aplikacji</h2>
            <p>
              Aplikacja wspiera wiele języków, co jest ogromnym atutem w porównaniu z innymi dostępnymi rozwiązaniami na rynku. Niestety, dobranie odpowiednich tekstów było do tej pory oddane w ręce automatycznego translatora.
            </p>
            <p><img src={uxwriting.publicURL} /></p>
            <p>
              Pracę nad poprawą napisów rozpocząłem od stworzenia widocznej częściowo mapy wszystkich tekstów w panelu administracyjnym systemu. Dzięki temu, mogę w łatwy sposób analizować szerszy kontekst, odnajdywać ukryte analogie i wreszcie - mogę znaleźć rozwiązanie.
            </p>
            <h2>Konsultacje z klientami</h2>
              <p>
                Jako osoba odpowiedzialna za interfejs i doświadczenie w aplikacji Roboticket, jestem w częstym kontakcie z przedstawicielami klubów sportowych. Pomagam im dopasować komunikację wizualną ich organizacji do możliwości naszej aplikacji i design systemu.
              </p>
            <h2>Projektowanie nowego Roboticket</h2>
            <p>
              Aplikacja jest w trakcie architektonicznej transformacji. W związku z tym firma, zdecydowała się zaprojektować wiele widoków od nowa. Moja praca polega na zebraniu wymagań, potrzeb użytkowników, zaprojektowaniu interaktywnych makiet (Figma), wdrażaniu styli do nowej aplikacji oraz prowadzeniu prac z developerami.
            </p>
            <h2>Badania użytkowników</h2>
            <p>
              Uważam, że dobre zrozumienie użytkowników to klucz do sukcesu. Swoje poszukiwania rozpocząłem od przeszukania istniejących baz danych użytkowników i transakcji. Szukam przede wszystkim informacji demograficznych, dzięki którym będę mógł dalej sugerować kolejne przypuszczenia.
            </p>
          </RegularSection>
        </Main>
        <Footer>
          <Breadcrumb style={{ paddingLeft: '0' }}>
            <li>
              <CrumbLink to="/portfolio">Portfolio</CrumbLink>
            </li>
            <li>
              <CrumbLink to="/portfolio/roboticket">Roboticket</CrumbLink>
            </li>
          </Breadcrumb>
        </Footer>
      </ThemeProvider>
    </>
  );
}

export const pageQuery = graphql`
  query {
    lightbulb: file(name: { eq: "icon__lightbulb" }) {
      publicURL
    }
    uxwriting: file(name: { eq: "ux-writing" }) {
      publicURL
    }
  }
`;
