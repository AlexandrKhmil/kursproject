import React from 'react' 
import { CartBlockInner } from './style'

const CartBlockItem = props => { 
  const {item} = props
  const { addProductToCart, removeProductFromCart, deleteProductFromCart } = props
  return (
    <CartBlockInner>
      <img src={item.imgURL} alt="Cart Product" />
      <div>
        <h5>{item.name}</h5>
        <ul>
          <li>Category: <span>{item.category}</span></li>
          <li>Count: <span>{item.count}</span></li>
        </ul>
      </div>
      <div>
        <p>{item.price * item.count} грн</p>
        <div>
          <button onClick={() => addProductToCart(item.id)}>+</button>
          <button onClick={() => removeProductFromCart(item.id)}>-</button>
          <button onClick={() => deleteProductFromCart(item.id)}>
            <img src="../static/png/deleteButton.png" alt="deleteButton" />
          </button>
        </div>
      </div> 
    </CartBlockInner>
  )
}

export default CartBlockItem