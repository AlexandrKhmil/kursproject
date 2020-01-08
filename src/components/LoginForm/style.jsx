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
`