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

export const StockBannerRow = styled.div`
	position: relative;
	display: flex;
	margin-bottom: 76px;
	height: 420px;
	border: 3px solid ${color.lightGray};
	background: ${color.white};
`

export const DiscountPriceBlock = styled.div`
	position: absolute;
	left: 294px;
	top: 8px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; 
	width: 152px;
	height: 152px;
	background: ${color.green};
	border-radius: 50%;
`

export const OldPrice = styled.div`
	margin-bottom: 4px;
	color: ${color.lightGray};
	font-size: 30px;
	font-weight: 700;
	letter-spacing: 1.2px;
	text-decoration: line-through;
`

export const NewPrice = styled.div` 
	color: ${color.white};
	font-size: 30px;
	font-weight: 700;
	letter-spacing: 1.2px;
`

export const StockBannerInner = styled.div`
	padding: 12px 30px 0 19px; 

	h2 {
		margin-bottom: -4px;
		color: ${color.green};
		font-size: 72px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 2.88px;
	}

	h3 {
		margin-bottom: 23px;
		color: ${color.darkGray};
		font-size: 30px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 1.2px;
	}

	h4 {
		margin-bottom: 24px;
		color: ${color.green};
		font-size: 20px;
		font-weight: 400;
		letter-spacing: 0.8px;
	}

	p { 
		margin-left: 3px;
		color: ${color.black};
		font-size: 14px;
		line-height: 21px;
		letter-spacing: 0.3px;
	}
`