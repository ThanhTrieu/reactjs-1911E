import { call, put, takeEvery } from 'redux-saga/effects';
import {
  addCartSuccess,
  addCartFail,
  startAddCart,
  ADD_CART
} from './action';
import { api } from '../../services/api';

function* addCartSaga({ id }) {
  try {
    yield put(startAddCart(true));
    const response = yield call(api.getDataProductById, id);
    if(response){
      yield put(addCartSuccess(response));
    } else {
      yield put(addCartFail('not found data'));
    }
  } catch(error) {
    console.log(error);
  }
}

export function* watchAddToCartSaga() {
  yield takeEvery(ADD_CART, addCartSaga);
}