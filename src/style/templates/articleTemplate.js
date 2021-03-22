import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { H1 } from '../atoms/Headings';
import StyledLink from '../atoms/StyledLink';

import Layout from '../organisms/Layout';
import Contact from '../molecules/Contact';

import { regularSectionCss } from '../organisms/Sections';

import MyHelmet from '../components/MyHelmet';
import Box, { boxPadding } from '../atoms/Box';
import slugify from 'slugify';

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
    title,
    date,
    articleContent,
    featuredImage,
    teaser,
  } = data.datoCmsArticle;
  const myHelmetData = {
    description: teaser,
    externalScriptsUrls: [],
    facebookThumbnail: featuredImage,
    title: title,
    slug: slugify(title, { lower: true, strict: true }),
  };

  return (
    <>
      <MyHelmet data={myHelmetData} />
      <Layout>
        <Article>
          <header>
            <Box>
              <StyledLink to="/">Go to the home page</StyledLink>
              <H1>{title}</H1>
              <PostDateBlock>{date}</PostDateBlock>
            </Box>
          </header>
          <Main>
            {articleContent.map(item => {
              const itemKey = Object.keys(item)[1];

              switch (itemKey) {
                case 'paragraphContent':
                  return (
                    <MDXRenderer>
                      {item.paragraphContentNode.childMdx.body}
                    </MDXRenderer>
                  );
                case 'codeContent':
                  return (
                    <MDXRenderer>
                      {item.codeContentNode.childMdx.body}
                    </MDXRenderer>
                  );
                case 'embeddedData':
                  return (
                    <div className="youtubeIframeWrapper">
                      <iframe
                        width="756"
                        height="425"
                        src={`https://www.youtube.com/embed/${item[itemKey].providerUid}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  );
                case 'headingContent':
                  return <h2>{item[itemKey]}</h2>;
                default:
                  return null;
              }
            })}
          </Main>
          <Contact />
        </Article>
      </Layout>
    </>
  );
}

export const pageQuery = graphql`
  query ArticleBySlug($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      date(formatString: "DD.MM.YYYY")
      featuredImage {
        fixed(width: 1200, height: 638) {
          src
        }
      }
      teaser
      title
      articleContent {
        ... on DatoCmsParagraph {
          paragraphContent
          paragraphContentNode {
            childMdx {
              body
            }
          }
          id
        }
        ... on DatoCmsHeading {
          headingContent
          id
        }
        ... on DatoCmsArticleImage {
          imageData {
            fluid(maxWidth: 1200) {
              src
            }
          }
          id
        }
        ... on DatoCmsCode {
          codeContent
          codeContentNode {
            childMdx {
              body
            }
          }
          id
        }
        ... on DatoCmsArticleEmbedded {
          embeddedData {
            providerUid
            thumbnailUrl
          }
          id
        }
      }
    }
  }
`;
