import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import styled from 'styled-components';

import Layout from "../style/organisms/Layout"
import BlogTeaser from "../style/organisms/blog-teaser/blog-teaser";
import RegularSection from '../style/organisms/RegularSection';

const StyledWrapper = styled.div`
  padding: 48px;

  ${({theme}) => theme.media.tablet} {
      padding: 27px;
  }
`;

const IndexPage = ({
    data: {
      allMarkdownRemark: { edges },
    },
    }) => {
      const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge, index) => <BlogTeaser key={edge.node.id} teaserData={edge.node} index={index} />);

      return (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Code for Heaven - BLOG</title>
            <link rel="canonical" href="http://codeforheaven.com/blog" />
          </Helmet>
          <Layout>
            <RegularSection>
                <StyledWrapper>
                  {Posts}
                </StyledWrapper>
            </RegularSection>
        </Layout>
        </>
        )
    }

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {fields: {collection: {eq: "posts"}}},
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD/MM")
            path
            title
            description
          }
        }
      }
    }
  }
`