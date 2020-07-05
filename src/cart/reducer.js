import {combineReducers} from 'redux';
import { homeReducer } from './pages/home/reducer';
import cartReducer from './pages/cart/reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { connectRouter } from 'connected-react-router';
const persistCartConfig = {
  key: 'CartItems',
  storage: storage,
  whiteList: ['cartReducer']
}
const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  homeReducer,
  cartReducer: persistReducer(persistCartConfig, cartReducer)
});
export default rootReducer;