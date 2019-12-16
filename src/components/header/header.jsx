import React from "react";  
import { NavLink } from 'react-router-dom';
import { Container } from './../container';
import PortalToRoot from '../portalToRoot'; 

import { ModalWrapper, ModalBlock, Close, AuthForm, AuthFormInner } from './modal';
import { TopBar, Navigation } from './topBar';
import { MiddleBar, MiddleBarInner, Logo, MiddleBarRight, AccountStatusBlock, GreenTextButton, BasketButton } from './middleBar'; 
import { BottomBar, BottomBarContainer, NavigationCategory, SearchForm} from './bottomBar';

const topLinks = [
    { title : 'Home', link : '/' },
    /*
    { title : 'My Account', link : '/account' },
    { title : 'Shopping Cart', link : '/cart' },
    { title : 'Checkout', link : '/checkout' },
    */
]; 

const bottomLinks = [
    { title : 'Catalog', link : '/catalog' },
    /*
    { title : 'Smart Phone', link : '/desktop' },
    { title : 'Desktop', link : '/desktop' },
    { title : 'Laptop', link : '/desktop' },
    { title : 'Accessories', link : '/desktop' },
    { title : 'Networking', link : '/desktop' },
    { title : 'Software', link : '/desktop' },
    */
]; 

export default class Header extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            authModal : false,
            regModal : false
        } 
        this.authWrapRef = React.createRef();
        this.regWrapRef = React.createRef();
    }

    openModal(modal) {
        this.setState({
            [modal] : true
        })
    }

    closeModal(modal) {
        this.setState({
            [modal] : false
        })
    }

    render() {  
        return ( 
            <header> 
                <PortalToRoot> 
                {
                    (this.state.authModal) ? 
                    <ModalWrapper ref={this.authWrapRef} onClick={ (e) => { if (this.authWrapRef.current === e.target) this.closeModal('authModal') } }>
                        <ModalBlock> 
                            <AuthForm onSubmit={ (e) => e.preventDefault() }> 
                                <h3>Authorization</h3>
                                <Close onClick={ () => { this.closeModal('authModal') } }><img src="static/svg/close.svg" alt="close" /></Close>
                                <AuthFormInner>
                                    <h4>Email</h4>
                                    <input type="email" />
                                    <h4>Password</h4>
                                    <input type="password" />
                                    <button type="submit">Enter</button>
                                </AuthFormInner> 
                            </AuthForm> 
                        </ModalBlock>
                    </ModalWrapper>
                    : null
                }  
                
                {
                    (this.state.regModal) ? 
                    <ModalWrapper ref={this.regWrapRef} onClick={ (e) => { if (this.regWrapRef.current === e.target) this.closeModal('regModal') } }>
                        <ModalBlock> 
                            <AuthForm onSubmit={ (e) => e.preventDefault() }> 
                                <h3>Registration</h3>
                                <Close onClick={ () => { this.closeModal('regModal') } }><img src="static/svg/close.svg" alt="close" /></Close>
                                <AuthFormInner>
                                    <h4>Email</h4>
                                    <input type="email" />
                                    <h4>Password</h4>
                                    <input type="password" />
                                    <button type="submit">Enter</button>
                                </AuthFormInner> 
                            </AuthForm>   
                        </ModalBlock>
                    </ModalWrapper>
                    : null
                }   

                </PortalToRoot>

                <TopBar>
                    <Container>
                        <Navigation>
                            <ul>
                            {
                                topLinks.map((item, key) => 
                                <li key={key}>
                                    <NavLink to={item.link} activeClassName="active" exact={true} >{item.title}</NavLink>
                                </li>)
                            } 
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
                                <GreenTextButton onClick={ () => { this.openModal('authModal') } }>Log In</GreenTextButton> or <GreenTextButton onClick={ () => { this.openModal('regModal') } }>Create Account</GreenTextButton> 
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
                            {
                                bottomLinks.map((item, key) => 
                                <li>
                                    <NavLink to={item.link} activeClassName="active">{item.title}</NavLink>
                                </li>)
                            } 
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