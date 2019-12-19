import styled from 'styled-components';
import { color } from './../../components/global';

import {Container} from './../../components/container';

export const CheckoutContainer = styled(Container)`
    margin-top: 15px;
    margin-bottom: 15px;
`;

// Ordering Part

export const LeftPart = styled.div`
    display: flex;
`;

// Aside Products List 

export const AsideBlock = styled.div`
    display: flex;
    flex-direction: column; 
    margin-left: auto;
    min-width: 250px; 
    max-width: 250px;
`;

export const AsideItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

    h3 {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 9px;
        height: 28px;
        background: ${color.darkGreen};
        color: ${color.white};
        font-size: 18px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.72px;
    }

    &:last-child {
        margin-bottom: 0;
    }
`; 

export const AsideList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    max-height: 243px;
    overflow-y: auto;
    
    li {
        display: flex;
        width: 100%;
        padding-bottom: 5px;
        border-bottom: 1px solid ${color.darkGreen};
    }

    img {
        width: 75px;
        height: 75px;
        background: ${color.white};
        object-fit: contain;
    }

    li > div {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        padding: 10px 2px;
    }

    h4 {
        display: flex;
        width: 100%;
        color: ${color.darkText};
        font-size: 16px;
        font-weight: 700;
    }

    p {
        color: ${color.darkText};
        font-size: 14px;

        &:last-child {
            margin-left: auto;
        }

        &:first-child {
            margin-left: 0;
        }
    }
`; 
// Success

export const SuccessBlock = styled.div`
    display: flex;
`;