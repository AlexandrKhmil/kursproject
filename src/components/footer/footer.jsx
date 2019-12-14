import React from "react";  
import {NavLink} from 'react-router-dom';
import {BottomBar} from './style'; 

export default class Footer extends React.Component { 
  render() {  
    return ( 
        <div>

            <BottomBar>
                <p>Курсовая работа</p>
            </BottomBar> 
        </div>
    );
  }
} 