export const LOADING_DATA_PRODUCT = 'LOADING_DATA_PRODUCT';
export const GET_DATA_PRODUCT = 'GET_DATA_PRODUCT';
export const GET_DATA_PRODUCT_SUCCESS = 'GET_DATA_PRODUCT_SUCCESS';
export const GET_DATA_PRODUCT_FAIL = 'GET_DATA_PRODUCT_FAIL';

export const loadingGetDataProduct = (loading) => ({
  type: LOADING_DATA_PRODUCT,
  loading
});
export const getDataProduct = () => ({
  type: GET_DATA_PRODUCT
});
export const getDataProductSuccess = (data) => ({
  type: GET_DATA_PRODUCT_SUCCESS,
  data
});
export const getDataProductFail = (error) => ({
  type: GET_DATA_PRODUCT_SUCCESS,
  error
});