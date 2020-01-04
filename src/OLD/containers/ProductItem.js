import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import ProductItem from '../components/productItem/productItem';

const mapStateToProps = ({ cart }, { id }) => ({
  //addedCount: addedCount //cart.items.reduce((count, product) => count + (product.id === id ? 1 : 0), 0),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductItem);
