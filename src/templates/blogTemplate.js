import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { H1 } from '../style/atoms/Headings';
import Layout from '../style/organisms/Layout';
import Contact from '../style/molecules/Contact';

import { regularSectionCss } from '../style/organisms/Sections';

import MyHelmet from '../style/components/MyHelmet';
import Box, { boxPadding } from '../style/atoms/Box';

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
  const {
    mdx: {
      frontmatter: { facebookThumbnail, description, title, slug, date },
      body,
    },
  } = data;

  const thumbnail =
    (facebookThumbnail && facebookThumbnail.childImageSharp.fluid.src) || '';
  const myHelmetData = {
    description: description,
    externalScriptsUrls: [],
    facebookThumbnail: thumbnail,
    title: title,
    slug: slug,
  };

  return (
    <>
      <MyHelmet data={myHelmetData} />
      <Layout>
        <Article>
          <header>
            <Box>
              <Link to="/">Go to the home page</Link>
              <H1>{title}</H1>
              <PostDateBlock>{date}</PostDateBlock>
            </Box>
          </header>
          <Main>
            <MDXRenderer>{body}</MDXRenderer>
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
