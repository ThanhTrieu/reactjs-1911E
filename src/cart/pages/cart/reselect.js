import { createSelector } from 'reselect';

const rootState = state => state.cartReducer;

export const getItemCart = createSelector(
  rootState,
  item => item.itemAdded
);

export const getTotalMoney = createSelector(
  rootState,
  item => item.totalPrice
);