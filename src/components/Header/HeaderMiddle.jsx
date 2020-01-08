import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { color, shadow } from '../GlobalStyle'

export const HeaderMiddle = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  background: ${color.white};
`

export const Logo = styled(NavLink)`
  font-family: 'Dosis', sans-serif; 
  font-size: 40px; 
  text-transform: uppercase;
  span:first-child {
    color: ${color.green};
    font-weight: 700;
  }
  span:last-child {
    color: ${color.black};
    font-weight: 300; 
  }
`

export const UserPanel = styled.div`
  display: flex;
  align-items: center;
`

export const LogInPanel = styled.div`
  display: flex;
  font-size: 14px;
`

export const TextButton = styled.button`
  display: flex;
  padding: 0 5px;
  background: transparent;
  border: none;
  color: ${color.green};
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
` 

export const BasketButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: ${color.green};
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }

  img {
    width: 20px;
    height: 20px;
    filter: grayscale(1) invert(1);
  }
`

export const BasketButtonWrapper = styled.div`
  position: relative;
`

export const ButtonCounter = styled.div`
  position: absolute;
  z-index: 1;
  top: -10px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background: ${color.green};
  border: 2px solid ${color.white};
  border-radius: 50%;
  box-shadow: 0 0 5px ${shadow.dark};
  color: ${color.white};
  font-size: 10px; 
`

export const UserBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  padding: 0 15px;
  height: 50px;
  background: ${color.lightGray};
  border: 1px solid ${color.darkGray};
  border-radius: 17px;

  h4 {
    display: flex;
    padding: 5px 0; 
    font-size: 16px;
    color: ${color.black};
    font-weight: 400;
    a {
      padding: 0 5px;
      color: ${color.green};
      font-weight: 700;
      &:hover {
        opacity: 0.8;
      }
    }
  } 

  button { 
    padding: 0 10px;
    height: 30px;
    background: ${color.green};
    border-bottom: 2px solid ${color.darkGreen};
    border-radius: 17px;
    color: ${color.white};
    font-size: 14px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      margin-top: 2px;
      height: 28px;
      border-bottom: 0;
    }
  }
`