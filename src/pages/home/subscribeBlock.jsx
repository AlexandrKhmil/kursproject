import styled from 'styled-components';
import {color, time} from '../../components/global';

export const SubscribeRow = styled.div`
position: relative;
display: flex;
flex-direction: column; 
align-items: center;
height: 250px;

img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

h2, p, form {
    position: relative;
}

h2 { 
    margin: 38px 0 7px 0;
    color: ${color.white};
    font-size: 36px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1.44px;
}

p { 
    margin-bottom: 32px;
    color: ${color.white};
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.48px;
}  
`;  

export const SubscribeForm = styled.form`
display: flex;

input[type="text"], input[type="submit"] { 
    background-color: ${color.whiteTransition};
    border: 3px solid #557c08; 
    border-radius: 3px;
    color: ${color.semiDarkGreen}; 

    &:focus {
        outline: none;
    }
}

input[type="text"] { 
    padding: 0 0 0 11px;
    width: 455px;
    height: 50px; 
    font-size: 18px;
    letter-spacing: 0.72px; 

    &::placeholder {
        color: ${color.semiLightGreen}; 
    } 
}

input[type="submit"] { 
    width: 145px;
    height: 50px;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.96px;
    transition: all ${time.xsm} ease-out; 

    &:active {
        background: ${color.white};
        transform: translateY(2px);
    }
}
`; 