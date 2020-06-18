import {
  LOADING_SEARCH_MOVIE,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILURE
} from './action';

const initialState = {
  loadingSearch: false,
  dataSearch: [],
  errorSearch: null
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_SEARCH_MOVIE:
      return {
        ...state,
        ...{
          loadingSearch: action.loading
        }
      }
    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        ...{
          loadingSearch: false,
          dataSearch: action.data,
          error: null
        }
      }
    case SEARCH_MOVIE_FAILURE:
      return {
        ...state,
        ...{
          loadingSearch: false,
          dataSearch:[],
          error: action.error
        }
      }
    default:
      return state;
  }
}

export default searchReducer;