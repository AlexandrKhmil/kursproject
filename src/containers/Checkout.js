import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/products';
import CheckoutPage from '../pages/checkout/checkout';  

const mapStateToProps = ({ products, filter, cart }) => ({
  cartItems: cart.items,
  products: products.items, 
  isReady: products.isReady,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(productsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckoutPage);
