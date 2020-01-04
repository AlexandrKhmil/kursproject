import styled from 'styled-components';
import {color} from './../../components/global';

export const OrderForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
        margin-bottom: 15px;
        font-size: 32px;
    }

    input[type="text"], input[type="email"], input[type="tel"] {
        display: flex;
        padding-left: 10px; 
        margin-bottom: 10px;
        width: 400px;
        height: 35px; 
        font-size: 16px;
    }

    button {
        margin-left: auto;
        padding: 0 10px;
        height: 45px;

        background: ${color.darkGreen};
        border: none;
        border-bottom: 3px solid ${color.ultraGreen};
        border-radius: 3px;
        color: ${color.white};
        font-size: 16px;

        &:hover {
            opacity: 0.8;
        }

        &:active {
            margin-top: 3px;
            height: 42px;
            border-bottom: none;
        }
        
        &:focus {
            outline: none;
        }
    }
`;