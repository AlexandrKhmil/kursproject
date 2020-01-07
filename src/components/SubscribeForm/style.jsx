import styled from 'styled-components'
import { color, time } from '../GlobalStyle'

export const Form = styled.form`
	display: flex;

	input[type="email"], button { 
		background-color: ${color.whiteTransition};
		border: 3px solid #557c08; 
		border-radius: 3px;
		color: ${color.darkGreen}; 

		&:focus {
			outline: none;
		}
	}

	input[type="email"] { 
		padding: 0 0 0 11px;
		width: 455px;
		height: 50px; 
		font-size: 18px;
		letter-spacing: 0.72px; 

		&::placeholder {
			color: ${color.lightGreen}; 
		} 
	}

	button { 
		width: 145px;
		height: 50px;
		font-size: 24px;
		font-weight: 400;
		letter-spacing: 0.96px;
		transition: background ${time.xsm} ease-out; 
    cursor: pointer;

		&:active {
			background: ${color.white}; 
		}
	}
`