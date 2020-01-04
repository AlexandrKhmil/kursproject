import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import ProductItemSmall from '../components/productItem/productItemSmall';

const mapStateToProps = ({ cart }, { id }) => ({
  //addedCount: cart.items //cart.items.reduce((count, product) => count + (product.id === id ? 1 : 0), 0),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductItemSmall);
