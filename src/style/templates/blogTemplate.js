import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { H1, H2 } from '../atoms/Headings';
import StyledLink from '../atoms/StyledLink';
import Layout from '../organisms/Layout';
import Contact from '../molecules/Contact';

import { regularSectionCss } from '../organisms/Sections';

import MyHelmet from '../components/MyHelmet';
import Box, { boxPadding } from '../atoms/Box';

require('prismjs/themes/prism.css');

const PostDateBlock = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.font.secondaryFamily};
  letter-spacing: 0.2em;
  margin-left: auto;
  margin-top: 0.3em;
  text-align: right;
`;

const Article = styled.article`
  ${regularSectionCss}
`;

const Main = styled.main`
  ${boxPadding}
`;

export default function Template({ data }) {
  const { mdx } = data;
  const { frontmatter } = mdx;

  const externalScriptsUrls = frontmatter.externalScriptsUrls || [];
  const facebookThumbnail =
    (frontmatter.facebookThumbnail &&
      frontmatter.facebookThumbnail.childImageSharp.fluid.src) ||
    '';
  const myHelmetData = {
    description: frontmatter.description,
    externalScriptsUrls,
    facebookThumbnail,
    title: frontmatter.title,
    slug: frontmatter.slug,
  };

  return (
    <>
      <MyHelmet data={myHelmetData} />
      <Layout>
        <Article>
          <header>
            <Box>
              <StyledLink to="/">Go to the home page</StyledLink>
              <H1>{frontmatter.title}</H1>
              <PostDateBlock>{frontmatter.date}</PostDateBlock>
            </Box>
          </header>
          <Main>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </Main>
          <Contact />
        </Article>
      </Layout>
    </>
  );
}
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        slug
        title
        description
        externalScriptsUrls
        facebookThumbnail {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
