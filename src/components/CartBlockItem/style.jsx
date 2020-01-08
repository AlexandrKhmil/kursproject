import styled from 'styled-components'
import { color } from '../GlobalStyle'

export const CartBlockInner = styled.div`
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