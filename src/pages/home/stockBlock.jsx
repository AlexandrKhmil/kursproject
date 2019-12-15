import styled from 'styled-components';
import {color, time} from '../../components/global';

export const StockBannerRow = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 76px;
    height: 420px;
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

export const StockBannerInner = styled.div`
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
        color: ${color.darkText};
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.3px;
    }
`; 