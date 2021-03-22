import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../style/organisms/Layout"

import { RegularSection } from "../style/organisms/Sections"
import BlogTeaser from "../style/organisms/blogTeaser/BlogTeaser"
import MyHelmet from "../style/components/MyHelmet"
import Bio from "../style/components/Bio"

const IndexPage = ({
  data: {
    allMdx: { edges },
    file: { childImageSharp },
  },
}) => {
  const Posts = edges.map((edge, index) => (
    <BlogTeaser key={edge.node.id} teaserData={edge.node} index={index} />
  ))

  const myHelmetData = {
    description: "Front-end Creator on his way to UX.",
    facebookThumbnail: childImageSharp.fixed.src,
    title: "UX & Front end",
  }

  return (
    <>
      <MyHelmet data={myHelmetData} />
      <Layout>
        <Bio />
        <RegularSection>{Posts}</RegularSection>
      </Layout>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { frontmatter: { date: { ne: null } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            slug
            title
            description
          }
        }
      }
    }
    file(name: { eq: "fbThumb-index" }) {
      childImageSharp {
        fixed(width: 1200, height: 628) {
          src
        }
      }
    }
  }
`
