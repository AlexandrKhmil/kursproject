import styled from 'styled-components'
import { color, time } from '../GlobalStyle'
import Container from '../Container' 

export const ProductsBlock = styled.div`
	display: flex;
	flex-direction: column;
	margin: 86px 0 97px 0;  
`

export const ProductBlockContainer = styled(Container)`
	flex-direction: column;
`

export const ProductListChoose = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	margin-bottom: 40px;
	height: 40px;
	background: ${color.green};

	& > button {
		position: absolute;
		top: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		width: 27px;
		height: 27px;
		border: none;
		background: ${color.white};
		border-radius: 3px;
		transform: translateY(-50%);

		&:first-child {
			left: 4px;
		}

		&:last-child {
			right: 4px;
		}

		&:focus {
			outline: none;
		}

		&:active {
			opacity: 0.7;
		}
	}
`

export const ProductListChooseItem = styled.div` 
	button {
		margin-right: 10px;
		padding: 0 10px;
		height: 34px;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
		background: ${color.green};
		border: none;
		cursor: pointer;
		color: ${color.white};
		font-size: 18px;   

		transition: 
      background ${time.sm} ease-out,
			color ${time.sm} ease-out;

		&:hover {
			background: ${color.white};
			color: ${color.green};
		}

		&.active {
			color: ${color.green};
			background: ${color.white};
		}

		&:focus {
			outline: none;
		}

		&:last-child {
			margin-right: 0;
		}
	}
`

export const ProductListWrapper = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	max-height: 100%;
	overflow: hidden;
`

export const ProductListHandler = styled.div`
	display: flex;
	transition: all ${time.sm} ease-out; 
` 

export const Slide = styled.div`
	display: flex; 
	margin-right: 18px;
	&>div {
		max-height: 375px;
		flex-wrap: nowrap;
	}
`