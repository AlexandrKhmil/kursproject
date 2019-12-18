import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/products';
import App from '../App'; 

/*
const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case 'price_high':
      return orderBy(books, 'price', 'desc');
    case 'price_low':
      return orderBy(books, 'price', 'asc');
    case 'author':
      return orderBy(books, 'author', 'asc');
    default:
      return books;
  }
};

const filterBooks = (books, searchQuery) =>
  books.filter(
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
  );

const searchBooks = (books, filterBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filterBy);
};
*/
const mapStateToProps = ({ products, filter }) => ({
  products: products.items,
  //&& searchBooks(books.items, filter.filterBy, filter.searchQuery),
  isReady: products.isReady,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(productsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
