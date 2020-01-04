import { createGlobalStyle  } from 'styled-components'
 
export const color = { 
  white: '#ffffff',
  gray: '#808080',
  darkGray: '#d9d9d9',
  lightGray: '#f3f3f3',
  black: '#000000',
  green: '#709b1d',
  darkGreen: '#58800b'
}

export const shadow = {
  dark: 'rgba(0, 0, 0, 0.3)'
}

export const time = {
  xsm: '0.1s',
  sm: '0.3s',
  md: '0.5s',
  lg: '1s'
}

export const GlobalStyle = createGlobalStyle` 
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif; 
    & > div {
      display: flex;
      flex-direction: column;
      min-height: 100vh; 
      footer {
        margin-top: auto;
      }
    }
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a {
    text-decoration: none; 
    &:hover {
      text-decoration: none;
    }
  }

  button {
    padding: 0;
    border: 0; 
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  } 
`  
