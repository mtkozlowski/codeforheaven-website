import React from "react"
import { graphql, Link } from "gatsby"
import {
  RegularSection,
  FullWidthSection,
} from "../../style/organisms/Sections"
import MyHelmet from "../../style/components/MyHelmet"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../../style/theme"
import GlobalStyle from "../../style/organisms/GlobalStyle"
import { StyledHeader } from "../../style/organisms/Header"
import { H1, H2 } from "../../style/atoms/Headings"
import Img from "gatsby-image"
import Footer from "../../style/organisms/Footer"

import { Breadcrumb, CrumbLink } from "../../style/molecules/Breadcrumb"

const Main = styled.main`
  margin-top: 2rem;
`

const Testimony = styled.div`
  background-color: #f1f7f1;
  padding: 1rem;
  border: 1px solid #e7f1e7;
  margin-top: 1rem;
`

const FourImagesContainer = styled.div`
  background-color: "#fafafa";
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.6rem;
  margin-top: 1rem;
  text-align: center;
  font-size: 0.8rem;

  ${({ theme }) => theme.media.phone} {
    grid-template-columns: 1fr;
  }
`

const WorkshopPhotosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.6rem;
  margin-top: 1rem;
  text-align: center;
  font-size: 0.8rem;

  ${({ theme }) => theme.media.phone} {
    grid-template-columns: 1fr;
  }
