import React from 'react';
import styled from 'styled-components';

import BlogTeaserTitle from "./blog-teaser-title";
import BlogTeaserDateBlock from "./blog-teaser-date-block";
import StyledLink from '../../atoms/StyledLink';

const BlogTeaserWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    position: relative;

    margin-bottom: 50px;
`;

const BlogTeaserText = styled.p`
    flex: 1 1 auto;

    line-height: 1.2;
    margin: 0 0 1.4em;
    position: relative;
    order: 3;

    ${({theme}) => theme.media.phone} {
        margin-top: 1em;
    }

    &::after {
        text-align: right;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 70%;
        height: 1.1em;
        background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
    }
`;

const BlogTeaser = ({ teaserData, index }) => (
    <BlogTeaserWrapper>
        <BlogTeaserTitle>
          <StyledLink to={teaserData.frontmatter.path}>{teaserData.frontmatter.title}</StyledLink>
        </BlogTeaserTitle>
        <BlogTeaserText>
          {teaserData.frontmatter.description}
        </BlogTeaserText>
        <BlogTeaserDateBlock index={index}>
            {teaserData.frontmatter.date}
        </BlogTeaserDateBlock>
    </BlogTeaserWrapper>
)

export default BlogTeaser;