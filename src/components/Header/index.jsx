import React from 'react'
import { NavLink } from 'react-router-dom' 
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProductActions from '../../actions/products'
import * as ModalsActions from '../../actions/modals'
import SearchForm from '../SearchForm'
import Cart from '../Cart'
import { HeaderTop, NavigationPages } from './HeaderTop'
import { HeaderMiddle, Logo, UserPanel, LogInPanel, 
  TextButton, BasketButtonWrapper, BasketButton, ButtonCounter,
  UserBlock } from './HeaderMiddle'
import { HeaderBottom, NavigationCatalog } from './HeaderBottom'
import { Container } from './style' 
import { signOut } from '../../firebase'
 
const mapStateToProps = ({products, cart, user}) => ({ 
  categories: products.items.reduce((prev, item) => 
    prev.indexOf(item.category) === -1 
      ? [...prev, item.category] 
      : prev, 
  []),
  cartItemsCount: cart.reduce((prev, item) => 
    prev + item.count, 
  0),
  isReady: products.isReady,
  productCategoriesAllowed: products.productCategoriesAllowed,
  user: user
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({...ProductActions, ...ModalsActions}, dispatch)
}) 

const Header = props => {
  const { categories, cartItemsCount, productCategoriesAllowed, setProductCategoriesAllowed, user } = props
  const { toggleCart, toggleAuth, toggleRegistration } = props

  const pagesLinks = (user === null) ? [
    { title: 'Home', link: '/' },  
    { title: 'Checkout', link: '/checkout' }
  ] 
  : [
    { title: 'Home', link: '/' }, 
    { title: 'My Orders', link: '/account' },
    { title: 'Checkout', link: '/checkout' }
  ]

  const catalogLinks = [
    { 
      title: 'All', 
      link: '/catalog', 
      className: (productCategoriesAllowed === "All") ? 'allowed' : '',
      onClick: () => setProductCategoriesAllowed("All")
    },
    ...categories.sort().map(I => 
      Object({ 
        title: I, 
        className: (productCategoriesAllowed === I) ? 'allowed' : '',
        link: '/catalog', 
        onClick: () => setProductCategoriesAllowed(I) 
      })
    )
  ] 

  return (
    <header>
      <HeaderTop> 
        <Container as="nav">
          <NavigationPages>
            { pagesLinks.map((I, K) => 
              <li key={K}>
                <NavLink 
                  to={I.link} 
                  activeClassName="current" 
                  exact={true}
                >
                  {I.title}
                </NavLink>
              </li>
            )}
          </NavigationPages>
        </Container>
      </HeaderTop>

      <HeaderMiddle>
        <Container>
          <Logo to="/">
            <span>WEST</span>
            <span>MART</span>
          </Logo>
          <UserPanel>
            {
              user === null 
              ? <LogInPanel>
                  <TextButton onClick={() => toggleAuth()}>Log In</TextButton>
                  or
                  <TextButton onClick={() => toggleRegistration()}>Create Account</TextButton>
                </LogInPanel> 
              : <UserBlock>
                  <h4>Добро пожаловать <NavLink to="/account">{user.email}</NavLink></h4> 
                  <button onClick={signOut}>Выйти</button>
                </UserBlock>
            } 
            <BasketButtonWrapper>
              <BasketButton onClick={() => toggleCart()}>
                <ButtonCounter>{cartItemsCount > 9 ? '9+' : cartItemsCount}</ButtonCounter>
                <img src="../static/svg/basket.svg" alt="Basket Button" /> 
              </BasketButton> 
              <Cart />
            </BasketButtonWrapper> 
          </UserPanel>
        </Container>
      </HeaderMiddle>

      <HeaderBottom>
        <Container>
          <NavigationCatalog> 
            { catalogLinks.map((I, K) =>
              <li key={K}>
                <NavLink 
                  to={I.link} 
                  className={I.className} 
                  activeClassName="current"
                  onClick={() => I.onClick()}
                  exact={true}
                >
                  {I.title}
                </NavLink>
              </li>
            )}
          </NavigationCatalog>
          <SearchForm onSubmit={() => {}} />
        </Container>
      </HeaderBottom> 
    </header> 
  )
}
  
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header) 