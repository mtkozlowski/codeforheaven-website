import styled from "styled-components"

const FullWidthSection = styled.section`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.media.regularSection} {
    padding: 0 0.5rem;
  }
`

export default FullWidthSection