`

export default function Lednica({ data }) {
  const {
    Lednica01,
    Warsztaty1,
    Warsztaty2,
    Warsztaty3,
    FilmCrew1,
    FilmCrew2,
    FilmCrew3,
    FilmCrew4,
    WspolpracaLednica,
  } = data

  const myHelmetData = {
    description: "Portfolio - Lednica2000 - Mateusz Kozłowski",
    domain: "https://codeforheaven.com",
    externalScriptsUrls: [],
    facebookThumbnail: "",
    title: "Portfolio - Lednica2000 - Mateusz Kozłowski",
    slug: "portfolio/lednica",
  }

  return (
    <>
      <MyHelmet data={myHelmetData} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledHeader>
          <H1 style={{ order: "2" }}>Lednica2000</H1>
          <Breadcrumb style={{ order: "1", width: "100%", paddingLeft: "0" }}>
            <li>
              <CrumbLink to="/portfolio">Portfolio</CrumbLink>
            </li>
            <li>
              <CrumbLink to="/portfolio/lednica">Lednica2000</CrumbLink>
            </li>
          </Breadcrumb>
        </StyledHeader>
        <Main>
          <FullWidthSection>
            <Img fluid={Lednica01.fluid} />
          </FullWidthSection>
          <RegularSection>
            <p style={{ marginTop: "1rem" }}>
              Przez lata włożyłem bardzo dużo serca w rozwój i organizację
              spotkań, które co roku gromadzą dziesiątki tysięcy młodych osób.
              Na studiach, razem z kolegą otworzyliśmy Grupę Promocji na
              nowoczesną obecność w Internecie: media społecznościowe i Youtube.
              Korzystając z amatorskiego <i>handycama</i> i bazarowych wersji
              oprogramowania tworzyliśmy treść, dzięki której chcieliśmy
              docierać do tysięcy naszych rówieśników już dawno obecnych w
              sieci.
            </p>
            <p>
              Po kilkuletniej przerwie wróciłem do Grupy na zaproszenie mojej
              przyjaciółki, która powiedziała: <strong>"musisz!"</strong> Pośród
              wielu różnych projektów, które razem zrealizowaliśmy w pamięci
              szczególnie utkwiło mi tych kilka.
            </p>
            <Testimony>
              <p>
                <em>
                  Mateusz dobrze radzi sobie w warunkach stresu i napięcia
                  czasowego - nie traci energii ani zapału, doprowadza projekty
                  do końca. Współpraca z Mateuszem była zawsze bardzo owocna.
                </em>
              </p>
              <p style={{ textAlign: "right", fontSize: "0.8rem" }}>
                Dominika Chylewska
                <br />
                Koordynatorka Biura Prasowego w latach 2016 - 2017
                <br />
                <a href={WspolpracaLednica.publicURL}>
                  Przeczytaj cały list polecający
                </a>
              </p>
            </Testimony>
            <H2 id="spot">Spot "Ty wiesz, że Cię kocham"</H2>
            <p>
              W 2019 r. zespół video, którego byłem liderem, otrzymał niełatwe
              zadanie nakręcenia spotu reklamującego hasło nadchodzącego
              spotkania. W trakcie kilku kolejnych spotkań kreatywnych
              opracowaliśmy kształt scenariusza, rozrysowaliśmy story board i
              zaplanowaliśmy plan dnia zdjęciowego
            </p>
            <p>
              Jako lider zespołu pełniłem przede wszystkim role producenta i
              reżysera. Do moich zadań należało:
            </p>
            <ul>
              <li>znalezienie odpowiednich planów,</li>
              <li>upewnienie się, że mamy cały sprzęt, jakiego potrzebujemy</li>
              <li>
                zgranie operatorów i aktorów ze sobą podczas całego dnia
                zdjęciowego
              </li>
              <li>dbanie o wysoki poziom artystyczny</li>
              <li>dbanie o wysoki poziom nagrań</li>
            </ul>

            <FourImagesContainer>
              <div>
                <Img fluid={FilmCrew1.fluid} />
                <span>Praca na planie</span>
              </div>
              <div>
                <Img fluid={FilmCrew4.fluid} />
                <span>Plan spotu Kroki do Lednicy</span>
              </div>
              <div>
                <Img fluid={FilmCrew2.fluid} />
                <span>Najlepsi operatorzy w Poznaniu</span>
              </div>
              <div>
                <Img fluid={FilmCrew3.fluid} />
                <span>Operatorzy i aktorzy w jednym</span>
              </div>
            </FourImagesContainer>

            <H2 id="warsztat">Warsztat na początku roku</H2>
            <p>
              Nowy rok oznacza nowe pokłady entuzjazmu i zaangażowania. Chcąc je
              jak najlepiej spożytkować, spotkaliśmy się pewnego popołudnia,
              żeby popracować nad strategią naszej aktywności w Internecie.
            </p>

            <p>
              Zależało mi, żeby nasza dyskusja wyglądała inaczej niż te podczas
              cotygodniowych spotkań całej grupy. Poprosiłem o statystyki oraz
              dane demograficzne z naszych profili na mediach społecznościowych.
              Dzięki odrobinie celnych pytań udało się nam przełamać krąg ciągle
              tych samych pomysłów i uwag.
            </p>

            <p>
              Dla uporządkowania wszystkich nowych spostrzeżeń przeprowadziłem
              krótkie ćwiczenie, podczas którego min. stworzyliśmy podstawowe
              persony naszych odbiorców w sieci. Dzięki nim osiągnęliśmy wspólne
              zrozumienie naszych celów i przyjrzeliśmy się potrzebom ludzi,
              którzy odwiedzali nasze strony. Porozumienie i empatia wyzwoliły w
              nas falę nowych pomysłów.
            </p>

            <p>
              Rezultatem tych zaimprowizowanych warsztatów było kilka kampanii
              na Facebooku zrealizowanych zarówno w bieżącym roku, jak i
              kolejnym. Wolontariusze uczestniczący w spotkaniu wspominali je
              jeszcze w kolejnych miesiącach, a utworzone przez nas persony
              stanowiły punkt odniesienia na zebraniach całej grupy.
            </p>

            <WorkshopPhotosContainer>
              <div style={{ gridRow: "1 / 3" }}>
                <Img fluid={Warsztaty1.fluid} />
                <span>Warsztaty dot. strategii w Social Media</span>
              </div>
              <div>
                <Img fluid={Warsztaty2.fluid} />
                <span>Warsztaty dla całego zespołu Biura Prasowego</span>
              </div>
              <div>
                <Img fluid={Warsztaty3.fluid} />
                <span>Warsztatowy icebreaker</span>
              </div>
            </WorkshopPhotosContainer>

            <p>
              Nieco więcej o tym warsztacie opowiadam{" "}
              <a href="https://letmeinux.com/design-thinking-prawdziwe-historie">
                w piątym odcinku podcastu LET ME IN UX
              </a>
              .
            </p>

            <H2 id="www">
              Wsparcie techniczne nowo powstającej strony internetowej
            </H2>
            <p>
              W połowie bieżącego roku zespół pracujący nad nową stroną{" "}
              <a href="//lednica2000.pl">Lednica2000.pl</a> poprosił mnie o
              wsparcie i pomoc związane ze stackiem technologicznym, który
              chcieli wybrać. Byli zainteresowanie wykorzystaniem generatora
              stron statycznych Gatsby, którego użyłem min. do stworzenia tego
              portfolio oraz bloga. Dlatego doradzam wolontariuszom
              programującym stronę w kwestiach technicznych oraz sprawach
              designu - architektury informacji, dostępności i estetyki.
            </p>
          </RegularSection>
        </Main>
        <Footer>
          <Breadcrumb style={{ paddingLeft: "0" }}>
            <li>
              <CrumbLink to="/portfolio">Portfolio</CrumbLink>
            </li>
            <li>
              <CrumbLink to="/portfolio/lednica">Lednica2000</CrumbLink>
            </li>
          </Breadcrumb>
        </Footer>
      </ThemeProvider>
    </>
  )
}

export const pageQuery = graphql`
  query {
    Lednica01: imageSharp(
      fluid: { originalName: { regex: "/lednica01.jpg/g" } }
    ) {
      fluid(maxHeight: 600, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    Lednica01Mobile: imageSharp(
      fluid: { originalName: { regex: "/lednica01.jpg/g" } }
    ) {
      fluid(maxHeight: 320, maxWidth: 480, cropFocus: EAST) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    Warsztaty1: imageSharp(
      fluid: { originalName: { regex: "/warsztaty-1.jpg/g" } }
    ) {
      fluid(maxWidth: 480) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    Warsztaty2: imageSharp(
      fluid: { originalName: { regex: "/warsztaty-2.jpg/g" } }
    ) {
      fluid(maxWidth: 480) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    Warsztaty3: imageSharp(
      fluid: { originalName: { regex: "/warsztaty-3.jpg/g" } }
    ) {
      fluid(maxWidth: 480) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    FilmCrew1: imageSharp(
      fluid: { originalName: { regex: "/film-crew-1.jpg/g" } }
    ) {
      fluid(maxWidth: 480) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    FilmCrew2: imageSharp(
      fluid: { originalName: { regex: "/film-crew-2.jpg/g" } }
    ) {
      fluid(maxWidth: 480) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    FilmCrew3: imageSharp(
      fluid: { originalName: { regex: "/film-crew-3.jpg/g" } }
    ) {
      fluid(maxWidth: 480) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    FilmCrew4: imageSharp(
      fluid: { originalName: { regex: "/film-crew-4.jpg/g" } }
    ) {
      fluid(maxWidth: 480) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    WspolpracaLednica: file(
      relativePath: { eq: "portfolio/lednica/Wspolpraca-Lednica2000.pdf" }
    ) {
      publicURL
    }
  }
`
