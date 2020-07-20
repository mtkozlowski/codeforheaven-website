import React from "react";
import styled from 'styled-components';
import { Helmet } from "react-helmet";
import Layout  from "../style/organisms/Layout";
import { H1 } from '../style/atoms/Headings';
import RegularSection from '../style/organisms/RegularSection';

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
  <Layout>
    <RegularSection>
      <StyledWrapper>
      </StyledWrapper>
    </RegularSection>
  </Layout>
  </>
);

export default IndexPage;