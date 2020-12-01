import styled from "styled-components"
import { H3 } from "../../atoms/Headings"

const BlogTeaserTitle = styled(H3)`
  font-size: 1.5rem;
  line-height: 1;
  margin-right: auto;
  max-width: calc(100% - 230px);
  min-width: 350px;

  ${({ theme }) => theme.media.phone} {
    margin-top: 1em;
    line-height: 1.2;
  }
`

export default BlogTeaserTitle
