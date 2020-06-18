import {all, call} from 'redux-saga/effects';
import {watchingGetDataSaga as popularSaga} from './page/popular/saga';
import watchingSearchMovieSaga from './page/seacrh/saga';

// theo doi tat ca cac saga
export default function* rootSaga() {
  yield all([
    call(popularSaga),
    call(watchingSearchMovieSaga)
  ])
}