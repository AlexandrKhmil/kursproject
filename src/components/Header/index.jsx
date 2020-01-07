import React from 'react'
import { NavLink } from 'react-router-dom' 
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProductActions from '../../actions/products'
import SearchForm from '../SearchForm'
import { HeaderTop, NavigationPages } from './HeaderTop'
import { HeaderMiddle, Logo, UserPanel, LogInPanel, TextButton, BasketButton, ButtonCounter } from './HeaderMiddle'
import { HeaderBottom, NavigationCatalog } from './HeaderBottom'
import { Container } from './style' 

const pagesLinks = [
  { title: 'Home', link: '/' }, 
  { title: 'Account', link: '/Account' }
]  

const mapStateToProps = ({products}) => ({ 
  categories: products.items.reduce((prev, item) => 
    prev.indexOf(item.category) === -1 
      ? [...prev, item.category] 
      : prev, 
  []),
  isReady: products.isReady,
  productCategoriesAllowed: products.productCategoriesAllowed
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(ProductActions, dispatch)
}) 

const Header = props => {
  const { categories, productCategoriesAllowed, setProductCategoriesAllowed } = props

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
            <span>LO</span>
            <span>GO</span>
          </Logo>
          <UserPanel>
            <LogInPanel>
              <TextButton>Log In</TextButton>
              or
              <TextButton>Create Account</TextButton>
            </LogInPanel> 
            <BasketButton>
              <ButtonCounter>3</ButtonCounter>
              <img src="../static/svg/basket.svg" alt="Basket Button" />
            </BasketButton> 
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