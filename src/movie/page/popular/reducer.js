import {
  LOADING_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE
} from './action';

const stateDefault = {
  loadingPopular: false,
  dataPopular: [],
  errorPopular: null
}

const popularMovieReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        ...{
          //action.loading do saga put dispatch sang reducer
          loadingPopular: action.loading
        }
      }
    case GET_DATA_SUCCESS:
      return {
        ...state,
        ...{
          loadingPopular: false,
          dataPopular: action.dataMovie
        }
      }
    case GET_DATA_FAILURE:
      return {
        ...state,
        ...{
          loadingPopular: false,
          dataPopular: [],
          errorPopular: action.error
        }
      }
    default:
      return state;
  }
}

export default popularMovieReducer;