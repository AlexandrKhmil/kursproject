import styled from 'styled-components'
import { color } from '../GlobalStyle'

export const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background: ${color.lightGray};
`

export const NavigationCatalog = styled.ul`
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
    height: 30px;
    background: ${color.green};
    border-bottom: 2px solid ${color.darkGreen};
    border-radius: 3px;
    color: ${color.white};
    font-size: 14px;
    text-transform: uppercase;

    &:hover:not(.current) {
      opacity: 0.8;
    }

    &:active {
      height: 28px;
      border-bottom: 0;
      transform: translateY(2px);
    }

    &.current {
      background: transparent;
      color: ${color.green};
      border-bottom: 0; 
    }
  }
`
