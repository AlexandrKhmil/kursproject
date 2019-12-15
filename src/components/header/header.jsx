import React from "react";  
import { NavLink } from 'react-router-dom';
import { Container } from './../container';

import { TopBar, Navigation } from './topBar';
import { MiddleBar, MiddleBarInner, Logo, MiddleBarRight, AccountStatusBlock, GreenTextButton, BasketButton } from './middleBar'; 
import { BottomBar, BottomBarContainer, NavigationCategory, SearchForm} from './bottomBar';

export default class Header extends React.Component { 
    render() {  
        return ( 
            <header> 
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
                    <MiddleBarInner> 
                        <Logo to="/" exact={true}>
                            <span>LO</span>
                            <span>GO</span>
                        </Logo> 
                        <MiddleBarRight> 
                            <AccountStatusBlock>
                                <GreenTextButton>Log In</GreenTextButton> or <GreenTextButton>Create Account</GreenTextButton> 
                            </AccountStatusBlock> 
                            <BasketButton>
                                <img src="static/svg/basket.svg" alt="Basket Image" />
                            </BasketButton>
                        </MiddleBarRight>
                    </MiddleBarInner>
                </MiddleBar>

                <BottomBar>
                    <BottomBarContainer>
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
                        <SearchForm onSubmit={ e => e.preventDefault() }>
                            <input type="text" placeholder="Search Your Item........" /> 
                            <button type="submit"><img src="static/svg/search.svg" alt="Search Icon" /></button>
                        </SearchForm>
                    </BottomBarContainer>
                </BottomBar>
            </header>
        );
    }
} 