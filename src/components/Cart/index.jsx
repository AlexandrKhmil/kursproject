import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CartActions from '../../actions/cart'
import { CartBlock, CartBlockItemList, CartBlockItem, CartTopArrow, LinkButton, TotalPrice } from './style'

const mapStateToProps = ({cart, products, modals}) => ({
  status: modals.cart,
  products: cart.map(item => Object({...products.items.find(product => product.id === item.id), count: item.count}))
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(CartActions, dispatch)
}) 

const Cart = props => {
  const { products, status, addProductToCart, removeProductFromCart, deleteProductFromCart } = props
  return ( 
    <> {
      status 
        ? <CartBlock>
          <CartTopArrow src="../static/png/CartTopArrow.png" alt="CartTopArrow" />
          <h4>Showing {products.reduce((prev,item) => prev + item.count, 0)} products added</h4>
          <CartBlockItemList>
            {products.map((item, key) => 
              <CartBlockItem key={key}>
                <img src={item.imgURL} alt="Cart Product" />
                <div>
                  <h5>{item.name}</h5>
                  <ul>
                    <li>Category: <span>{item.category}</span></li>
                    <li>Count: <span>{item.count}</span></li>
                  </ul>
                </div>
                <div>
                  <p>{item.price} грн</p>
                  <div>
                    <button onClick={() => addProductToCart(item.id)}>+</button>
                    <button onClick={() => removeProductFromCart(item.id)}>-</button>
                    <button onClick={() => deleteProductFromCart(item.id)}>
                      <img src="../static/png/deleteButton.png" alt="deleteButton" />
                    </button>
                  </div>
                </div> 
              </CartBlockItem>
            )} 
          </CartBlockItemList> 
          <TotalPrice>
            <p>Total excluding delivry:</p>
            <p>{products.reduce((prev,item) => prev + item.count * item.price, 0)} грн</p>
          </TotalPrice>
          <LinkButton to='/checkout'>
            Continue to checkout
          </LinkButton>
        </CartBlock>
        : null
      }
    </>
  )
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart)  