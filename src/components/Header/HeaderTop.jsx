import styled from 'styled-components'
import { color, time } from '../GlobalStyle'

export const HeaderTop = styled.div`
  display: flex;
  height: 40px;
  background: ${color.green};
`

export const NavigationPages = styled.ul`
  display: flex;

  li {
    margin-right: 2px;
    &:last-child {
      margin-right: 0;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    height: 37px;
    background: ${color.white};
    border-bottom: 2px solid ${color.darkGray};
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    color: ${color.green};
    font-size: 14px;
    transition: 
      background ${time.sm},
      border ${time.sm},
      opacity ${time.sm};

    &:active { 
      border-bottom: none; 
    }

    &:hover:not(.current) {
      opacity: 0.9;
    }

    &.current {
      color: ${color.white};
      background: transparent;
      border: none; 
    }
  }
` 