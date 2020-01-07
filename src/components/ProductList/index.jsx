import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CartActions from '../../actions/cart'
import { PriceBlock, RatingBlock } from '../ProductItem'
import { List, Item } from './style' 

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(CartActions, dispatch)
}) 

const ProductList = props => {
  const { items, addProductToCart } = props
  return (
    <List>
      { items.map((I, K) => 
        <Item key={K}>
          <img src={I.imgURL} alt="Product" />
          <RatingBlock> 
            <div>
              <ul> 
                { new Array(5).fill(1).map((I, K) => <li key={K}></li>) }
              </ul>
              <ul style={{height: `calc(100%  * ${I.rating / 100})`}}>
                { new Array(5).fill(1).map((I, K) => <li key={K}></li>) }
              </ul>
            </div>
          </RatingBlock>
          <NavLink to={`/product/${I.id}`}>{I.name}</NavLink>
          <PriceBlock className="priceBlock">
            <span>{I.price} грн</span>
          </PriceBlock> 
          <button onClick={ () => addProductToCart(I.id) }>Add to cart</button>
        </Item> 
        )
      }
    </List>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList) 