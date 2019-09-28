import React from 'react';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import {theme} from '../../utils/theme'
import { Link } from "gatsby"

const BlogTeaserWrapper = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 175px 75px;
    grid-template-areas:
        "date text"
        "date title";
    grid-column-gap: 20px;

    margin-bottom: 20px;
`;

const BlogTeaserDateBlock = styled.div`
    background-color: #111;
    color: ${({theme}) => theme.colors.white};
    font-size: 48px;
    font-weight: 700;
    height: 250px;
    width: 250px;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    grid-area: date;
`;

const BlogTeaserText = styled.p`
    grid-area: text;
`;

const BlogTeaserTitle = styled.h3`
    grid-area: title;

    font-size: ${({theme}) => theme.font.blogPostTitleSize};
    margin: 0;
`;

const BlogTeaser = ({ teaserData }) => (
    <BlogTeaserWrapper>
        <div></div>
        <BlogTeaserDateBlock>
            {teaserData.frontmatter.date}
        </BlogTeaserDateBlock>
        <BlogTeaserText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloremque doloribus tempora id tenetur saepe sit, nulla nisi autem ipsa inventore modi in explicabo laboriosam, fuga nam vitae quaerat quis?
        </BlogTeaserText>
        <BlogTeaserTitle>
            <Link to={teaserData.frontmatter.path}>{teaserData.frontmatter.title}</Link>
        </BlogTeaserTitle>
    </BlogTeaserWrapper>
)

export default BlogTeaser;