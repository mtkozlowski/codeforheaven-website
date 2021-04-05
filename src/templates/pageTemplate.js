import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../organisms/Layout';
import RegularSection from '../organisms/RegularSection';
import { H2 } from '../atoms/Headings';

export default function Template({ data }) {
  const { title, articleContent } = data.datoCmsPage;
  return (
    <>
      <Layout>
        <RegularSection>
          <H2>{title}</H2>
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
        </RegularSection>
      </Layout>
    </>
  );
}
export const pageQuery = graphql`
  query PageById($id: String!) {
    datoCmsPage(id: { eq: $id }) {
      featuredImage {
        fixed(width: 1200, height: 638) {
          src
        }
      }
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
