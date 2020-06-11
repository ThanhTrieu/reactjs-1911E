import { createSelector } from 'reselect';

// lay ra state tong
const rootState = state => state.counter;

// lay cac state con ben trong
export const counterReselect = createSelector(
  rootState,
  item => item.count
)