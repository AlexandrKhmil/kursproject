import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/products';
import CatalogPage from '../pages/catalog/catalog';  

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
)(CatalogPage);
