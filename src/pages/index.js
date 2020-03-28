import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/Layout"
import {createGlobalStyle} from 'styled-components';
import { Helmet } from "react-helmet"
import ContentPage from "../layout/ContentPage"

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

export default () => (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Code for Heaven</title>
      <link rel="canonical" href="http://codeforheaven.com/" />
    </Helmet>
    <Layout>
      <GlobalStyle/>
        <ContentPage>
            <div className="content">
                <h1>
                    Code for<br/>Heaven
                </h1>
                <Link to="/blog">Blog</Link>
            </div>
        </ContentPage>
    </Layout>
    </>
  )