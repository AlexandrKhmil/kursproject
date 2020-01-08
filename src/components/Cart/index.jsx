import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CartActions from '../../actions/cart'
import * as ModalActions from '../../actions/modals'
import CartBlockItem from '../CartBlockItem'
import { CartBlock, CartBlockItemList, CartTopArrow, CartButtons, CloseButton, LinkButton, TotalPrice } from './style'

const mapStateToProps = ({cart, products, modals}) => ({
  status: modals.cart,
  products: cart.map(item => Object({...products.items.find(product => product.id === item.id), count: item.count}))
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({...CartActions, ...ModalActions}, dispatch)
}) 

const Cart = props => {
  const { products, status, addProductToCart, removeProductFromCart, deleteProductFromCart, toggleCart } = props
  return ( 
    <> {
      status 
        ? <CartBlock>
          <CartTopArrow src="../static/png/CartTopArrow.png" alt="CartTopArrow" />
          <h4>Showing {products.reduce((prev,item) => prev + item.count, 0)} products added</h4>
          <CartBlockItemList>
            {products.map((item, key) => 
              <CartBlockItem 
                key={key} 
                item={item} 
                addProductToCart={addProductToCart} 
                removeProductFromCart={removeProductFromCart} 
                deleteProductFromCart={deleteProductFromCart}
              />
            )} 
          </CartBlockItemList> 
          <TotalPrice>
            <p>Total excluding delivry:</p>
            <p>{products.reduce((prev,item) => prev + item.count * item.price, 0)} грн</p>
          </TotalPrice>
          <CartButtons>
            <CloseButton as="button" to="/" onClick={() => toggleCart()}>
              Close
            </CloseButton>
            <LinkButton to='/checkout'>
              Continue to checkout
            </LinkButton>
          </CartButtons> 
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