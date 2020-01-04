import styled from 'styled-components';
import { color, time } from './../global';

export const Product = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 3px 3px 0 3px;
    height: 425px;
    background: ${color.lightGray};

    transition: background ${time.md} ease-out;

    &:hover {
        background: ${color.darkGreen};
        & .priceBlock span {
            color: ${color.white};
        }
    }

    img {
        width: 295px;
        height: 310px;
        object-fit: contain;
        background: ${color.white};
    }

    a {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: -17px 12px 0 12px;
        height: 34px;
        background: ${color.white};
        border: 1px solid ${color.borderGray};
        border-radius: 3px;
        color: ${color.darkGreen};
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.64px;
    }

    button {
        margin: auto 12px 10px 12px;
        height: 42px; 
        border: none;
        border-bottom: 3px solid ${color.gray};
        border-radius: 3px;
        background: ${color.white}; 
        cursor: pointer;
        color: ${color.darkGreen};
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
 
export const PriceBlock = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    margin: 10px 0;

    span {
        color: ${color.priceColor};
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.8px; 
        transition: color ${time.sm} ease-out;
    } 
`;

export const ProductSmall = styled(Product)`
    margin-bottom: 25px !important;
    height: 350px;

    img {
        width: 215px;
        height: 232px;
    }
`;