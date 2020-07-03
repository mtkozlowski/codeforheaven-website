import React from "react";
import styled from 'styled-components';
import { HomepageLayout } from "../layout/Layout";
import { Helmet } from "react-helmet";
import Cloud from '../components/Cloud';
import { H1 } from '../components/typography/Headings';
import RegularSection from '../layout/RegularSection';

const StyledWrapper = styled.div`
  text-align: center;
  padding: 1rem 0;
  margin-top: -8rem;

  ${({ theme }) => theme.media.tablet} {

  }

  ${H1} {
    color: ${({theme}) => theme.colors.darkestblue };
    line-height: 1.2;
    margin: 5rem 0 0;
  }
`;

const IndexPage = () => (
  <>
  <Helmet>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Code for Heaven</title>
    <link rel="canonical" href="http://codeforheaven.com/" />
  </Helmet>
  <HomepageLayout>
        <RegularSection>
          <StyledWrapper>
          </StyledWrapper>
        </RegularSection>
      <Cloud atHome />
  </HomepageLayout>
  </>
);

export default IndexPage;