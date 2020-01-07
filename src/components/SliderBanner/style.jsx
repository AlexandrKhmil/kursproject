import styled from 'styled-components';
import { color, time } from '../GlobalStyle';
import Container from '../Container';

export const SlideWrapper = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	max-height: 100%;
	overflow: hidden;
`

export const SlideHandler = styled.div`
	display: flex;
	transition: all ${time.sm} ease-out; 
`

export const Slide = styled.div` 
	min-width: 100vw;
	max-width: 100vw;  
	
	& > div {
		height: 100%;
	}

	h3 {
		position: absolute;
		top: 125px;
		right: 0;
		font-family: 'Dosis', sans-serif;
		color: ${color.green};
		font-size: 60px;
		font-weight: 700;
		text-transform: uppercase;
	} 

	img {
		width: 200px;
		height: 200px;
	}

	a {
		position: absolute;
		right: 0;
		bottom: 79px;
		display: flex;
		align-items: center;
		padding: 0 19px;
		height: 45px;
		background: ${color.green};
		border-bottom: 4px solid ${color.darkGreen};
		opacity: 0.8;

		color: ${color.white};
		font-size: 22px;
		text-transform: uppercase;
		letter-spacing: 6.6px;

		transition: opacity ${time.sm} ease-out;

		&:hover {
			opacity: 0.7;
		}

		&:active {
			height: 41px;
			border: 0;
		}
	}
`

export const SlideContainer = styled(Container)`
	position: relative;
`

export const Arrows = styled.div`
	button {
		position: absolute;
		top: 50%; 
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		width: 28px;
		height: 43px;
		background: transparent;
		border: none;
		cursor: pointer;
		transform: translateY(-50%); 

		&:focus {
			outline: none;
		}

		img {
			width: 100%;
			height: 100%;
		}

		&:first-child {
			left: 7px; 

			&:active {
				transform: translate3D(-3px, -50%, 0)
			}
		}

		&:last-child {
			right: 7px; 

			&:active {
				ransform: translate3D(3px, -50%, 0)
			}
		}
	}
`

export const NavButtons = styled.div`
	position: absolute;
	left: 50%;
	bottom: 0;
	display: flex;
	align-items: flex-end;
	transform: translateX(-50%);

	button {
		display: flex;
		margin-right: 6px;
		width: 21px;
		height: 17px;
		background: ${color.lightGreen};
		border: none;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
		cursor: pointer;
		transition: height ${time.sm} ease-out, 
					background ${time.sm} ease-out;
		&:hover {
			background: ${color.green};
			height: 20px;
		}
		&:active {
			height: 22px;
		}
		&:focus {
			outline: none;
		}
		&.active {
			background: ${color.green};
		}
		&:last-child {
			margin-right: 0;
		}
	}
`
