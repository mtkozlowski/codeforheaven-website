import React from "react"
import styled from "styled-components"

import { H1, H2 } from "../atoms/Headings"
import Navigation from "../molecules/Navigation"
import ResettedLink from "../atoms/ResettedLink"

const StyledHeader = styled.header`
  width: ${({ theme }) => theme.regularSection};
  max-width: 100%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0;

  ${({ theme }) => theme.media.regularSection} {
    padding: 1rem 0.5rem 0;
  }
`

const HeaderTagline = styled.p`
  font-family: ${({ theme }) => theme.font.secondaryFamily};
  margin-top: 0.5em;
  ${({ theme }) => theme.media.phoneS} {
    font-size: 0.95rem;
  }
`

const PageHeader = styled(H1)`
  line-height: 1;
  ${({ theme }) => theme.media.phoneS} {
    font-size: 2.65rem;
  }
`

const Header = () => (
  <StyledHeader>
    <div>
      <PageHeader as={ResettedLink} to={"/"}>
        Code for Heaven
      </PageHeader>
      <HeaderTagline>Frontend Creator on his way to UX.</HeaderTagline>
    </div>
    <Navigation />
  </StyledHeader>
)

export default Header
