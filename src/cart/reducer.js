import {combineReducers} from 'redux';
import { homeReducer } from './pages/home/reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistRootConfig = {
  key: 'CartRoot',
  storage: storage,
  blacklist:['loading, error']
}

const rootReducer = combineReducers({
  homeReducer,
});

export default persistReducer(persistRootConfig, rootReducer);