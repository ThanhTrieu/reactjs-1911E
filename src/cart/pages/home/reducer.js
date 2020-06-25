import { 
  LOADING_DATA_PRODUCT,
  GET_DATA_PRODUCT_SUCCESS,
  GET_DATA_PRODUCT_FAIL
} from './action'; 

const initialState = {
  loading: false,
  dataProduct: [],
  error: null
}

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA_PRODUCT:
      return {
        ...state,
        loading: action.loading
      }
    case GET_DATA_PRODUCT_SUCCESS:
      return {
        ...state,
        dataProduct: action.data,
        loading: false,
        error: null
      }
    case GET_DATA_PRODUCT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        dataProduct: []
      }
    default:
      return state;
  }
}