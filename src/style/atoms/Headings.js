import styled from "styled-components"

export const H1 = styled.h1`
  font-weight: ${({ theme }) => theme.boldFontWeight};
  font-size: 3rem;
  ${({ theme }) => theme.media.phoneS} {
    font-size: 2.65rem;
  }
  @media (min-width: 800px) {
    font-size: 3.9rem;
  }
`

export const H2 = styled.h2`
  font-weight: ${({ theme }) => theme.boldFontWeight};
  font-size: 1.875rem;
`

export const H3 = styled.h3`
  font-weight: ${({ theme }) => theme.boldFontWeight};
  font-size: 1.5rem;
  @media (min-width: 800px) {
    font-size: 1.95rem;
  }
`

export const H4 = styled.h4`
  font-weight: ${({ theme }) => theme.boldFontWeight};
  font-size: 1.172rem;
`

export const H5 = styled.h5`
  font-weight: ${({ theme }) => theme.boldFontWeight};
  font-size: 1rem;
  text-transform: uppercase;
`

export const H6 = styled.h6`
  font-weight: ${({ theme }) => theme.boldFontWeight};
  font-size: 0.8rem;
`
