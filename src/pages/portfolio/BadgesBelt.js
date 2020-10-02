import React from "react";
import styled from "styled-components";

import soldier from "./BadgesBelt/soldier-old.svg"
import javascript from "./BadgesBelt/javascript.svg"
import html from "./BadgesBelt/html.svg"
import css from "./BadgesBelt/css.svg"
import ang from "./BadgesBelt/ang.svg"
import git from "./BadgesBelt/git.svg"
import react from "./BadgesBelt/react.svg"
import gatsby from "./BadgesBelt/gatsby.svg"

import { centered, viewportHigh, textCentered, col50, flex, boxPadding, relativePosition } from "../../style/organisms/Divs"
import { H4, H6 } from "../../style/atoms/Headings"

const Wrapper = styled.div`
  background-color: #f7eccc;
  ${centered}
  ${viewportHigh}

  display: flex;
  padding: 2rem;
  position: relative;
`;

const BadgesWrapper = styled.div`
  display: flex;
`;

const BadgeImg = styled.img`
  margin: 1rem;
  height: 180px;
`;

const ChildrenWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  border: .3rem solid #444;
  display: none;
  font-size: .9rem;
  line-height: 1.1;
  max-width: 320px;
  width: 120%;
  padding: .4rem .4rem .3rem;
  position: absolute;
  top: 2rem;
  left: -10%;

  z-index: 1;

  img:hover + &, &:hover {display: block;}
`;

const Badge = ({src, children}) => {

  return(
    <div style={{position: "relative"}}>
      <BadgeImg src={src} />
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
    </div>
  );
}

const WingsWrapper = styled.div`

`;

const WingsImg = styled.img`
  max-width: 200px;
  display: block;
`;

const Wings = ({src, children}) => {
  return (
    <div style={{position: "relative"}}>
      <WingsImg src={src}/>
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
    </div>
  )
}

const BadgesBelt = () => {
  return (
    <Wrapper>
      <p style={{fontSize: "0.8rem", position: "absolute", top: "0", margin: "2rem auto 0"}}><i>Wskaż dowolną grafikę myszką, aby zobaczyć treść.</i></p>
      <div style={{maxWidth: "360px", position: "relative"}}>
        <img src={soldier} style={{ minHeight: "200px", maxHeight: "350px"}} />
        <ChildrenWrapper>
          <p style={{padding: "0.4rem 1rem", textAlign: "center"}}>
            Na froncie potrzebni są najlepsi. Siłą każdego twórcy jest jego kreatywność i zdolność obserwacji. Jednak do sprawnego tworzenia, potrzebne są konkretne umiejętności.
          </p>
        </ChildrenWrapper>
        <H4 style={{textAlign: "center", marginTop: "0"}}>🎶 <br /><i>I got soul,<br />
        but I'm not a soldier</i></H4>
      </div>
      <div>
      <BadgesWrapper>
        <Badge src={javascript}>
          <H4>Javascript</H4>
          <p>
            Kapryśny, ale jednak król popularności wśród języków programowania. Nie mogło go tu zabraknąć. Uwielbiam jego możliwości i <i>community</i>.
          </p>
        </Badge>
        <Badge src={html}>
          <H4>HTML</H4>
          <p>
            Dobra i dostępna strona zaczyna się od przemyślanego i semantycznego HTMLu 🧱
          </p>
        </Badge>
        <Badge src={css}>
          <H4>CSS</H4>
          <p>
            Style mają moc. Nie tylko przykuwają wzrok, ale porządkują treść i sprawiają, że przyjemniej spędza się czas na stronie.
          </p>
        </Badge>
      </BadgesWrapper>
      <BadgesWrapper>
        <Badge src={gatsby}>
          <H4>GatsbyJS</H4>
          <p>
            Rok temu zwrócił moją uwagę i postanowiłem zbudować swój blog od zera w tej technologii. To portfolio również 💖
          </p>
        </Badge>
        <Badge src={ang}>
          <H4>English</H4>
          <p>
            Angielskiego zaczęła uczyć mnie ciocia, gdy miałem 6 lat. W 2011 zdobyłem Certificate of Advanced English (CAE) 🎩
          </p>
        </Badge>
      </BadgesWrapper>
      </div>
      <WingsWrapper>
        <Wings src={react} >
          <H4>React</H4>
          <p>
            W React tworzę klienta mojej aplikacji biblijnej Szukaj Słowa. 
          </p>
        </Wings>
        <Wings src={git} >
          <H4>Git</H4>
          <p>
            Kontrola wersji, sprawny code review, branching i łatwa współpraca z innymi 🔫
          </p>
        </Wings>
      </WingsWrapper>

    </Wrapper>
  )
};

export default BadgesBelt;