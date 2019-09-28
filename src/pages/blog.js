import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../layout/Layout"
import BlogTeaser from "../components/blog-teaser/blog-teaser";
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import PostLink from "../components/post-link"
import {theme} from '../utils/theme';


const BlogWrapper = styled.div`
    margin-top: 100px;
    margin-left: 200px;
    width: 100%;
    min-width: 680px;
    max-width: 960px
`;

const SubpageHeader = styled.h1`
    font-size: ${({theme}) => theme.font.crumbtrailSize};
    margin: 0;
    color: #333;
`;

const PageHeader = styled.h2`
    font-size: ${({theme}) => theme.font.largeHeaderSize};
    margin: 0 0 20px;
    line-height: 1;
    text-indent: -8px;
`;

const IconsWaterfall = styled.div`
    background-color: #fab;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;

    width: calc(100% - 1160px);
    max-width: 760px;
    min-width: 344px;
`;

const IndexPage = ({
    data: {
      allMarkdownRemark: { edges },
    },
  }) => {
    const Posts = edges
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <BlogTeaser key={edge.node.id} teaserData={edge.node} />)
    return <Layout>
                <BlogWrapper>
                    <SubpageHeader>
                      <Link to="/">Code for Heaven</Link>
                    </SubpageHeader>
                    <PageHeader>Blog</PageHeader>
                    {Posts}
                </BlogWrapper>
                <IconsWaterfall />
            </Layout>
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
          }
        }
      }
    }
  }
`