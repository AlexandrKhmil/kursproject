const initialState = {
  cart: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_MODAL':  
      return {...state, cart: !state.cart} 
    default: return state
  }
}