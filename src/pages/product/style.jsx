import styled from 'styled-components';
import { Container } from './../../components/container'; 
import { color } from './../../components/global';

export const ProductPageContainer = styled(Container)`
    flex-direction: column;
`;

export const Product = styled.div`
    display: flex; 
    margin-bottom: 50px;
`; 

export const LeftBlock = styled.div`
    display: flex; 
    flex-direction: column;
    img {
        width: 320px;
        height: 350px;
        border: 2px solid ${color.borderGray};
        object-fit: contain;
    }
`;

export const RightBlock = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 38px;

    h1 {
        padding-bottom: 14px;
        width: 100%;
        border-bottom: 1px solid ${color.gray};
        color: ${color.blackText}
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 0.88px;
    }

    & > p {
        margin-top: 20px;
        padding-bottom: 14px;
        border-bottom: 1px solid ${color.gray};
        color: ${color.darkText};
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.06px;
    }

    & > button { 
        margin: auto 0 0 0;
        height: 42px; 
        border: none;
        border-bottom: 3px solid ${color.ultraGreen};
        border-radius: 3px;
        background: ${color.darkGreen}; 
        cursor: pointer;
        color: ${color.white};
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.64px; 
        &:focus {
            outline: none;
        }
        &:active {  
            height: 39px;
            border-bottom: none;
        } 
    }
`;


export const ParametersList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 17px;
    padding-bottom: 14px;
    border-bottom: 1px solid ${color.gray};

    li {
        font-size: 14px;
        span:first-child {
            color: ${color.blackText};
            font-weight: 600;
            text-transform: uppercase;
        }
        span:last-child {
            color: ${color.darkText};
        }
    } 
`;

export const PriceBlock = styled.div`
    display: flex;
    margin-top: 10px;
    span {
        font-size: 22px;
        font-weight: 600;
        color: ${color.priceColor};
        letter-spacing: 0.88px;
    }
`; 
