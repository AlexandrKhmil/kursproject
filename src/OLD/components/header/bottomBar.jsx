import styled from 'styled-components';
import { Container } from '../container';
import { color, time } from '../global'; 

export const BottomBar = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    background: ${color.semiGray};
`;

export const BottomBarContainer = styled(Container)`
    justify-content: space-between;
`; 

export const NavigationCategory = styled.nav`  
    margin-left: -8px;

    ul {
        display: flex;
    }
    li {
        margin-right: 20px;
        &:last-child {
            margin-right: 0;
        }
    }
    a { 
        display: flex;
        align-items: center;
        padding: 0 10px;
        height: 30px;
        border-radius: 3px;
        color: ${color.darkGreen};
        font-size: 14px;
        text-transform: uppercase; 
        transition: background ${time.md} ease-out,
                    border ${time.md} ease-out;

        &:hover {
            background: ${color.darkGreen};
            border-bottom: 3px solid ${color.ultraGreen};
            color: ${color.white};
        }

        &.active {
            background: ${color.darkGreen};
            border-bottom: 3px solid ${color.ultraGreen};
            color: ${color.white};
        } 

        &:active {
            height: 28px;
            border-bottom: 0;
            transform: translateY(2px);
        }
    }
`;  

export const SearchForm = styled.form`
    display: flex;

    input[type="text"], button {
        &:focus {
            outline: none;
        }
    }

    input[type="text"] {
        padding-left: 12px;
        width: 218px;
        height: 29px;
        border-top-left-radius: 3px; 
        border-bottom-left-radius: 3px;  
        border: none;
        background: ${color.white}; 
        font-size: 12px; 
        &::placeholder {
            color: ${color.placeholderGray};
        }
    } 
    
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        width: 29px;
        height: 29px;
        background: ${color.darkGreen};
        border: none;
        border-top-right-radius: 3px; 
        border-bottom-right-radius: 3px; 

        &:active {
            opacity: 0.8;
        }

        img {
            width: 22px;
            height: 18px;
        }
    }
`;