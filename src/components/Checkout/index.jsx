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

const mapStateToProps = ({cart, products}) => ({ 
  products: cart.map(item => Object({...products.items.find(product => product.id === item.id), count: item.count}))
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({...CartActions, ...ModalActions}, dispatch)
}) 

const Checkout = props => {
  const breadcumbItems = [ 
    { title : 'Home', link : '/' },
    { title : 'Checkout' }
  ]

  const { products } = props
  const { addProductToCart, removeProductFromCart, deleteProductFromCart } = props

  return (
    <main> 
      <ContainerCheckout>
        <Breadcumbs items={breadcumbItems} />
        <InnerCheckout>
          <CheckoutForm onSubmit={() => {}} empty={products.length === 0} />
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