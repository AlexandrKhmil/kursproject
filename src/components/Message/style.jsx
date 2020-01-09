import styled from 'styled-components'
import { color } from '../GlobalStyle'

export const MessageInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100%;
  background: ${color.white};
  border-radius: 8px;

  h4 {
    display: flex;
    align-items: center;
    padding: 0 15px;
    width: 100%;
    height: 50px;
    background: ${color.green};
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    color: ${color.white};
    font-size: 24px;
  }

  p {
    padding: 10px;
    color: ${color.black};
    font-size: 18px;
  }
`