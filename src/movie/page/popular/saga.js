// su dung cac side effect cua saga
import {call, put, takeEvery} from 'redux-saga/effects';
import {
  loadingDataMovie,
  getDataMovieSuccess,
  getDataMovieFail,
  GET_DATA_MOVIE
} from './action';
import { api } from '../../service/movie';

// tao 1 ham thuc thi goi du lieu tu api va dispatch sang reducer
// bat buoc phai su dung generator function
function* getDataMovieSaga(){
  try {
    // bat dau lay du lieu tu api ve
    yield put(loadingDataMovie(true));
    // call api
    const data = yield call(api.getDataMovieFromApi);
    if(data){
      yield put(getDataMovieSuccess(data));
    } else {
      yield put(getDataMovieFail('can not get data'));
    }
  } catch (e) {
    console.log(e)
  }
}

// tao mot ham de theo doi hanh dong cua saga
export function* watchingGetDataSaga(){
  yield takeEvery(GET_DATA_MOVIE, getDataMovieSaga);
}