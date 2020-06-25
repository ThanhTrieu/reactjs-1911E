import {all, call} from 'redux-saga/effects';
import { watchingGetDataProductSaga as homeSaga} from './pages/home/saga';

export default function* rootSaga() {
  yield all([
    call(homeSaga),
  ])
}