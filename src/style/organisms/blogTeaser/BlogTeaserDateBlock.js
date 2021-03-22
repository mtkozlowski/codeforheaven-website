import styled from 'styled-components';

const BlogTeaserDateBlock = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.font.secondaryFamily};
  grid-area: date;
  letter-spacing: 0.2em;
  margin: auto;
  text-align: center;
`;

export default BlogTeaserDateBlock;
