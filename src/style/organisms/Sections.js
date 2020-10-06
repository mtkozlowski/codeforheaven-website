import styled from "styled-components"

export const NarrowSection = styled.section`
  width: ${({ theme }) => theme.narrowSection};
  max-width: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.media.narrowSection} {
    padding: 0 0.5rem;
  }
`

export const RegularSection = styled.section`
  width: ${({ theme }) => theme.regularSection};
  max-width: 100%;
  margin: 0 auto;
`

export const WideSection = styled.section`
  width: ${({ theme }) => theme.wideSection};
  max-width: 100%;
  margin: 0 auto;
`;

export const FullWidthSection = styled.section`

`;

export const FullWidthInSection = styled.div`
  margin: 0 calc(-50vw + 50%);
  width: calc(100vw - 8px);
`;