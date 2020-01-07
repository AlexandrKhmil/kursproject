const initialState = {
  banner: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'SET_BANNER_PRODUCTS':
      return {...state, banner: action.items}
    default: return state
  }
}