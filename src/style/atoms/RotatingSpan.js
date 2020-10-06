import styled from "styled-components"

const RotatingSpan = styled.span`
  position: relative;
  span {
    transition: transform 0.3s ease, opacity 0.1s ease;
  }

  span:first-child {
    transform: rotateX(0);
    opacity: 1;
  }

  span:nth-child(2) {
    opacity: 0;
    transform: rotateX(90deg);
    position: absolute;
    left: 0;
  }

  &:hover {
    span:first-child {
      opacity: 0;
      transform: rotateX(90deg);
    }
    span:nth-child(2) {
      opacity: 1;
      transform: rotateX(0);
    }
  }
`

export default RotatingSpan
