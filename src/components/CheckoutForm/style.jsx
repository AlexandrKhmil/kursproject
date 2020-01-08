import styled from 'styled-components'
import { color } from '../GlobalStyle'

export const Form = styled.form`
  display: flex;
  flex-direction: column; 
  flex-grow: 1;
  margin-right: 50px;
  margin-bottom: 50px;

  label {
    margin-bottom: 10px;
  }

  h6 {
    margin-bottom: 10px; 
    color: ${color.black};
    font-size: 18px;
    font-weight: 700;
  }
  
  input[type="email"], input[type="text"], input[type="password"], input[type="tel"] {
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

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    height: 50px;
    width: 200px;
    background: ${color.green};
    border-radius: 7px;
    border-bottom: 2px solid ${color.darkGreen};
    color: ${color.white};
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      margin-top: 2px;
      height: 48px;
      border-bottom: none;
    }
  }
` 