import styled from 'styled-components'
import { color, time } from '../GlobalStyle'

export const RatingBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  padding: 5px;
  background: ${color.lightGray};  
  border-bottom-left-radius: 7px;
  transition: background ${time.md} ease-out;
  
  & > div {
    position: relative;
  }

  ul {
    display: flex;
    flex-direction: column; 
    justify-content: flex-end;
    overflow: hidden;
    li {
      display: flex;
      min-width: 15px;
      min-height: 15px;
      border: 1px solid white;
    }
  }

  ul:first-child {
    li { 
      background: ${color.gray};
    }
  }

  ul:last-child {
    position: absolute;
    bottom: 0;
    right: 0;
    li {
      background: ${color.green};
    }
  }
`

export const PriceBlock = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  span {
    color: ${color.black};
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.8px; 
    transition: color ${time.sm} ease-out;
  }
`
export const ProductItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 3px 3px 0 3px;
  height: 425px;
  background: ${color.lightGray}; 
  transition: background ${time.md} ease-out;

  &:hover {
    background: ${color.darkGreen};
    & .priceBlock span {
      color: ${color.white};
    }
    ${RatingBlock} {
      background: ${color.green};
    }
  }

  img {
    width: 295px;
    height: 310px;
    object-fit: contain;
    background: ${color.white};
  }

  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -17px 12px 0 12px;
    height: 34px;
    background: ${color.white};
    border: 1px solid ${color.darkGray};
    border-radius: 3px;
    color: ${color.darkGreen};
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.64px;
  }

  button {
    margin: auto 12px 10px 12px;
    height: 42px; 
    border: none;
    border-bottom: 3px solid ${color.gray};
    border-radius: 3px;
    background: ${color.white}; 
    cursor: pointer;
    color: ${color.green};
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.64px; 
    &:focus {
      outline: none;
    }
    &:active {  
      height: 39px;
      border-bottom: none;
    }
  }
`