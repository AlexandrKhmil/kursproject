import styled from 'styled-components';
import { color } from './../../components/global';

export const AsideBlock = styled.div`
    display: flex;
    flex-direction: column; 
    margin-left: 21px;
    min-width: 220px; 
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

    li {
        position: relative;
        padding-left: 17px;
        &:before {
            position: absolute;
            top: 50%;
            left: 0;
            content: '';
            display: flex;
            width: 4px;
            height: 6px;
            background: url("static/svg/listPointer.svg") no-repeat center;
            transform: translateY(-50%);
        }
    }

    button {
        padding: 0;
        background: none;
        border: none;
        cursor: pointer;
        color: ${color.semidark};
        font-size: 14px;
        font-weight: 400;
        text-transform: uppercase;

        &:hover {
            color: ${color.darkGreen};
        }

        &:focus {
            outline: none;
        }

        &.active {
            color: ${color.darkGreen};
        }

        &:active {
            opacity: 0.8;
        }
    }
`; 