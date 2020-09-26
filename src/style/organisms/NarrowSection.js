import styled from "styled-components"

const NarrowSection = styled.section`
  width: ${({ theme }) => theme.narrowSection};
  max-width: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.media.narrowSection} {
    padding: 0 0.5rem;
  }
`

export default NarrowSection