// action cua redux
export const LOADING_DATA = 'LOADING_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';

// action
export const GET_DATA_MOVIE = 'GET_DATA_MOVIE';

export const loadingDataMovie = (loading) => {
  return {
    type: LOADING_DATA,
    loading
  }
}

export const getDataMovieSuccess = (dataMovie) => ({
  type: GET_DATA_SUCCESS,
  dataMovie
});

export const getDataMovieFail = (error) => ({
  type: GET_DATA_FAILURE,
  error
})

export const getDataPopularMovie = () => ({
  type: GET_DATA_MOVIE
})