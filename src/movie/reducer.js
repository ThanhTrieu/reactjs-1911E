import {combineReducers} from 'redux';
import popularMovieReducer from './page/popular/reducer';
import searchReducer from './page/seacrh/reducer';

const rootReducer = combineReducers({
  popularMovie: popularMovieReducer,
  searchMovie: searchReducer
});

export default rootReducer;