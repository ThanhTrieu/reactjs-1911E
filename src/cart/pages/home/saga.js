// su dung cac side effect cua saga
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  loadingGetDataProduct,
  getDataProductSuccess,
  getDataProductFail,
  GET_DATA_PRODUCT
} from './action';
import { api } from '../../services/api';

function* getDataProductSaga() {
  try {
    yield put(loadingGetDataProduct(true)); // bat dau lay data
    // call api
    const response = yield call(api.getAllDataProduct);
    if(response){
      yield put(getDataProductSuccess(response));
    } else {
      yield put(getDataProductFail('not found data'));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* watchingGetDataProductSaga(){
  yield takeEvery(GET_DATA_PRODUCT, getDataProductSaga);
}
