import styled from 'styled-components'
import { color } from '../GlobalStyle' 

export const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: ${color.green};

  p {
    color: ${color.black}
    font-size: 14px;
  }
`