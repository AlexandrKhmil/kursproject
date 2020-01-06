const initialState = {
  isReady: false,
	items: [],
	sortType: 'none'
}

export default (state = initialState, action) => {
  switch (action.type) {
	  case "SET_PRODUCTS":
		  return {
			  ...state,
			  items: action.value,
			  isReady: true
			}
		case "SET_SORT_TYPE": 
			return { 
				...state,
				sortType: action.value
			}
	  default: return state
  }
}
