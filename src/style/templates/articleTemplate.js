import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1, H2 } from "../atoms/Headings"
import StyledLink from "../atoms/StyledLink"

import Layout from "../organisms/Layout"
import RegularSection from "../organisms/RegularSection"

require("prismjs/themes/prism.css")

const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.phone} {
    /* flex-direction: column; */
  }
`

const PostDateBlock = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.font.secondaryFamily};
  letter-spacing: 0.2em;
  margin-left: auto;
  margin-top: 0.3em;
`

export default function Template({ data }) {
  console.log(data)
  const { title, date, articleContent } = data.datoCmsArticle

  return (
    <>
      <Layout>
        <RegularSection>
          <StyledLink to="/">Go to the home page</StyledLink>
        </RegularSection>
        <RegularSection>
          <DivFlex>
            <H2 as={H1}>{title}</H2>
            <PostDateBlock>{date}</PostDateBlock>
          </DivFlex>

          {articleContent.map(item => {
            const itemKey = Object.keys(item)[1]

            switch (itemKey) {
              case "paragraphContent":
                return <p key={item.id}>{item[itemKey]}</p>
              case "codeContent":
                return (
                  <MDXRenderer>
                    {item.codeContentNode.childMdx.body}
                  </MDXRenderer>
                )
              case "embeddedData":
                return (
                  <div class="youtubeIframeWrapper">
                    <iframe
                      width="756"
                      height="425"
                      src={`https://www.youtube.com/embed/${item[itemKey].providerUid}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )
              case "headingContent":
                return <h2>{item[itemKey]}</h2>
              default:
                return null
            }
          })}
        </RegularSection>
      </Layout>
    </>
  )
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
      title
      articleContent {
        ... on DatoCmsParagraph {
          paragraphContent
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
`
