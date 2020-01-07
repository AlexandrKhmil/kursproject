import styled from 'styled-components'
import { color } from '../GlobalStyle'

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
`
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
`