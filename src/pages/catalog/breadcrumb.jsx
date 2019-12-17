import styled from 'styled-components';
import { color } from './../../components/global';

export const BreadcrumbBlock = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin: 15px 0 32px 0;
    height: 32px;
    background: ${color.darkGreen};
`;

export const Breadcrumb = styled.ul`
    display: flex;
    margin-left: 12px;

    li, button {
        color: ${color.white};
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.56px;
    }

    li {
        margin-right: 5px; 

        &:before {
            content: '/';
            margin-right: 5px;
        }

        &:first-child:before {
            content: none;
        }

        &:last-child {
            margin-right: 0;
        }
    }

    button {
        padding: 0;
        background: none;
        border: none;
        cursor: pointer;

        &:focus {
            outline: none;
        }

        &:active {
            opacity: 0.8;
        }
    }
`;