import React from 'react';
import styled from 'styled-components';

import BlogTeaserTitle from './BlogTeaserTitle';
import BlogTeaserDateBlock from './BlogTeaserDateBlock';
import { Link } from 'gatsby';
import { boxPadding } from '../../atoms/Box';

const BlogTeaserWrapper = styled.div`
  ${boxPadding}

  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  position: relative;

  margin-bottom: 2rem;

  border-bottom: 1px solid hsl(0deg 0% 90%);

  &:hover {
    box-shadow: 0px 1px 5px 0px hsl(0deg 0% 90%);
    border-bottom-width: 0px;
  }
`;

const BlogTeaserText = styled.p`
  width: 100%;

  line-height: 1.2;
  margin: 1em 0;
  position: relative;

  ${({ theme }) => theme.media.phone} {
    margin-top: 1em;
  }

  &::after {
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 1.1em;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 50%
    );
  }
`;

const BlogTeaser = ({ teaserData, index }) => (
  <BlogTeaserWrapper>
    <BlogTeaserTitle style={{ marginBottom: '0.3em' }}>
      <Link to={teaserData.frontmatter.slug}>
        {teaserData.frontmatter.title}
      </Link>
    </BlogTeaserTitle>
    <BlogTeaserDateBlock>{teaserData.frontmatter.date}</BlogTeaserDateBlock>
    <BlogTeaserText>{teaserData.frontmatter.description}</BlogTeaserText>
  </BlogTeaserWrapper>
);

export default BlogTeaser;
