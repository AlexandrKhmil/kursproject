export const setProducts = products => ({
  type: 'SET_PRODUCTS',
  value: products
})

export const setSortType = sortType => ({
  type: 'SET_SORT_TYPE',
  value: sortType
})

export const setPriceRange = value => ({
  type: 'SET_PRICE_RANGE',
  value: value
})

export const setProductCategoriesAllowed = value => ({
  type: 'SET_PRODUCT_CATEGORIES_ALLOWED',
  value: value
})