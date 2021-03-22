import styled from 'styled-components';

const TeamatonRotatingLogo = styled.div`
  width: 80%;

  img {
    display: inline;
  }

  img:first-child {
    transition: transform 0.8s ease;
    transform-origin: center;
  }
  &:hover {
    img:first-child {
      transform: rotate(360deg);
    }
  }
`;

export default TeamatonRotatingLogo;
