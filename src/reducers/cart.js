const initialState = {
    items: []
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          items: state.items.findIndex(item => item.id == action.payload) == -1 
            ? [...state.items, { id : action.payload, count : 1} ]
            : state.items.map(item => { 
              return (item.id === action.payload) ? { id : item.id, count : item.count + 1} : item})
          //[...state.items, { id : action.payload, count : 1} ]
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          items: state.items.map(item => { 
            return (item.id != action.payload) ? item
              : (item.count == 1) ? null : { id : item.id, count : item.count - 1} }
          ).filter(item => item !== null)

          //.filter(o => o.id !== action.payload && o.count == 1)
        };
      default:
        return state;
    }
  };
  