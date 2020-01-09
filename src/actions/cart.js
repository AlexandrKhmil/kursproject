export const addProductToCart = productId => ({
  type: 'ADD_PRODUCT_TO_CART',
  productId: productId
})

export const removeProductFromCart = productId => ({
  type: 'REMOVE_PRODUCT_FROM_CART',
  productId: productId
})

export const deleteProductFromCart = productId => ({
  type: 'DELETE_PRODUCT_FROM_CART',
  productId: productId
})

export const clearCart = () => ({
  type: 'CLEAR_CART',
})