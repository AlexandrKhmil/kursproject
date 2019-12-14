import { createGlobalStyle  } from 'styled-components'
 
export const color = {
    white : '#fff',
    black : '#000', 
    semiGray : "#f3f3f3",
    gray : '#d9d9d9',
    darkGreen : '#709b1d',
    
} 
export const time = {
    sm : '0.3s',
    md : '0.5s',
    lg : '1s'
} 
export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0; 
        font-family: 'Open Sans', sans-serif;
    } 
    *, *::after, *::before {
        box-sizing: border-box;
    } 
    ul, ol {
        margin: 0;
        padding: 0;
        list-style-type: none;
    } 
    p {
        margin: 0;
    } 
    a {
        text-decoration: none;
        &:hover {
            text-decoration: none;
        }
    }  
`  