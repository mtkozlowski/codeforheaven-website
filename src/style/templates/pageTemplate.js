import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../organisms/Layout"
import RegularSection from "../organisms/RegularSection"
require("prismjs/themes/prism-coy.css")

const DivFlex = styled.div`
  display: flex;
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.responsive.mobileMid}) {
    flex-direction: column;
  }
`

const StyledWrapper = styled.div`
  padding: 54px;
  background-color: #fff;
  border-radius: 1.33em;
  box-shadow: 3px 3px 5px #ccc;
  margin-top: 1.5rem;

  ${({ theme }) => theme.media.phone} {
    padding: 27px;
  }
`

const PostTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.subHeaderSize};
  line-height: 1;
  margin: 0 0 0 20px;

  order: 2;

  a {
    color: ${({ theme }) => theme.colors.dark};
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobileMid}) {
    margin-left: 0px;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobileVertical}) {
    font-size: 36px;
    line-height: 1.2;
  }
`

const PostDateBlock = styled.div`
  background-color: #111;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.subHeaderSize};
  font-weight: 700;
  line-height: 1;

  max-width: 250px;

  padding: 0 12px;

  order: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.mdx holds our post data
  const { frontmatter, body } = mdx
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{frontmatter.title} - Code for Heaven - BLOG</title>
        <link
          rel="canonical"
          href={"http://codeforheaven.com" + frontmatter.slug}
        />
      </Helmet>
      <Layout>
        <RegularSection>
          <Link to="/blog">Go to previous page</Link>
          <StyledWrapper>
            <DivFlex>
              <PostTitle>{frontmatter.title}</PostTitle>
              <PostDateBlock>{frontmatter.date}</PostDateBlock>
            </DivFlex>
          </StyledWrapper>
        </RegularSection>
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "DD/MM")
        slug
        title
      }
    }
  }
`
