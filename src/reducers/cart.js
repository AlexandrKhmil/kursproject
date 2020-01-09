const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return state.find(I => I.id === action.productId)
        ? state.map(I => I.id === action.productId ? {...I, count: ++I.count} : I)
        : [{ id: action.productId, count: 1 }, ...state]
    case 'REMOVE_PRODUCT_FROM_CART':
      return state.find(I => I.count !== 1)
        ? state.map(I => I.id === action.productId ? {...I, count: --I.count} : I)
        : state.filter(I => I.id !== action.productId)
    case 'DELETE_PRODUCT_FROM_CART':
      return state.filter(I => I.id !== action.productId)
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}