import React from 'react' 
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CartActions from '../../actions/cart'
import * as ModalActions from '../../actions/modals'
import Breadcumbs from '../Breadcumbs'
import { Aside, AsideItem } from '../Aside'
import CartBlockItem from '../CartBlockItem'
import CheckoutForm from '../CheckoutForm'
import { ContainerCheckout, InnerCheckout, ProductsList } from './style'
import { placeOrder, timestamp } from '../../firebase'

const mapStateToProps = ({cart, products}) => ({ 
  products: cart.map(item => Object({...products.items.find(product => product.id === item.id), count: item.count}))
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({...CartActions, ...ModalActions}, dispatch)
}) 

const placeOrderFunc = (userData, items) => {
  placeOrder({
    email: userData.email,
    address: userData.address,
    tel: userData.tel,
    date: new timestamp.fromDate(new Date()),
    status: 'not_accepted',
    items: items.map(item => ({ id: item.id, count: item.count }))
  })
}

const Checkout = props => {
  const breadcumbItems = [ 
    { title : 'Home', link : '/' },
    { title : 'Checkout' }
  ]

  const { products } = props
  const { addProductToCart, removeProductFromCart, deleteProductFromCart, clearCart, toggleMessage } = props

  return (
    <main> 
      <ContainerCheckout>
        <Breadcumbs items={breadcumbItems} />
        <InnerCheckout> 
          <CheckoutForm 
            onSubmit={value => {
              placeOrderFunc(value, products)
              clearCart()
              toggleMessage()
            }} 
            empty={products.length === 0} 
          />
          <Aside style={{ minWidth: '300px', maxWidth: '300px'}}>
            <AsideItem>
              <h3>Cart</h3>
              <p>In your cart {products.length} item(s)</p>
              <ProductsList>
                {
                  products.map((item, key) => 
                    <CartBlockItem 
                      key={key}
                      item={item} 
                      addProductToCart={addProductToCart} 
                      removeProductFromCart={removeProductFromCart} 
                      deleteProductFromCart={deleteProductFromCart}
                    />
                  )
                }
              </ProductsList> 
            </AsideItem>
          </Aside>
        </InnerCheckout>
      </ContainerCheckout>
    </main>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checkout)  