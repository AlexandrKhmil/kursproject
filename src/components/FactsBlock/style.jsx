import styled from 'styled-components'
import { color } from '../GlobalStyle'
import Container from '../Container'

export const FactsWrapper = styled.div` 
  display: flex;
  align-items: center;
  height: 95px;
  background: ${color.green}; 
`

export const FactsContainer = styled(Container)` 
  justify-content: space-between;
  align-items: center;
`

export const Fact = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;   
  margin-right: 21px;
  padding: 15px 0 0 62px;
  width: 25%; 
  height: 77px; 
  background: ${color.lightGreen}; 
  border-bottom: 3px solid ${color.darkGreen};
  border-radius: 3px;  

  &:last-child {
    margin-right: 0;
  }

  img {
    position: absolute; 
    top: 19px;
    left: 14px;
    filter: grayscale(1) invert(1);
  }

  h4 {
    margin-bottom: 2px;
    color: ${color.white};
    font-size: 18px;
    font-weight: 400;
  }

  h5 {
    color: ${color.black};
    font-size: 12px;
    font-weight: 400;
  }
`