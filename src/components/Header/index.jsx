import React from 'react'
import { NavLink } from 'react-router-dom' 
import SearchForm from '../SearchForm'
 
import { HeaderTop, NavigationPages } from './HeaderTop'
import { HeaderMiddle, Logo, UserPanel, LogInPanel, TextButton, BasketButton, ButtonCounter } from './HeaderMiddle'
import { HeaderBottom, NavigationCatalog } from './HeaderBottom'
import { Container } from './style' 

const pagesLinks = [
  { title: 'Home', link: '/' }, 
  { title: 'Account', link: '/Account' }
] 

const catalogLinks = [
  { title: 'All', link: '/Catalog', event: ''},
  { title: 'Phones', link: '/Catalog2', event: ''}
]

const Header = () => 
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
                activeClassName="current" 
                exact={true}
              >
                {I.title}
              </NavLink>
            </li>
          )}
        </NavigationCatalog>
        <SearchForm 
          onSubmit={values => console.log(values)}
        />
      </Container>
    </HeaderBottom>
  </header> 

export default Header 