import { createSelector } from 'reselect';

const rootState = state => state.searchMovie;

export const loadingSearchMovie = createSelector(
  rootState,
  item => item.loadingSearch
);

export const dataSearchMovie = createSelector(
  rootState,
  item => item.dataSearch
);