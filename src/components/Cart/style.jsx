import styled from 'styled-components'
import { NavLink } from 'react-router-dom' 
import { color, shadow } from '../GlobalStyle'
 
export const CartBlock = styled.div`
  position: absolute;
  z-index: 1;
  top: calc(100% + 10px);
  right: 0;
  display: flex;
  flex-direction: column;
  width: 290px;
  background: ${color.white};
  border-top: 3px solid ${color.green};
  box-shadow: 0 0 5px ${shadow.dark};

  h4 { 
    display: flex;
    justify-content: center;
    flex-grow: 1;
    margin: 5px 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid ${color.darkGray};
    color: ${color.darkGray};
    font-size: 12px;
    font-weight: 400;
  }
`

export const CartBlockItemList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  max-height: 366px;
  overflow-y: auto;
`
 
export const CartTopArrow = styled.img`
  position: absolute;
  z-index: 2;
  top: -7px;
  right: 9px;
  width: 12px;
  height: 7px; 
`

export const CartButtons = styled.div`
  display: flex;
  margin: 5px 15px;
  align-items: flex-end;
`
 
export const LinkButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1; 
  height: 32px;
  background: ${color.green};
  border-bottom: 2px solid ${color.darkGreen};
  border-radius: 3px;
  color: ${color.white};
  font-size: 16px;
  
  &:hover {
    opacity: 0.8;
  }

  &:active {  
    height: 30px;
    border-bottom: 0; 
  }
`

export const CloseButton = styled(LinkButton)`
  margin-right: 5px;
  background: ${color.gray};
  border-bottom: 2px solid ${color.darkGray};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: ${color.lightGray};
  p:first-child {
    color: ${color.black};
    font-size: 14px; 
  }
  p:last-child {
    color: ${color.green};
    font-size: 22px;
    text-transform: uppercase;
  }

` 