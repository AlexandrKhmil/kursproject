const initialState = {
  isReady: false,
	items: [],
	sortType: 'none',
	priceRange: null,
	productCategoriesAllowed: "All",
	searchProduct: null
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
		case 'SET_PRICE_RANGE':
			return {
				...state,
				priceRange: action.value
			}
		case 'SET_PRODUCT_CATEGORIES_ALLOWED':
			return {
				...state,
				productCategoriesAllowed: action.value
			} 
	  default: return state
  }
}
