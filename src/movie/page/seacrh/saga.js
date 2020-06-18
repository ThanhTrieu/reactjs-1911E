// su dung cac side effect cua saga
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  SEARCH_NAME_MOVIE,
  loadingSearchMovie,
  searchMovieSuccess,
  searchMovieFail
} from './action';
import { api } from '../../service/movie';

function* searchMovieSaga({language, nameMovie}) {
  try {
    yield put(loadingSearchMovie(true));
    const movie = yield call(api.searchNameMovieFromApi,language,nameMovie);
    if(movie){
      yield put(searchMovieSuccess(movie));
    } else {
      yield put(searchMovieFail('not found data'));
    }
  } catch (e) {
    console.log(e);
  }
}
export default function* watchingSearchMovieSaga() {
  yield takeLatest(SEARCH_NAME_MOVIE, searchMovieSaga);
}