import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from '../style/organisms/Layout';

import { RegularSection } from '../style/organisms/Sections';
import BlogTeaser from '../style/organisms/blogTeaser/BlogTeaser';
import MyHelmet from '../style/components/MyHelmet';
import Bio from '../style/components/Bio';
import { H2 } from '../style/atoms/Headings';
import Box from '../style/atoms/Box';
import slugify from 'slugify';

const IndexPage = ({
  data: {
    allMdx: { edges },
    allDatoCmsArticle: { nodes },
    file: { childImageSharp },
  },
}) => {
  const Posts = edges.map(edge => (
    <BlogTeaser key={edge.node.id} data={edge.node.frontmatter} />
  ));

  const Articles = nodes.map(node => {
    const data = {
      title: node.title,
      date: node.date,
      description: node.teaser,
      slug: slugify(node.title, { lower: true, strict: true }),
    };
    return <BlogTeaser key={node.id} data={data} />;
  });

  const myHelmetData = {
    description: 'Front-end Creator on his way to UX.',
    facebookThumbnail: childImageSharp.fixed.src,
    title: 'UX & Front end',
  };

  return (
    <>
      <MyHelmet data={myHelmetData} />
      <Layout>
        <Bio />
        <RegularSection>
          <Box>
            <H2
              style={{
                boxShadow: '#fff 0px -2px 0px 2px, 0px 2px 2px 0px #f6f4f5',
              }}
            >
              Latest Articles.
            </H2>
          </Box>
          {Articles}
          {Posts}
        </RegularSection>
      </Layout>
    </>
  );
};

export default IndexPage;

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
    allDatoCmsArticle {
      nodes {
        id
        title
        teaser
        date(formatString: "MMM DD, YYYY")
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
`;
