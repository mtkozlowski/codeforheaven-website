import React from 'react';
import styled from 'styled-components';

import BlogTeaserTitle from './BlogTeaserTitle';
import BlogTeaserDateBlock from './BlogTeaserDateBlock';
import { Link } from 'gatsby';
import { boxPadding } from '../../atoms/Box';

const BlogTeaserWrapper = styled.div`
  ${boxPadding}

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    'date title'
    'date teaser';
  grid-gap: 1.3rem;

  border-bottom: 1px solid hsl(0deg 0% 90%);
  margin-bottom: 2rem;

  &:hover {
    box-shadow: 0px 1px 5px 0px hsl(0deg 0% 90%);
    border-bottom-width: 0px;

    a {
      text-decoration: underline;
      text-decoration-skip-ink: auto;
      text-decoration-thickness: 1px;
      text-underline-offset: 1px;
    }
  }
`;

const BlogTeaserText = styled.p`
  grid-area: teaser;
  width: 100%;

  line-height: 1.2;
  margin: 0 0 2rem;
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

const BlogTeaser = ({ data: { slug, title, date, description } }) => (
  <BlogTeaserWrapper>
    <BlogTeaserTitle>
      <Link to={slug}>{title}</Link>
    </BlogTeaserTitle>
    <BlogTeaserDateBlock>
      {date.split(',')[0]}
      <br />
      {date.split(',')[1]}
    </BlogTeaserDateBlock>
    <BlogTeaserText>{description}</BlogTeaserText>
  </BlogTeaserWrapper>
);

export default BlogTeaser;
