import styled from 'styled-components';
import {color} from '../global';

export const HeaderBar = styled.header`
    display: flex;
    height: 40px;
    background: ${color.darkGreen};
`;

export const Navigation = styled.nav`
    ul {
        display: flex;
        li {}
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 10px;
            height: 35px;
            background: ${color.white};
            border-bottom: 2px solid ${color.gray};
            border-radius: 3px;
            color: ${color.darkGreen};
            font-size: 14px; 

            &:active {
                border-bottom: 0;
                transform: translateY(1px);
            }
        } 
    }
`;