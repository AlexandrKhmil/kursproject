import styled from 'styled-components'
import Container from '../Container'
import { color } from '../GlobalStyle'

export const OrdersContainer = styled(Container)`
  flex-direction: column;
  h4 {
    position: relative;
    display: flex;
    margin-bottom: 15px;
    padding: 15px 0;
    color: ${color.black};
    font-size: 20px;
    font-weight: 700;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      width: 150px;
      height: 5px;
      background: ${color.green};
    }
  }
`

export const Order = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding: 15px;
  height: 100px;
  background: ${color.lightGray};
  border: 1px solid ${color.darkGray};
  transition: background 0.5s ease-out;
  &:hover {
    background: ${color.gray};
  }
  &:after {
    content: '';
    left: 0;
    bottom: -15px;
    position: absolute;
    width: 100%;
    border-bottom: 1px dotted ${color.gray};
  }
  &:last-child {
    &:after {
      content: none;
    }
  }
  h5 {
    display: flex;
    flex-direction: column;
    min-width: 255px;
    max-width: 255px;
    color: ${color.black};
    font-size: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    min-width: 260px;
    max-width: 260px;
    li {
      span {
        color: ${color.green};
        font-weight: 700;
      }
    }
  }
`

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  & > div {
    height: 60px;
    overflow-y: auto;
  }
  min-width: 200px;
  max-width: 200px;

  h6 {
    position: relative;
    margin-bottom: 5px;
    padding-bottom: 5px;
    color: ${color.black}
    font-size: 14px;
    font-weight: 400;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      width: 70%;
      height: 1px;
      background: ${color.green};
    }
  }

  div {
    font-size: 14px;
  }
`

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  span {
    font-size: 18px;
  }
`