export const REMOVE_ITEM_CART = 'REMOVE_ITEM_CART';
export const REMOVE_ITEM_CART_SUCCESS = 'REMOVE_ITEM_CART_SUCCESS';
export const REMOVE_ITEM_CART_FAIL = 'REMOVE_ITEM_CART_FAIL';
export const PENDING_REMOVE_ITEM_CART = 'PENDING_REMOVE_ITEM_CART';

export const START_ADD_CART = 'START_ADD_CART';
export const ADD_CART = 'ADD_CART';
export const ADD_CART_SUCCESS = 'ADD_CART_SUCCESS';
export const ADD_CART_FAIL = 'ADD_CART_FAIL';

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

export const pendingRemoveItemCart = (loading) => ({
  type: PENDING_REMOVE_ITEM_CART,
  loading
});

export const removeItemInCartSuccess = (addedItems) => ({
  type: REMOVE_ITEM_CART_SUCCESS,
  addedItems
});

export const removeItemInCartFail = (error) => ({
  type: REMOVE_ITEM_CART_FAIL,
  error
});

