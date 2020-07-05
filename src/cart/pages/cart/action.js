export const REMOVE_ITEM_CART = 'REMOVE_ITEM_CART';
export const CHANGE_QUANLITY_CART = 'CHANGE_QUANLITY_CART';

export const START_ADD_CART = 'START_ADD_CART';
export const ADD_CART = 'ADD_CART';
export const ADD_CART_SUCCESS = 'ADD_CART_SUCCESS';
export const ADD_CART_FAIL = 'ADD_CART_FAIL';

export const changeQuanlityItemCart = (id, qty) => ({
  type: CHANGE_QUANLITY_CART,
  id,
  qty
})

export const addProductToCart = (id) => ({
  type: ADD_CART,
  id
});
export const addCartSuccess = (data) => ({
  type: ADD_CART_SUCCESS,
  data
});
export const addCartFail = () => ({
  type: ADD_CART_FAIL
});
export const startAddCart = (start) => ({
  type: START_ADD_CART,
  start
})

export const removeItemInCart = (idItem) => ({
  type: REMOVE_ITEM_CART,
  idItem
});

