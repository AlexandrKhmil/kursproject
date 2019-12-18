import React from "react";  
import { NavLink } from 'react-router-dom';
import { Container } from './../container';
import PortalToRoot from '../portalToRoot'; 

import { ModalWrapper, ModalBlock, Close, AuthForm, AuthFormInner, CartBlock, CartList } from './modal';
import { TopBar, Navigation } from './topBar';
import { MiddleBar, MiddleBarInner, Logo, MiddleBarRight, AccountStatusBlock, GreenTextButton, BasketButton } from './middleBar'; 
import { BottomBar, BottomBarContainer, NavigationCategory, SearchForm} from './bottomBar';

const topLinks = [
    { title : 'Home', link : '/' },
    { title : 'Checkout', link : '/checkout' },
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
            regModal  : false,
            cartModal : false
        } 
        this.authWrapRef = React.createRef();
        this.regWrapRef  = React.createRef();
        this.cartWrapRef = React.createRef();
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
        const { items, products, removeFromCart } = this.props;
        return ( 
            <header> 
                <PortalToRoot> 
                { // Авторизация
                    (this.state.authModal) ? 
                    <ModalWrapper ref={this.authWrapRef} onClick={ (e) => { if (this.authWrapRef.current === e.target) this.closeModal('authModal') } }>
                        <ModalBlock> 
                            <AuthForm onSubmit={ (e) => e.preventDefault() }> 
                                <h3>Authorization</h3>
                                <Close onClick={ () => { this.closeModal('authModal') } }><img src="../static/svg/close.svg" alt="close" /></Close>
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
                
                { // Регистрация
                    (this.state.regModal) ? 
                    <ModalWrapper ref={this.regWrapRef} onClick={ (e) => { if (this.regWrapRef.current === e.target) this.closeModal('regModal') } }>
                        <ModalBlock> 
                            <AuthForm onSubmit={ (e) => e.preventDefault() }> 
                                <h3>Registration</h3>
                                <Close onClick={ () => { this.closeModal('regModal') } }><img src="../static/svg/close.svg" alt="close" /></Close>
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

                {   // Корзина
                    (this.state.cartModal) ? 
                    <ModalWrapper ref={this.cartWrapRef} onClick={ (e) => { if (this.cartWrapRef.current === e.target) this.closeModal('cartModal') } }>
                        <ModalBlock>  
                            <CartBlock as="div">
                                <h3>Cart</h3> 
                                <Close onClick={ () => { this.closeModal('cartModal') } }><img src="../static/svg/close.svg" alt="close" /></Close>  
                                <CartList> 
                                { 
                                    items.map((item,key) => {
                                        let product = products.find(product => product.id == item.id);
                                        return  ( 
                                    <li key={key}> 
                                        <img src={product.img} /> 
                                        <p>Имя - {product.name}</p>
                                        <p>Тип - {product.category}</p>
                                        <p>Цена - {product.price}$ x {item.count} = {product.price*item.count}$</p>
                                        <p>id - {item.id}</p> 
                                        <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                                    </li>
                                    )})
                                }
                                </CartList> 
                                <NavLink to='/checkout' onClick={ () => { this.closeModal('cartModal') } }>Go to checkout</NavLink>
                            </CartBlock> 
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
                                <GreenTextButton onClick={ () => this.openModal('authModal') }>Log In</GreenTextButton> or <GreenTextButton onClick={ () => { this.openModal('regModal') } }>Create Account</GreenTextButton> 
                            </AccountStatusBlock> 
                            <BasketButton onClick={ () => this.openModal('cartModal') }>
                                <img src="../static/svg/basket.svg" alt="Basket Image" />
                            </BasketButton>
                        </MiddleBarRight>
                    </MiddleBarInner>
                </MiddleBar>

                <BottomBar>
                    <BottomBarContainer>
                        <NavigationCategory>
                            <ul>
                            {
                                bottomLinks.map((item, index) => 
                                <li key={index}>
                                    <NavLink to={item.link} activeClassName="active">{item.title}</NavLink>
                                </li>)
                            } 
                            </ul> 
                        </NavigationCategory> 
                        <SearchForm onSubmit={ e => e.preventDefault() }>
                            <input type="text" placeholder="Search Your Item........" /> 
                            <button type="submit"><img src="../static/svg/search.svg" alt="Search Icon" /></button>
                        </SearchForm>
                    </BottomBarContainer>
                </BottomBar>
            </header>
        );
    }
} 