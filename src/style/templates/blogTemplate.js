import React from "react"
import { Helmet } from "react-helmet";
import { graphql } from "gatsby"
import styled from 'styled-components';

import { H2 } from '../atoms/Headings';
import StyledLink from '../atoms/StyledLink';
import Layout from "../organisms/Layout"
import RegularSection from "../organisms/RegularSection";

require("prismjs/themes/prism-coy.css");

const DivFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    ${({theme}) => theme.media.phone} {
        /* flex-direction: column; */
    }
`;

const PostDateBlock = styled.div`
    color: ${({theme}) => theme.colors.grey};
    font-family: ${({theme}) => theme.font.secondaryFamily};
    letter-spacing: .2em;
`;

export default function Template({
  data
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{frontmatter.title} - Code for Heaven - BLOG</title>
        <link rel="canonical" href={"http://codeforheaven.com"+frontmatter.path} />
      </Helmet>
      <Layout>
        <RegularSection>
          <StyledLink to="/">Go to previous page</StyledLink>
          <DivFlex>
            <H2>{frontmatter.title}</H2>
            <PostDateBlock>{frontmatter.date}</PostDateBlock>
          </DivFlex>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </RegularSection>
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query BlogPostBySlug ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`