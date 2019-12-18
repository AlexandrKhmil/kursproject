import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/products';
import HomePage from '../pages/home/home';  

const mapStateToProps = ({ products, filter }) => ({
  products: products.items, 
  isReady: products.isReady,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(productsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
