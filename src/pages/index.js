import React from "react"
import { graphql } from "gatsby"
import Layout from "../style/organisms/Layout"

import RegularSection from "../style/organisms/RegularSection"
import BlogTeaser from "../style/organisms/blog-teaser/blog-teaser"
import MyHelmet from '../style/components/MyHelmet';
import facebookThumbnail from './index/facebookThumbnail.jpg';

const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map((edge, index) => (
      <BlogTeaser key={edge.node.id} teaserData={edge.node} index={index} />
    ))
  const myHelmetData = {
    description: "Front-end Creator on his way to UX.",
    facebookThumbnail,
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
      filter: { fields: { collection: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            description
          }
        }
      }
    }
  }
`
