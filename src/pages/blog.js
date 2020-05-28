import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/Layout"
import BlogTeaser from "../components/blog-teaser/blog-teaser";
import styled from 'styled-components';
import { Helmet } from "react-helmet"
import RegularSection from '../layout/RegularSection';

const StyledWrapper = styled.div`
  padding: 1rem;
  background-color: #fff;
  border-radius: 1.33em;
  box-shadow: 3px 3px 5px #353535;
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
          <Layout atHome={false}>
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
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