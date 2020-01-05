import React from 'react'
import { NavLink } from 'react-router-dom'; 
import { List, Item } from './style'

import { PriceBlock } from '../ProductItem'

const ProductList = props => {
  const { items } = props
  return (
    <List>
      { Object.entries(items).map((I, K) => 
        <Item>
          <img src={I[1].imgURL} alt="Product" />
          <NavLink to={`/product/${I[0]}`}>{I[1].name}</NavLink>
          <PriceBlock className="priceBlock">
            <span>{I[1].price} грн</span>
          </PriceBlock> 
          <button onClick={ () => {} }>Add to cart</button>
        </Item> 
        )
      }
    </List>
  )
}
  
export default ProductList