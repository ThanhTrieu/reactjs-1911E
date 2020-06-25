import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// noi luu tru state vao storage
import popularMovieReducer from './page/popular/reducer';
import searchReducer from './page/seacrh/reducer';

// luu state cho toan bo ung dung dung chung
const persistRootConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['loadingSearch', 'errorSearch', 'loadingPopular', 'errorPopular']
}

const persistSearchMovieConfig = {
  key: 'searchMovie',
  storage: storage,
  whiteList: ['dataSearch']
}

const persistPopularMovieConfig = {
  key: 'popularMovie',
  storage: storage,
  whiteList: ['dataPopular']
}

const rootReducer = combineReducers({
  popularMovie: persistReducer(persistPopularMovieConfig, popularMovieReducer),
  searchMovie: persistReducer(persistSearchMovieConfig, searchReducer)
});

export default persistReducer(persistRootConfig, rootReducer);