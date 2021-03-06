const initialState = {
  cart: false,
  auth: false,
  registration: false,
  error: {status: false, text: ''},
  message: false
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
    case 'TOGGLE_MESSAGE':
      return {...state, message: !state.message}
    default: return state
  }
}