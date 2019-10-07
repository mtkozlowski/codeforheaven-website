import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/Layout"
import styled from 'styled-components';
import { Helmet } from "react-helmet"

const HomePage = styled.div`
    display: grid;

    grid-template-columns: minmax(0, 200px) minmax(680px, 960px) minmax(344px, 760px);
    grid-template-rows: 100px auto 100px;

    grid-template-areas:
      ". . iconsWaterfall"
      ". blogPage iconsWaterfall"
      ". . iconsWaterfall";

      @media(max-width: ${({theme}) => theme.responsive.tablet}) {
          grid-template-rows: 50px auto 100px;
      }

      div {
        grid-area: blogPage
      }
      h1 {
        font-size: ${({theme}) => theme.font.largeHeaderSize}
      }
      a {
        font-size: ${({theme}) => theme.font.blogPostTeaserSize}
      }
`;

export default () => (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Code for Heaven</title>
      <link rel="canonical" href="http://codeforheaven.com/" />
    </Helmet>
    <Layout>
        <HomePage>
            <div>
                <h1>
                    Code for<br/>Heaven
                </h1>
                <Link to="/blog">Blog</Link>
            </div>
        </HomePage>
    </Layout>
    </>
  )