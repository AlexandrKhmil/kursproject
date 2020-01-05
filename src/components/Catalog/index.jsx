import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Breadcumbs from '../Breadcumbs'  
import { Aside, AsideItem, AsideList } from '../Aside' 
import FactsBlock from '../FactsBlock'

import { Container, MainContainer, ProductList } from './style'

const breadcumbItems = [ 
  { title : 'Catalog', link : '/catalog' },
  { title : 'All' }
]

const AsideItems = [
  { title: 'Category', items: [ 
    { title: 'One' }, { title: 'Two' }, { title: 'Three' }
  ]},
  { title: 'Another', items: [ 
    { title: 'One' }, { title: 'Two' }, { title: 'Three' }
  ]} 
]

const mapStateToProps = ({products}) => ({ 
  products: products.items, 
  isReady: products.isReady,
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(() => {}, dispatch)
}) 

const Catalog = ({products, isReady}) => 
  <main>
    <Container> 
      {console.log(products)}
      <Breadcumbs items={breadcumbItems} /> 
      
      <MainContainer>
        <ProductList items={ products } />

        <Aside>
          { AsideItems.map((I1, K) =>
            <AsideItem key={K}>
              <h3>{I1.title}</h3>
              <AsideList>
              { I1.items.map((I2, K) =>
                <li key={K}>
                  <button>{I2.title}</button>
                </li>
              )}
              </AsideList>
            </AsideItem>
          )}
        </Aside>
      </MainContainer>
    </Container> 
    <FactsBlock />
  </main>

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Catalog)
 