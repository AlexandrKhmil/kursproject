import React from 'react'
import { NavLink } from 'react-router-dom'; 
import { List, Item } from './style'

import { PriceBlock } from '../ProductItem'

const ProductList = props => {
  const { items } = props
  return (
    <List>
      { items.length !== 0 
        ? items.map((I, K) => 
        <Item>
          <img src={I.img} alt="Product" />
          <NavLink to={`/product/${I.id}`}>{I.name}</NavLink>
          <PriceBlock className="priceBlock">
            <span>{I.price} грн</span>
          </PriceBlock> 
          <button onClick={ () => {} }>Add to cart</button>
        </Item> 
        ) : null
      }
    </List>
  )
}
  
export default ProductList