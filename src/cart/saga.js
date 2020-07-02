import {all, call} from 'redux-saga/effects';
import { watchingGetDataProductSaga as homeSaga} from './pages/home/saga';
import { watchAddToCartSaga as cartSaga } from './pages/cart/saga';

export default function* rootSaga() {
  yield all([
    call(homeSaga),
    call(cartSaga)
  ])
}