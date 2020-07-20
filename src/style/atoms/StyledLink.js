import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.dark};
    background-image: linear-gradient(90deg, #ffd05d 0%, #F4A261 15%, #E76F51 30%, #8338EC 44%, #3A86FF 58%, #FF006E 44%, #6DBA82 58%, #2A9D8F 100%);
    background-size: cover;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-decoration-color: ${({ theme }) => theme.colors.grey};
`;

export default StyledLink;