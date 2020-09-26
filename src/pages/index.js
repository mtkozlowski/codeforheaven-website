import React from "react"
import { graphql } from "gatsby"
import Layout from "../style/organisms/Layout"

import RegularSection from "../style/organisms/RegularSection"
import BlogTeaser from "../style/organisms/blog-teaser/blog-teaser"
import MyHelmet from '../style/components/MyHelmet';
import facebookThumbnail from './index/facebookThumbnail.jpg';

import {NarrowSection} from "../style/organisms/Sections"
import {centered, flex, boxPadding } from "../style/organisms/Divs"

import helloBoy from "../style/atoms/helloBoy.svg"

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
        <a href="https://letmeinux.com" target="_blank" css={[flex]} >
        <RegularSection css={[centered, boxPadding]} style={{backgroundColor: "#212b38", marginBottom: "3rem"}}>
            <img src={helloBoy} style={{maxHeight: "120px", marginRight: "1rem"}} />
            <p style={{color: "#eee", marginBottom: "1.1rem"}}>Witaj! Obchodzimy dzisiaj Międzynarodowy Dzień Podcastu. Szczególnie jeśli trafiłeś/aś tutaj z konferencji PyrCaster MDP 2020 i szukasz podcastu Let me in UX, który prowadzę, to śmiało kliknij, w TEN baner.</p>
        </RegularSection>
        </a>
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
