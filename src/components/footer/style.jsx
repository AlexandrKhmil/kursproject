import styled from 'styled-components';
import {color, time} from '../global'; 

// Bottom Bar

export const BottomBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background: ${color.darkGreen};

    p {
        color: ${color.lightGreen};
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.64px;
    }
`; 