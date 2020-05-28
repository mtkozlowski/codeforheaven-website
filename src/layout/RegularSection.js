import styled from 'styled-components';


const RegularSection =  styled.section`
    width: ${({theme}) => theme.regularSection};
    max-width: 100%;
    margin: 0 auto;
`;

export default RegularSection;