import styled from 'styled-components';
import { H3 } from '../../atoms/Headings';

const BlogTeaserTitle = styled(H3)`
  /* font-family: ${({ theme }) => theme.font.secondaryFamily}; */
  /* line-height: 1.1; */

  ${({ theme }) => theme.media.phone} {
    margin-top: 1em;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
  }
`;

export default BlogTeaserTitle;
