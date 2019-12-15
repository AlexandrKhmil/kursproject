import React from "react";  
import { NavLink } from 'react-router-dom';
import { TopBar,
         MiddleBar,
         BottomBar } from './style'; 

export default class Footer extends React.Component { 
  render() {  
    return ( 
        <div>
            <TopBar>
                Тут будут различные ссылки
            </TopBar>
            
            <MiddleBar>
                Тут будут ссылки на вк и т.д.
            </MiddleBar>
            
            <BottomBar>
                <p>Курсовая работа</p>
            </BottomBar> 
        </div>
    );
  }
} 