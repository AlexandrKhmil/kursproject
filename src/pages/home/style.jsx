import styled from 'styled-components';
import {color, time} from '../../components/global';

import {Container} from './../../components/container';

// First Block

export const SliderBannerBlock = styled.div`
    position: relative;
    display: flex;
    height: 460px;

    & > img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`; 

// Third Block

export const ProductsBlock = styled.div`
    display: flex;
    flex-direction: column;
`; 
 
// Fifth Block


 