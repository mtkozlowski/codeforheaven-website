import styled from "styled-components"

const TeamatonRotatingLogo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;

  img {
    display: inline;
  }

  img:first-child {
    transition: transform .8s ease;
    transform-origin: center;
  }
  &:hover {
    img:first-child {
      transform: rotate(360deg)
    }
  }
`;

export default TeamatonRotatingLogo;