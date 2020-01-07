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

export const CartBlockItem = styled.div`
  display: flex;
  padding: 5px 0;
  border-bottom: 1px dotted ${color.gray};
  &:last-child {
    border-bottom: none;
  }

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    min-width: 140px;
    max-width: 140px;
    h5 {
      color: ${color.black}
      font-size: 13px;
      font-weight: 400;
      text-transform: uppercase;
    }
    ul {
      display: flex;
      flex-direction: column;
    }
    li {
      color: ${color.black};
      font-size: 12px;
      span {
        color: ${color.green};
      }
    }
  }

  & > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    margin-left: auto;
    min-width: 55px;
    max-width: 55px;
    p {
      color: ${color.green};
      font-size: 16px;
    }
    & > div {
      display: flex;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
        width: 14px;
        height: 14px;
        background: ${color.green};
        border-radius: 50%;
        color: ${color.white};
        font-size: 13px;
        line-height: 13px;
        cursor: pointer;

        &:focus {
          outline: none;
        }
        &:last-child {
          margin-right: 0;
        }
      }
      button:last-child { 
        background: none;
        img {
          width: 100%;
          height: 100%;
        }
      }
    } 
  }
`

export const CartTopArrow = styled.img`
  position: absolute;
  z-index: 2;
  top: -7px;
  right: 9px;
  width: 12px;
  height: 7px; 
`

export const LinkButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin: 5px 15px;
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
    margin-top: 7px;
    height: 30px;
    border-bottom: 0;
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