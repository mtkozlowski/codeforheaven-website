import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { H1, H2 } from "../atoms/Headings"
import StyledLink from "../atoms/StyledLink"
import Layout from "../organisms/Layout"
import RegularSection from "../organisms/RegularSection"

require("prismjs/themes/prism-coy.css")

const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.phone} {
    /* flex-direction: column; */
  }
`

const PostDateBlock = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.font.secondaryFamily};
  letter-spacing: 0.2em;
`

export default function Template({ data }) {
  const { mdx } = data
  const { frontmatter } = mdx

  return (
    <>
      <Helmet>
        <title>{frontmatter.title} - Code for Heaven</title>
        <link
          rel="canonical"
          href={"http://codeforheaven.com" + frontmatter.slug}
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:url"
          content={"http://codeforheaven.com" + frontmatter.slug}
        />
        <meta
          property="og:title"
          content={frontmatter.title + " - Code for Heaven"}
        />
        <meta property="og:description" content={frontmatter.description} />
        <meta property="og:image" content={frontmatter.facebookThumbnail} />
      </Helmet>
      <Layout>
        <RegularSection>
          <StyledLink to="/">Go to previous page</StyledLink>
        </RegularSection>
        <RegularSection>
          <DivFlex>
            <H2 as={H1}>{frontmatter.title}</H2>
            <PostDateBlock>{frontmatter.date}</PostDateBlock>
          </DivFlex>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </RegularSection>
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        facebookThumbnail
      }
    }
  }
`
