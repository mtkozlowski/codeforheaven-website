import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.dark};
  background-image: linear-gradient(
    90deg,
    #ffd05d 0%,
    #f4a261 15%,
    #e76f51 30%,
    #8338ec 44%,
    #3a86ff 58%,
    #ff006e 44%,
    #6dba82 58%,
    #2a9d8f 100%
  );
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-decoration-color: ${({ theme }) => theme.colors.grey};
`

export default StyledLink
