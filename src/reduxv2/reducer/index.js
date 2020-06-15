import {combineReducers} from 'redux';
import {checkNumberReducer as number} from './number';

const rootReducer = combineReducers({
  number
});
export default rootReducer;