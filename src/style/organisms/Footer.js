import React from 'react';
import styled from 'styled-components';

import { LinkedInLink, TwitterLink } from '../molecules/Contact';
import { RegularSection } from './Sections';

const RealFooter = styled.footer`
  border-top: 1px #aaa solid;
  margin: 3rem 0 0;
  padding-top: 0.5rem;
`;

export default function Footer({ children }) {
  return (
    <>
      <RealFooter>
        <RegularSection
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {children}
          <div style={{ display: 'flex', padding: '0.5rem 0' }}>
            <LinkedInLink href="//www.linkedin.com/in/mateusz-w-kozlowski/">
              LinkedIn
            </LinkedInLink>
            <TwitterLink href="//twitter.com/mtKozlowski">Twitter</TwitterLink>
          </div>
        </RegularSection>
      </RealFooter>
    </>
  );
}
