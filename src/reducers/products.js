const initialState = {
  isReady: false,
  items: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
	  case "SET_PRODUCTS":
		  return {
			  ...state,
			  items: action.value,
			  isReady: true
		  } 
	  default: return state
  }
}
