import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Layout from "../style/organisms/Layout"

import RegularSection from "../style/organisms/RegularSection"
import BlogTeaser from "../style/organisms/blog-teaser/blog-teaser"

const StyledWrapper = styled.div`
  padding: 1rem 0;
`

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map((edge, index) => (
      <BlogTeaser key={edge.node.id} teaserData={edge.node} index={index} />
    ))

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Code for Heaven</title>
        <link rel="canonical" href="http://codeforheaven.com/" />
      </Helmet>
      <Layout>
        <RegularSection>
          <StyledWrapper>{Posts}</StyledWrapper>
        </RegularSection>
      </Layout>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
          }
        }
      }
    }
  }
`
