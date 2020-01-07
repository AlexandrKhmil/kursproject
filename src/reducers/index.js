import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import products from './products'
import cart from './cart'
import modals from './modals'
import slides from './slides'

export default combineReducers({
  products,
  cart,
  modals,
  slides,
  form: formReducer
})