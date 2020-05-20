import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";
import BlogTeaserTitle from "./blog-teaser-title";
import BlogTeaserDateBlock from "./blog-teaser-date-block";

const BlogTeaserWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;

    position: relative;

    margin-bottom: 50px;
    height: 250px;

    @media(max-width: ${({theme}) => theme.responsive.mobileVertical}) {
        height: auto;
        flex-direction: column;
    }
`;

const BlogTeaserText = styled.p`
    flex: 1 1 auto;

    font-size: ${({theme}) => theme.font.blogPostTeaserSize};
    line-height: 1.2;
    margin: 0 0 1.4em 270px;
    overflow: hidden;
    position: relative;

    &::after {
        content: "";
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
    @media(max-width: ${({theme}) => theme.responsive.mobileVertical}) {
        font-size: 18px;
        margin-left: 0px;
        order: 3;
    }
`;

const BlogTeaser = ({ teaserData }) => (
    <BlogTeaserWrapper>
        <BlogTeaserDateBlock>
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