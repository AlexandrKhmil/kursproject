import { createGlobalStyle  } from 'styled-components'
 
export const color = { 
    white : '#fff',
    whiteGray : '#cbcbcb',
    whiteTransition : 'rgba(255, 255, 255, 0.5)',

    black : '#000', 
    dark : '#2c4104',
    semiDark : '#434343',
    darkText : '#484848',
    semiGray : "#f3f3f3",
    gray : '#d9d9d9', 
    lightGray : '#efefef',

    ultraGreen : '#658c19',
    darkGreen : '#709b1d',
    semiDarkGreen : '#557c08',
    green : '#83b228',
    semiLightGreen : '#64891e',
    lightGreen : '#c5ec78',
}  

export const time = {
    xsm : '0.1s',
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
     
    a {
        text-decoration: none;
        &:hover {
            text-decoration: none;
        }
    }  

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    } 
`  