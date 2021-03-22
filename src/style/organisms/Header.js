import React from 'react';
import styled from 'styled-components';

import Navigation from '../molecules/Navigation';
import ResettedLink from '../atoms/ResettedLink';
import { RegularSection, regularSectionCss } from './Sections';
import { boxPadding } from '../atoms/Box';

export const StyledHeader = styled.header`
  ${boxPadding}
  height: 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  ${regularSectionCss}
  ${boxPadding}
`;
const PageHeader = styled.p`
  font-weight: 700;
`;

const Header = () => (
  <StyledHeader>
    <PageHeader>
      <ResettedLink to={'/'}>Code for Heaven</ResettedLink>
    </PageHeader>
    <Navigation />
  </StyledHeader>
);

export default Header;
