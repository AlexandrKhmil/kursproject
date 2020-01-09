export const toggleCart = () => ({
  type: 'TOGGLE_MODAL_CART'
})

export const toggleAuth = () => ({
  type: 'TOGGLE_MODAL_AUTH'
})

export const toggleRegistration = () => ({
  type: 'TOGGLE_MODAL_REGISTRATION'
})

export const toggleError = text => ({
  type: 'TOGGLE_MODAL_ERROR',
  text: text
})

export const toggleMessage = () => ({
  type: 'TOGGLE_MESSAGE'
})