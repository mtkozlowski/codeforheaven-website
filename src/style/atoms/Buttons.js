import { Link } from "gatsby"
import styled from "styled-components"

export const Button = styled(Link)`
  display: inline-block;
  padding: 0.4em 0.6em;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lightgrey};
  }

  ${({ theme }) => theme.media.phone} {
    margin-top: 0 !important;
  }
`

export const LargeButton = styled(Button)`
  font-size: 1.4em;
  padding: 0.3em 1em;
`
