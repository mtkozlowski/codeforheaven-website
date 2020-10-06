import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { H1, H2 } from "../atoms/Headings"
import StyledLink from "../atoms/StyledLink"
import Layout from "../organisms/Layout"
import RegularSection from "../organisms/RegularSection"
import Contact from "../molecules/Contact"

import MyHelmet from "../components/MyHelmet"

require("prismjs/themes/prism.css")

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
  margin-left: auto;
  margin-top: 0.3em;
`

export default function Template({ data }) {
  const { mdx } = data
  const { frontmatter } = mdx

  const externalScriptsUrls = frontmatter.externalScriptsUrls || []
  const facebookThumbnail =
    (frontmatter.facebookThumbnail &&
      frontmatter.facebookThumbnail.childImageSharp.fluid.src) ||
    ""
  const myHelmetData = {
    description: frontmatter.description,
    externalScriptsUrls,
    facebookThumbnail,
    title: frontmatter.title,
    slug: frontmatter.slug,
  }

  return (
    <>
      <MyHelmet data={myHelmetData} />
      <Layout>
        <RegularSection>
          <StyledLink to="/">Go to the home page</StyledLink>
        </RegularSection>
        <RegularSection>
          <DivFlex>
            <H2 as={H1}>{frontmatter.title}</H2>
            <PostDateBlock>{frontmatter.date}</PostDateBlock>
          </DivFlex>
          <MDXRenderer>{mdx.body}</MDXRenderer>
          <Contact />
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
        externalScriptsUrls
        facebookThumbnail {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
