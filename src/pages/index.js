import React from "react"
import { graphql } from "gatsby"
import Layout from "../style/organisms/Layout"

import RegularSection from "../style/organisms/RegularSection"
import BlogTeaser from "../style/organisms/blog-teaser/blog-teaser"
import MyHelmet from "../style/components/MyHelmet"

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
        <RegularSection>{Posts}</RegularSection>
      </Layout>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMdx(
      filter: {
        fields: { collection: { eq: "posts" } },
        frontmatter: { date: { ne: null } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD.MM.YYYY")
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
