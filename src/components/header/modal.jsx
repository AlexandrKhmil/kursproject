import styled from 'styled-components';
import { color } from '../global';

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${color.blackOpacity};
`;

export const ModalBlock = styled.div`
    position: relative;
    display: flex;
    width: 500px; 
    background: ${color.white};
    border-radius: 3px;
`;

export const Close = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    padding: 0;
    width: 25px;
    height: 25px;
    border: none;
    background: none;
    cursor: pointer;
    filter: grayscale(1) invert(1);

    &:focus {
        outline: none;
    }

    img {
        width: 100%;
        height: 100%;
    }
`;

// Auth Form

export const AuthForm = styled.form`
    display: flex;
    flex-direction: column; 
    width: 100%; 

    h3 {
        display: flex;
        padding: 0 25px;
        width: 100%;
        height: 60px;
        background: ${color.darkGreen};
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        color: ${color.white};
        font-size: 40px;
        font-weight: 700;
    }
`;

export const AuthFormInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 25px;
    height: 205px;

    h4 {
        color: ${color.black};
        font-size: 24px;
        font-weight: 700;
    }

    input[type="email"], input[type="password"], button {
        &:focus {
            outline: none;
        }
    }   

    input[type="email"], input[type="password"] {
        padding: 0 0 0 11px;
        width: 100%;
        height: 32px;
        border-radius: 3px;
        border: 1px solid ${color.semiDarkGreen};
        font-size: 18px;
    }

    button {
        margin: auto 0 0 auto;
        padding: 0 19px;
        height: 45px;
        border: none;
        border-bottom: 3px solid ${color.ultraGreen};
        border-radius: 3px;
        background: ${color.darkGreen};
        cursor: pointer;
        color: ${color.white};
        font-size: 24px;

        &:active {
            height: 42px;
            border-bottom: none;
        }
    }
`;

export const CartBlock = styled(AuthForm)`
    
    & > a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto 5px 10px 5px;
        height: 45px;
        background: ${color.darkGreen};
        border-bottom: 3px solid ${color.ultraGreen};
        border-radius: 3px;
        color: ${color.white};
        font-size: 24px;
        font-weight: 600; 
        &:active {
            height: 42px;
            border-bottom: 0;
        }
    }
`;

export const CartList = styled.ul`
    margin-top: 10px;
    li {
        margin-bottom: 5px;
    }
    
    img {
        width: 50px;
        height: 50px;
    }

    h4 {}

    button {}
`;