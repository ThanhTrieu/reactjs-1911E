import {combineReducers} from 'redux';
import { homeReducer } from './pages/home/reducer';
import cartReducer from './pages/cart/reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistRootConfig = {
  key: 'CartRoot',
  storage: storage,
  blacklist:['loading', 'error']
}
const persistCartConfig = {
  key: 'CartItems',
  storage: storage,
  whiteList: ['itemAdded', 'totalPrice']
}

const rootReducer = combineReducers({
  homeReducer,
  cartReducer: persistReducer(persistCartConfig, cartReducer)
});

export default persistReducer(persistRootConfig, rootReducer);