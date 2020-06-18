export const SEARCH_NAME_MOVIE = 'SEARCH_NAME_MOVIE'; // action tu phia view user

// action tu phia saga
export const LOADING_SEARCH_MOVIE = 'LOADING_SEARCH_MOVIE';
export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
export const SEARCH_MOVIE_FAILURE = 'SEARCH_MOVIE_FAILURE';

export const loadingSearchMovie = (loading) => ({
  type: LOADING_SEARCH_MOVIE,
  loading
});

export const searchMovieSuccess = (data) => ({
  type: SEARCH_MOVIE_SUCCESS,
  data
});

export const searchMovieFail = (error) => ({
  type: SEARCH_MOVIE_FAILURE,
  error
});

export const searchMovie = (language, nameMovie) => ({
  type: SEARCH_NAME_MOVIE,
  nameMovie,
  language
})