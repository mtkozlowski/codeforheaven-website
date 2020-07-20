import React from "react"
import Layout from "../style/organisms/Layout"
import {createGlobalStyle} from 'styled-components';
import { Helmet } from "react-helmet"
import ContentPage from "../style/organisms/ContentPage"

const GlobalStyle = createGlobalStyle`
  .content {
    grid-area: content
  }
  .content h1 {
    font-size: ${({theme}) => theme.font.largeHeaderSize}

    @media(max-width: ${({theme}) => theme.responsive.mobile}) {
      font-size: ${({theme}) => theme.font.largeHeaderSize__Mobile};
    }
  }
  .content a {
    font-size: ${({theme}) => theme.font.blogPostTeaserSize}
  }
`;

const koledy = [

];

export default () => (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Kolędy</title>
      <link rel="canonical" href="http://codeforheaven.com/koledy" />
    </Helmet>
    <Layout>
      <GlobalStyle/>
        <ContentPage>
            <div className="content">
            <h1>
                Kolędy!
            </h1>
            <ol>
                <li><a href="https://piesni-religijne.pl/koleda/ach-ubogi-zlobie/">Ach ubogi żłobie</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/ach-ubogi-zlobie/">Anioł pasterzom mówił</a></li>
                <li><a href="https://www.polskatradycja.pl/piesni/koledy/486-a-wczora-z-wieczora.html">A wczora z wieczora</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/bog-sie-rodzi/">Bóg się rodzi</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/bracia-patrzcie-jeno/">Bracia, patrzcie jeno</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/cicha-noc-swieta-noc/">Cicha noc, święta noc</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/do-szopy-hej-pasterze/">Do szopy, hej pasterze</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/dzisiaj-w-betlejem/">Dzisiaj w Betlejem</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/gdy-sie-chrystus-rodzi/">Gdy się Chrystus rodzi</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/gdy-sliczna-panna/">Gdy śliczna Panna</a></li>
                <li><a href="https://www.musixmatch.com/lyrics/TGD/Gloria">Gloria - TGD</a></li>
                <li><a href="https://www.musixmatch.com/lyrics/Arka-Noego/Gore-gwiazda-Jezusowi">Gore gwiazda</a></li>
                <li><a href="http://teksty.org/koledy,hej-w-dzien-narodzenia,tekst-piosenki">Hej w dzień narodzenia</a></li>
                <li><a href="http://teksty.org/koledy,jezusa-narodzonego,tekst-piosenki">Jezusa narodzonego</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/jezus-malusienki/">Jezus malusieńki</a></li>
                <li><a href="https://www.polskatradycja.pl/piesni/koledy/487-jezu-sliczny-kwiecie.html">Jezu, śliczy kwiecie    </a></li>
                <li><a href="https://pl.m.wikisource.org/wiki/%C5%9Apiewnik_ko%C5%9Bcielny/Kiedy_kr%C3%B3l_Herod_kr%C3%B3lowa%C5%82">Kiedy król Herod królował</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/lulajze-jezuniu/">Lulajże, Jezuniu</a></li>
                <li><a href="https://www.musixmatch.com/lyrics/TGD-feat-Kuba-Badach-2/Mario-Czy-Ju%C5%BC-Wiesz-feat-Kuba-Badach">Mario czy już wiesz</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/medrcy-swiata/">Mędrcy świata</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/mizerna-cicha-stajenka-licha/">Mizerna, cicha, stajenka licha</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/narodzil-sie-nam-zbawiciel/">Narodził się nam Zbawiciel</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/nie-bylo-miejsca-dla-ciebie/">Nie było miejsca dla Ciebie</a></li>
                <li><a href="https://www.musixmatch.com/lyrics/GOLEC-UORKIESTRA/O-Gwiazdo-Betlejemska">O gwiazdo betlejemska</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/oj-maluski-maluski/">Oj, maluśki, maluśki</a></li>
                <li><a href="https://piosenkireligijne.pl/o-jozefie-czego-chcecie/">O, Józefie</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/pojdzmy-wszyscy-do-stajenki/">Pójdźmy wszyscy do stajenki</a></li>
                <li><a href="https://pl.m.wikisource.org/wiki/Pastora%C5%82ki_i_kol%C4%99dy/Pomalu%C5%9Bku_J%C3%B3zefie,_pomalu%C5%9Bku">Pomaluśku Józefie</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/przybiezeli-do-betlejem-pasterze/">Przybieżeli do Betlejem pasterze</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/triumfy-krola-niebieskiego/">Triumfy Króla Niebieskiego</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/wsrod-nocnej-ciszy/">Wśród nocnej ciszy</a></li>
                <li><a href="https://piesni-religijne.pl/koleda/w-zlobie-lezy/">W żłobie leży</a></li>
            </ol>
            </div>
        </ContentPage>
    </Layout>
    </>
  )