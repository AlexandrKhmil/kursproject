import React from "react";  
import {NavLink} from 'react-router-dom';
import {Container} from './../container';

import {TopBar, Navigation, 
        MiddleBar,
        BottomBar, NavigationCategory, Search} from './style';

export default class Header extends React.Component { 
    render() {  
        return ( 
            <div> 
                <TopBar>
                    <Container>
                        <Navigation>
                            <ul>
                                <li>
                                    <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/account" activeClassName="active">My Account</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/cart" activeClassName="active">Shopping Cart</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/checkout" activeClassName="active">Checkout</NavLink>
                                </li>
                            </ul>
                        </Navigation> 
                    </Container> 
                </TopBar>

                <MiddleBar>
                    <Container>
                        Блок по центру
                    </Container>
                </MiddleBar>

                <BottomBar>
                    <Container>
                        <NavigationCategory>
                            <ul>
                                <li>
                                    <NavLink to="/desktop" activeClassName="active">Smart Phone</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/desktop" activeClassName="active">Desktop</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/desktop" activeClassName="active">Laptop</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/desktop" activeClassName="active">Accessories</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/desktop" activeClassName="active">Networking</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/desktop" activeClassName="active">Software</NavLink>
                                </li>
                            </ul> 
                        </NavigationCategory> 
                        <Search>
                            <input type="text" placeholder="Search Your Item........" />
                            <button>Лупа</button>
                        </Search>
                    </Container>
                </BottomBar>
            </div>
        );
    }
} 