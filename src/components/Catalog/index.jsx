import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProductActions from '../../actions/products'
import { sortProducts } from './sortProducts'
import Breadcumbs from '../Breadcumbs'  
import { Aside, AsideItem, AsideList } from '../Aside' 
import FactsBlock from '../FactsBlock' 
import { Container, MainContainer, ProductList } from './style'

const breadcumbItems = [ 
  { title : 'Catalog', link : '/catalog' },
  { title : 'All' }
]



const mapStateToProps = ({products}) => ({ 
  products: products.items, 
  isReady: products.isReady,
  sortType: products.sortType
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(ProductActions, dispatch)
}) 

const Catalog = props => {
  const { products, isReady, sortType, setSortType } = props

  const AsideItems = [
    { 
      title: 'Price Range', 
      items: [ 
        // { title: '< 5 000', onClick: setSortType }, 
        // { title: '5000 - 10 000', onClick: setSortType }, 
        // { title: '> 10 000', onClick: setSortType }
      ]
    },
    { 
      title: 'Сортировка товара', 
      items: [ 
        { title: 'Цена по возрастанию', onClick: () => setSortType('price_ascending') }, 
        { title: 'Цена по убыванию', onClick: () => setSortType('price_descending') }, 
        { title: 'Сперва новые', onClick: () => setSortType('date_descending') },
        { title: 'Сначало старые', onClick: () => setSortType('date_ascending') },
        { title: 'Сперва лучшие', onClick: () => setSortType('rating_descending') },
        { title: 'Сперва худшие', onClick: () => setSortType('rating_ascending') },
      ]
    } 
  ] 

  sortProducts(products, sortType)

  return (
    <main>
      <Container>  
        <Breadcumbs items={breadcumbItems} />  
        <MainContainer>
          <ProductList items={products} /> 
          <Aside>
            { 
              AsideItems.map((P, PK) =>
                <AsideItem key={PK}>
                  <h3>{P.title}</h3>
                  <AsideList>
                  { P.items.map((C, CK) =>
                    <li key={CK}>
                      <button 
                        onClick={() => { C.onClick() }}
                      >
                        {C.title}
                      </button>
                    </li>
                  )}
                  </AsideList>
                </AsideItem>
              )
            }
          </Aside>
        </MainContainer>
      </Container> 
      <FactsBlock />
    </main>
  )
} 

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Catalog)
 