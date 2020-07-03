import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";
import BlogTeaserTitle from "./blog-teaser-title";
import BlogTeaserDateBlock from "./blog-teaser-date-block";

const BlogTeaserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 1.33rem;
    box-shadow: 3px 3px 5px #ccc;

    padding: 30px;
    position: relative;

    margin-bottom: 50px;
    height: 250px;

    @media(max-width: ${({theme}) => theme.responsive.mobileVertical}) {
        height: auto;
        flex-direction: column;
    }
    ${({theme}) => theme.media.phone} {
        height: auto;
    }
`;

const BlogTeaserText = styled.p`
    flex: 1 1 auto;

    line-height: 1.2;
    margin: 0 0 1.4em 240px;
    overflow: hidden;
    position: relative;

    &::after {
        text-align: right;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 70%;
        height: 1.1em;
        background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
    }

    @media(max-width: ${({theme}) => theme.responsive.mobile}) {
        margin-left: 200px;
    }

    ${({theme}) => theme.media.phone} {
        margin-left: 0px;
        line-height: 1.2;
    }
`;

const BlogTeaser = ({ teaserData, index }) => (
    <BlogTeaserWrapper>
        <BlogTeaserDateBlock index={index}>
            {teaserData.frontmatter.date}
        </BlogTeaserDateBlock>
        <BlogTeaserTitle>
          <Link to={teaserData.frontmatter.path}>{teaserData.frontmatter.title}</Link>
        </BlogTeaserTitle>
        <BlogTeaserText>
          {teaserData.frontmatter.description}
        </BlogTeaserText>
    </BlogTeaserWrapper>
)

export default BlogTeaser;