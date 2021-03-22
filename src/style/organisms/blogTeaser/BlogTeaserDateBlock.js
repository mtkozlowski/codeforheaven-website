import styled from 'styled-components';

const BlogTeaserDateBlock = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.font.secondaryFamily};
  letter-spacing: 0.2em;
  margin-left: auto;
  margin-top: 0.3em;
`;

export default BlogTeaserDateBlock;
