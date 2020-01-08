import styled from 'styled-components'
import { color } from '../GlobalStyle'

export const ModalWrapper = styled.div`
	position: fixed;
	z-index: 10;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${color.blackOpacity};
`

export const ModalInner = styled.div`
	position: relative;
	display: flex;
`

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
`