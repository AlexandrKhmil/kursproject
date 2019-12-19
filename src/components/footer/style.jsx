import styled from 'styled-components';
import {color, time} from '../global';

// Top Bar

export const TopBar = styled.div`
    background: ${color.darkSemiGray};
    padding-bottom:25px
    
    
    
    // display: flex;
    // height: 250px;
`;

// Middle Bar

export const MiddleBar = styled.div`
    background: ${color.lighterGray};
    display:flex;
    height: 50px;
    align-items: center;
    
    
    
    
    // display: flex;
`;

// Bottom Bar

export const BottomBar = styled.div`
    background: ${color.darkGreen};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;

    p {
        color: ${color.lightGreen};
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.64px;
    }
`;