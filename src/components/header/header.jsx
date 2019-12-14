import React from "react";  
import {NavLink} from 'react-router-dom';
import {Container} from './../container'

import {HeaderBar, Navigation} from './style'

export default class Header extends React.Component { 
    render() {  
        return ( 
            <HeaderBar>
                <Container>
                    <Navigation>
                        <ul>
                            <li>
                                <NavLink to="./" activeClassName="is-active">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="./page" activeClassName="is-active">My Account</NavLink>
                            </li>
                            <li>
                                <NavLink to="./page" activeClassName="is-active">Shopping Cart</NavLink>
                            </li>
                            <li>
                                <NavLink to="./page" activeClassName="is-active">Checkout</NavLink>
                            </li>
                        </ul>
                    </Navigation> 
                </Container> 
            </HeaderBar>
        );
    }
} 