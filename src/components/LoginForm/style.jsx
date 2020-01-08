import styled from 'styled-components'
import { color } from '../GlobalStyle'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  
  input[type="email"], input[type="password"] {
    margin-bottom: 15px;
    padding: 0 10px;
    width: 100%;
    height: 50px;
    border: 1px solid ${color.black};
    border-radius: 7px;
    color: ${color.black};
    font-size: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    padding: 0 10px;
    height: 40px;
    border-radius: 7px;
    font-size: 16px;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }

    &:hover {
      opacity: 0.8;
    }

    &:active {
      height: 38px;
      border-bottom: none !important;
    }
  }

  button:first-child {
    background: ${color.green};
    border-bottom: 2px solid ${color.darkGreen};
    color: ${color.white};
  }

  button:last-child {
    background: ${color.gray};
    border-bottom: 2px solid ${color.darkGray};
    color: ${color.black};
  }
`