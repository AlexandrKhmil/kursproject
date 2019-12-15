import styled from 'styled-components';
import {color, time} from '../global';

export const TopBar = styled.div`
    display: flex;
    height: 40px;
    background: ${color.darkGreen};
`;

export const Navigation = styled.nav`
    ul {
        display: flex;  
    }
    li {
        margin-right: 5px;
        &:last-child {
            margin-right: 0;
        }
    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 10px 0 10px;
        height: 35px;  
        border-bottom: 2px solid ${color.darkGreen}; 
        border-radius: 3px;
        color: ${color.white};
        font-size: 14px;  
        font-weight: normal;
        font-style: normal; 
        transition: background ${time.lg} ease-out, 
                    border-bottom ${time.lg} ease-out, 
                    color ${time.lg} ease-out;

        &.active {
            background: ${color.white}; 
            border-bottom: 2px solid ${color.gray}; 
            color: ${color.darkGreen};  
            &:active { 
                border-bottom: 0; 
                transform: translateY(1px);
            }
        } 
    } 
`;