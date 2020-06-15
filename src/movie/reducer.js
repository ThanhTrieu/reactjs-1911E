import {combineReducers} from 'redux';
import popularMovieReducer from './page/popular/reducer';

const rootReducer = combineReducers({
  popularMovie: popularMovieReducer
});

export default rootReducer;