import styled from 'styled-components';

export const ProductList = styled.div`
    display: flex;
    align-items: flex-start; 
    flex-wrap: wrap; 
    margin: 0 -14px;

    & > div {
        margin: 0 10px;
        flex-wrap: wrap;
    }
`;