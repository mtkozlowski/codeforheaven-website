import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components';
import Layout from "../layout/Layout"
import { Link } from "gatsby"
import ContentPage from '../layout/ContentPage';
import { Helmet } from "react-helmet"
require("prismjs/themes/prism-coy.css");

const Content = styled.div`
    grid-area: content;
`;
const SubpageHeader = styled.h3`
    font-size: ${({theme}) => theme.font.regularTextSize};
    margin: 0;

    a {
      color: #333;
    }

    @media(max-width: ${({theme}) => theme.responsive.mobile}) {
      font-size: 22px;
    }
`;

const PageHeader = styled.h2`
    font-size: ${({theme}) => theme.font.largeHeaderSize};
    margin: 0 0 80px;
    line-height: 1;
    text-indent: -8px;
`;

const DivFlex = styled.div`
    display: flex;
    margin-top: 20px;

    @media(max-width: ${({theme}) => theme.responsive.mobileMid}) {
        flex-direction: column;
    }
`;

const PostTitle = styled.h1`
    font-size: ${({theme}) => theme.font.subHeaderSize};
    line-height: 1;
    margin: 0 0 0 20px;

    order: 2;

    a {color: ${({theme}) => theme.colors.dark};}

    @media(max-width: ${({theme}) => theme.responsive.mobileMid}) {
      margin-left: 0px;
    }
    @media(max-width: ${({theme}) => theme.responsive.mobileVertical}) {
      font-size: 36px;
      line-height: 1.2;
    }
`;

const PostDateBlock = styled.div`
background-color: #111;
color: ${({theme}) => theme.colors.white};
font-size: ${({theme}) => theme.font.subHeaderSize};
font-weight: 700;
line-height: 1;

max-width: 250px;

padding: 0 12px;

order: 1;

display: flex;
justify-content: center;
align-items: center;

`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{frontmatter.title} - Code for Heaven - BLOG</title>
        <link rel="canonical" href={"http://codeforheaven.com"+frontmatter.path} />
      </Helmet>
      <Layout>
      <ContentPage className="blog-post-container">
        <Content className="blog-post">
          <SubpageHeader>
            <Link to="/">Code for Heaven</Link>
          </SubpageHeader>
          <PageHeader>Blog</PageHeader>
          <Link to="/blog">Wróć do poprzedniej strony</Link>
          <DivFlex>
            <PostTitle>{frontmatter.title}</PostTitle>
            <PostDateBlock>{frontmatter.date}</PostDateBlock>
          </DivFlex>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Content>
      </ContentPage>
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD/MM")
        path
        title
      }
    }
  }
`