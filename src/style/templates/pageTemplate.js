import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../organisms/Layout"
import RegularSection from "../organisms/RegularSection"
import { H1, H2 } from "../atoms/Headings"

export default function Template({ data }) {
  const { mdx } = data
  const { frontmatter } = mdx
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{frontmatter.title} - Code for Heaven - BLOG</title>
        <link
          rel="canonical"
          href={"https://codeforheaven.com/" + frontmatter.slug}
        />
      </Helmet>
      <Layout>
        <RegularSection>
          <H2 as={H1}>{frontmatter.title}</H2>
          <MDXRenderer>{mdx.body}</MDXRenderer>
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
        slug
        title
      }
    }
  }
`
