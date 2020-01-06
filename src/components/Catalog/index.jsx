import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProductActions from '../../actions/products'
import { sortProducts } from '../../functions/sortProducts'
import { filterPriceRange } from '../../functions/filterPriceRange'
import { filterProductByCategory } from '../../functions/filterProductByCategory'
import { filterProductBySearch } from '../../functions/filterProductBySearch'
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
  sortType: products.sortType,
  priceRange: products.priceRange,
  productCategoriesAllowed: products.productCategoriesAllowed,
  searchProduct: products.searchProduct
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(ProductActions, dispatch)
}) 

const Catalog = props => {
  const { isReady, sortType, priceRange, productCategoriesAllowed, searchProduct, setSortType, setPriceRange } = props
  let { products } = props

  const AsideItems = [ 
    { 
      title: 'Сортировка', 
      items: [ 
        { title: 'Цена по возрастанию', onClick: () => setSortType('price_ascending') }, 
        { title: 'Цена по убыванию', onClick: () => setSortType('price_descending') }, 
        { title: 'Сперва новые', onClick: () => setSortType('date_descending') },
        { title: 'Сначало старые', onClick: () => setSortType('date_ascending') },
        { title: 'Сперва лучшие', onClick: () => setSortType('rating_descending') },
        { title: 'Сперва худшие', onClick: () => setSortType('rating_ascending') },
      ]
    },
    { 
      title: 'Цена', 
      items: [ 
        { title: 'до 5 000', onClick: () => setPriceRange({min: 0, max: 5000}) }, 
        { title: '5000 - 10 000', onClick: () => setPriceRange({min: 5000, max: 10000}) }, 
        { title: '> 10 000', onClick: () => setPriceRange({min: 10000, max: null}) }
      ]
    },
  ] 

  sortProducts(products, sortType)  
  let productsToDisplay = filterPriceRange(products, priceRange)
  productsToDisplay = filterProductByCategory(productsToDisplay, productCategoriesAllowed)
  productsToDisplay = filterProductBySearch(productsToDisplay, searchProduct)

  return (
    <main>
      <Container>  
        <Breadcumbs items={breadcumbItems} />  
        <MainContainer>
          <ProductList items={productsToDisplay} /> 
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
 