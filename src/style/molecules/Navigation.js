import React from "react"
import styled from "styled-components"
import { boxPadding } from "../atoms/Box"
import { Button } from "../atoms/Buttons"
import { regularSectionCss } from "../organisms/Sections"

const Nav = styled.nav``

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  list-style: none;

  height: 100%;

  ${({ theme }) => theme.media.phone} {
    flex-direction: row;
    margin-left: auto;
    margin-top: 1em;
  }
`

const MenuItem = styled.li`
  & + & {
    margin-top: 0;
  }
`

const Navigation = () => (
  <Nav>
    <Menu>
      <MenuItem>
        <Button to="/">Blog</Button>
      </MenuItem>
      <MenuItem>
        <Button to="/valuable-resources">Valuable resources</Button>
      </MenuItem>
      <MenuItem>
        <Button to="/useful-tools">Useful tools</Button>
      </MenuItem>
      <MenuItem>
        <Button to="/portfolio">Portfolio [PL]</Button>
      </MenuItem>
    </Menu>
  </Nav>
)

export default Navigation
