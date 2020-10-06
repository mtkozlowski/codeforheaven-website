import React from "react"
import styled from "styled-components"

import { H1, H2, H3, H4, H5, H6 } from "../atoms/Headings"

const ToggleBlock = ({ ToggleElement, toggleText, children }) => {
  return (
    <>
      <ToggleElement>{toggleText}</ToggleElement>
      {children}
    </>
  )
}

export default ToggleBlock
