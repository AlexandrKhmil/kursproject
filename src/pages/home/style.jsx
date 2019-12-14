import styled from 'styled-components';
import {color, time} from '../../components/global';

import {Container} from './../../components/container';

// First Block

export const BannerSlider = styled.div``;

// Second Block

export const FactsWrapper = styled.div` 
    display: flex;
    align-items: center;
    height: 95px;
    background: ${color.darkGreen}; 
`;

export const FactContainer = styled(Container)` 
    justify-content: space-between;
    align-items: center;
`;

export const Fact = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;   
    margin-right: 21px;
    padding: 15px 0 0 62px;
    width: 25%; 
    height: 77px; 
    background: ${color.green}; 
    border-bottom: 3px solid ${color.ultraGreen};
    border-radius: 3px;  

    &:last-child {
        margin-right: 0;
    }

    img {
        position: absolute; 
        top: 19px;
        left: 14px;
        filter: grayscale(1) invert(1);
    }

    h4 {
        margin-bottom: 2px;
        color: ${color.white};
        font-size: 18px;
        font-weight: 400;
    }

    h5 {
        color: ${color.dark};
        font-size: 12px;
        font-weight: 400;
    }
`; 

// Third Block

export const ProductSlider = styled.div``;

// Fourth Block

export const InfoBannerRow = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 76px;
    border: 3px solid ${color.lightGray};
    background: ${color.white};
`;

export const DiscountPriceBlock = styled.div`
    position: absolute;
    left: 294px;
    top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 31px;
    width: 152px;
    height: 152px;
    background: ${color.darkGreen};
    border-radius: 50%;
`; 

export const OldPrice = styled.div`
    margin-bottom: 4px;
    color: ${color.whiteGray};
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-decoration: line-through;
`;

export const NewPrice = styled.div` 
    color: ${color.white};
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 1.2px;
`; 

export const InfoBannerInner = styled.div`
    padding: 12px 30px 0 19px; 

    h2 {
        margin-bottom: -4px;
        color: ${color.darkGreen};
        font-size: 72px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2.88px;
    }

    h3 {
        margin-bottom: 23px;
        color: ${color.semiDark};
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1.2px;
    }

    h4 {
        margin-bottom: 24px;
        color: ${color.darkGreen};
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 0.8px;
    }

    p { 
        margin-left: 3px;
        color: ${color.darkText}
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.3px;
    }
`; 
 
// Fifth Block

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