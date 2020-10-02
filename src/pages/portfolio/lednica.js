import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../style/organisms/Layout"
import RegularSection from "../../style/organisms/RegularSection"
import FullWidthSection from "../../style/organisms/FullWidthSection"
import MyHelmet from '../../style/components/MyHelmet';
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../../style/theme"
import GlobalStyle from "../../style/organisms/GlobalStyle"
import { StyledHeader } from "../../style/organisms/Header"
import { H1, H2 } from "../../style/atoms/Headings"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Breadcrumb, CrumbLink } from "../../style/molecules/Breadcrumb"

import biurkoImg from "./teamaton/biurko.jpg"
import lednica01 from "./lednica/lednica01.jpg"
import filmCrew1 from "./lednica/film-crew-1.jpg"
import filmCrew2 from "./lednica/film-crew-2.jpg"
import filmCrew3 from "./lednica/film-crew-3.jpg"
import filmCrew4 from "./lednica/film-crew-4.jpg"
import warsztaty1 from "./lednica/warsztaty-1.jpg"
import warsztaty2 from "./lednica/warsztaty-2.jpg"
import warsztaty3 from "./lednica/warsztaty-3.jpg"

const Main = styled.main`
  margin-top: 2rem;
`

export default function Teamaton() {
  const myHelmetData = {
    description: "Portfolio - Lednica2000 - Mateusz Kozłowski",
    domain: "https://codeforheaven.com",
    externalScriptsUrls: [],
    facebookThumbnail: "",
    title: "Portfolio - Lednica2000 - Mateusz Kozłowski",
    slug: "portfolio/lednica",
  };


  return (
    <>
    <MyHelmet data={myHelmetData} />
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledHeader>
          <H1 style={{order: "2"}}>Lednica2000</H1>
          <Breadcrumb style={{order: "1", width: "100%", paddingLeft: "0"}}>
            <li>
              <CrumbLink to="/portfolio">Portfolio</CrumbLink>
            </li>
            <li>
              <CrumbLink to="/portfolio/teamaton">Lednica2000</CrumbLink>
            </li>
          </Breadcrumb>
        </StyledHeader>
        <Main>
          <FullWidthSection>
            <img src={lednica01} style={{height: "400px", objectFit: "cover", width: "100%"}} />
          </FullWidthSection>
          <RegularSection>
            <p>
            Przez lata włożyłem bardzo dużo serca w rozwój i organizację spotkań, które co roku gromadzą dziesiątki tysięcy młodych osób. Na studiach, razem z kolegą otworzyliśmy Grupę Promocji na nowoczesną obecność w Internecie: media społecznościowe i Youtube. Korzystając z amatorskiego <i>handycama</i> i bazarowych wersji oprogramowania tworzyliśmy treść, dzięki której chcieliśmy docierać do tysięcy naszych rówieśników już dawno obecnych w sieci.
            </p>
            <p>
            Po kilkuletniej przerwie wróciłem do Grupy na zaproszenie mojej przyjaciółki, która powiedziała: <strong>"musisz!"</strong> Pośród wielu różnych projektów, które razem zrealizowaliśmy w pamięci szczególnie utkwiło mi tych kilka.
            </p>
            <H2 id="spot">Spot "Ty wiesz, że Cię kocham"</H2>
            <p>
              W 2019 r. zespół video, którego byłem liderem, otrzymał niełatwe zadanie nakręcenia spotu reklamującego hasło nadchodzącego spotkania. W trakcie kilku kolejnych spotkań kreatywnych opracowaliśmy kształt scenariusza, rozrysowaliśmy story board i zaplanowaliśmy plan dnia zdjęciowego
            </p>
            <p>
              Jako lider zespołu pełniłem przede wszystkim role producenta i reżysera. Do moich zadań należało:
            </p>
            <ul>
              <li>znalezienie odpowiednich planów,</li>
              <li>upewnienie się, że mamy cały sprzęt, jakiego potrzebujemy</li>
              <li>zgranie operatorów i aktorów ze sobą podczas całego dnia zdjęciowego</li>
              <li>dbanie o wysoki poziom artystyczny</li>
              <li>dbanie o wysoki poziom nagrań</li>
            </ul>

<div style={{backgroundColor: "#fafafa", display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "0.6rem", marginTop: "1rem", padding: "0.6rem", textAlign:"center", fontSize: "0.8rem",}}>
    <div>
        <img src={filmCrew1} />
        <span>Praca na planie</span>
    </div>
    <div>
        <img src={filmCrew4} />
        <span>Plan spotu Kroki do Lednicy</span>
    </div>
    <div>
        <img src={filmCrew2} />
        <span>Najlepsi operatorzy w Poznaniu</span>
    </div>
    <div>
        <img src={filmCrew3} />
        <span>Operatorzy i aktorzy w jednym</span>
    </div>
</div>

<H2 id="warsztat">Warsztat na początku roku</H2>
<p>
Nowy rok oznacza nowe pokłady entuzjazmu i zaangażowania. Chcąc je jak najlepiej spożytkować, spotkaliśmy się pewnego popołudnia, żeby popracować nad strategią naszej aktywności w Internecie.
</p>

<p>
Zależało mi, żeby nasza dyskusja wyglądała inaczej niż te podczas cotygodniowych spotkań całej grupy. Poprosiłem o statystyki oraz dane demograficzne z naszych profili na mediach społecznościowych. Dzięki odrobinie celnych pytań udało się nam przełamać krąg ciągle tych samych pomysłów i uwag.
</p>

<p>
Dla uporządkowania wszystkich nowych spostrzeżeń przeprowadziłem krótkie ćwiczenie, podczas którego min. stworzyliśmy podstawowe persony naszych odbiorców w sieci. Dzięki nim osiągnęliśmy wspólne zrozumienie naszych celów i przyjrzeliśmy się potrzebom ludzi, którzy odwiedzali nasze strony. Porozumienie i empatia wyzwoliły w nas falę nowych pomysłów. 
</p>

<p>
Rezultatem tych zaimprowizowanych warsztatów było kilka kampanii na Facebooku zrealizowanych zarówno w bieżącym roku, jak i kolejnym. Wolontariusze uczestniczący w spotkaniu wspominali je jeszcze w kolejnych miesiącach, a utworzone przez nas persony stanowiły punkt odniesienia na zebraniach całej grupy.
</p>

<div style={{backgroundColor: "#fafafa", display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "0.6rem", marginTop: "1rem", padding: "0.6rem", textAlign:"center", fontSize: "0.8rem",}}>
    <div style={{gridRow: "1 / 3"}}>
        <img src={warsztaty1} />
        <span>Praca na planie</span>
    </div>
    <div>
        <img src={warsztaty2} />
        <span>Plan spotu Kroki do Lednicy</span>
    </div>
    <div>
        <img src={warsztaty3} />
        <span>Najlepsi operatorzy w Poznaniu</span>
    </div>
</div>

<p>
Nieco więcej o tym warsztacie opowiadam <a href="https://letmeinux.com/design-thinking-prawdziwe-historie">w piątym odcinku podcastu LET ME IN UX</a>.
</p>

<H2 id="www">Wsparcie techniczne nowo powstającej strony internetowej</H2>

<p>
W połowie bieżącego roku zespół pracujący nad nową stroną [Lednica2000.pl](http://lednica2000.pl) poprosił mnie o wsparcie i pomoc związane ze stackiem technologicznym, który chcieli wybrać. 
</p>
<p>
Prace są w tej chwili wstrzymane, ponieważ zespół składający się w większości z tegorocznych maturzystów nie wrócił jeszcze z wakacji.
</p>
          </RegularSection>
        </Main>
  </ThemeProvider>
  </>
  )
}