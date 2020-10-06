import { css } from "styled-components"

export const flex = css`
  display: flex;
`

export const centered = css`
  ${flex}
  justify-content: center;
  align-items: center;
`

export const viewportHigh = css`
  min-height: 100vh;
`

export const textCentered = css`
  text-align: center;
`

export const col50 = css`
  width: 50%;

  ${({ theme }) => theme.media.narrowSection} {
    width: 100%;
  }
`

export const boxPadding = css`
  padding: 6rem;

  ${({ theme }) => theme.media.regularSection} {
    padding: 3rem;
  }
`

export const relativePosition = css`
  position: relative;
`
