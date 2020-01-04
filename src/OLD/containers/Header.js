import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import Header from '../components/header/header';
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({ products, cart }) => ({
  items: cart.items,
  products : products.items
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
