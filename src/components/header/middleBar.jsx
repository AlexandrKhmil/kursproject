import styled from 'styled-components';
import { Container } from '../container';
import { NavLink } from 'react-router-dom';
import { color, time } from '../global';

export const MiddleBar = styled.div`
    display: flex;
    height: 88px;
    background: ${color.white};
`;

export const MiddleBarInner = styled(Container)`
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled(NavLink)` 
    span {
        font-family: 'Dosis', sans-serif;
        text-transform: uppercase;
        font-size: 40px; 

        &:first-child {
            color: ${color.darkGreen};
            font-weight: 700;
        }

        &:last-child { 
            color: ${color.lightDark};
            font-weight: 200;
        }
    }  
`; 

export const MiddleBarRight = styled.div`
    display: flex;
    align-items: center;
    padding-right: 31px; 
    color: ${color.lightDark};
    font-size: 14px;
`;

export const AccountStatusBlock = styled.div`
    display: flex;
    padding-right: 26px;
    line-height: 16px;
`;

export const GreenTextButton = styled.button`
    padding: 0;
    background: ${color.white};
    border: none;
    cursor: pointer;
    color: ${color.darkGreen};
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -0.3px;
    &:focus {
        outline: none;
    }

    &:first-child {
        margin-right: 5px;
    }

    &:last-child {
        margin-left: 5px;
    }
`; 

export const BasketButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 31px;
    height: 34px;
    background: ${color.darkGreen};
    border: none;
    border-bottom: 3px solid ${color.ultraGreen};
    border-radius: 3px;

    &:focus {
        outline: none;
    }

    &:active {
        border-bottom: 0;
        height: 31px;
        transform: translateY(1px);
    }

    img {
        width: 21px;
        height: 21px;
        filter: grayscale(1) invert(1);
    }
`;