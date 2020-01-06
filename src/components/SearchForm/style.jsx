import styled from 'styled-components'
import { NavLink } from 'react-router-dom' 
import { color } from '../GlobalStyle'

export const Form = styled.form` 
  display: flex;

  input[type="text"] {
    display: flex;
    align-items: center;
    padding: 0 12px;
    width: 220px;
    height: 30px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border: none;
    font-size: 12px;
  } 
`

export const Button = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: ${color.green};
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  img {
    width: 22px;
    height: 18px;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`