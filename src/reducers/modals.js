const initialState = {
  cart: false,
  auth: false,
  registration: false,
  error: {status: false, text: ''}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_MODAL_CART':  
      return {...state, cart: !state.cart} 
    case 'TOGGLE_MODAL_AUTH':
      return {...state, auth: !state.auth}
    case 'TOGGLE_MODAL_REGISTRATION': 
      return {...state, registration: !state.registration}
    case 'TOGGLE_MODAL_ERROR':
      return {...state, error: { status: !state.error.status, text: action.text } } 
    default: return state
  }
}