import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../layout/Layout"
import BlogTeaser from "../components/blog-teaser/blog-teaser";
import styled from 'styled-components';
import { Helmet } from "react-helmet"
import ContentPage from '../layout/ContentPage';


const BlogContainer = styled.div`
    grid-area: content;
`;

const SubpageHeader = styled.h1`
    font-size: ${({theme}) => theme.font.crumbtrailSize};
    margin: 0;

    a {
      color: #333;
    }

    @media(max-width: ${({theme}) => theme.responsive.mobile}) {
      font-size: 22px;
    }
`;

const PageHeader = styled.h2`
    font-size: ${({theme}) => theme.font.largeHeaderSize};
    margin: 0 0 80px;
    line-height: 1;
    text-indent: -8px;
`;

const IconsWaterfall = styled.div`
    // background-color: #fab;

    grid-area: iconsWaterfall;

    @media(max-width: ${({theme}) => theme.responsive.tablet}) {

    }

    @media(max-width: ${({theme}) => theme.responsive.tabletVertical}) {
      display: none;
    }
`;

const IndexPage = ({
    data: {
      allMarkdownRemark: { edges },
    },
    }) => {
      const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => <BlogTeaser key={edge.node.id} teaserData={edge.node} />);

      return (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Code for Heaven - BLOG</title>
            <link rel="canonical" href="http://codeforheaven.com/blog" />
          </Helmet>
          <Layout>
            <ContentPage>
              <BlogContainer>
                  <SubpageHeader>
                    <Link to="/">Code for Heaven</Link>
                  </SubpageHeader>
                  <PageHeader>Blog</PageHeader>
                  {Posts}
              </BlogContainer>
                <IconsWaterfall />
            </ContentPage>
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