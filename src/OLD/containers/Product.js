import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import ProductPage from '../pages/product/product';  

const mapStateToProps = ({ products, filter }) => ({
  products: products.items,  
  isReady: products.isReady,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductPage);
