import styled from "styled-components"
import { Link } from "gatsby"

export const Breadcrumb = styled.ol`
  grid-area: breadcrumb;
  list-style: none;
  padding-left: 1rem;
  margin: 0;

  &:before,
  &:after {
    content: "";
    display: table;
  }

  li {
    float: left;
    margin-top: 0;
    margin-right: 0.2rem;
    text-transform: uppercase;
  }

  li + li:before {
    content: ">";
    font-weight: 700;
    margin-right: 0.2rem;
  }
`

export const CrumbLink = styled(Link)`
  display: inline-block;
  font-size: 0.9rem;
  padding: 0.3rem 0.5rem 0.2rem;
  background-color: #eee;
  border-radius: 0.3rem;
`
