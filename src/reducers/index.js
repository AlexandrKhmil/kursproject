import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import products from './products'
import cart from './cart'
import modals from './modals'
import slides from './slides'
import user from './user'

export default combineReducers({
  products,
  cart,
  modals,
  slides,
  user,
  form: formReducer
})