import { createSelector } from 'reselect';

const rooState = state => state.popularMovie;

export const loadingPopularMovie = createSelector(
  rooState,
  item => item.loadingPopular
)

export const dataPopularMovie = createSelector(
  rooState,
  item => item.dataPopular
);