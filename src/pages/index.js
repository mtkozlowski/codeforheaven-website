import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import ContentPage from "../layout/ContentPage"
import PageHeader from "../components/typography/headers"
import styled from 'styled-components';

const Container = styled.div`
    grid-area: content
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
      <ContentPage>
          <Container>
              <PageHeader>
                  Code for<br/>Heaven
              </PageHeader>
              <Link to="/blog">Blog</Link>
          </Container>
      </ContentPage>
    </Layout>
    </>
  )