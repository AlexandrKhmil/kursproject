import React from 'react'
import { NavLink } from 'react-router-dom'; 
import { PriceBlock, RatingBlock } from '../ProductItem'
import { List, Item } from './style' 

const ProductList = props => {
  const { items } = props
  return (
    <List>
      { items.map((I, K) => 
        <Item key={K}>
          <img src={I.imgURL} alt="Product" />
          <RatingBlock> { /* {I.rating} */}
            <div>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <ul style={{height: `calc(100%  * ${I.rating / 100})`}}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </RatingBlock>
          <NavLink to={`/product/${I}`}>{I.name}</NavLink>
          <PriceBlock className="priceBlock">
            <span>{I.price} грн</span>
          </PriceBlock> 
          <button onClick={ () => {} }>Add to cart</button>
        </Item> 
        )
      }
    </List>
  )
}
  
export default ProductList