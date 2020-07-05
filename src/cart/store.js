import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';
import rootSaga from './saga';
import history from './libs/history';

const configRootReducer = {
  key: 'rootApp',
  storage: storage,
  blacklist: ['router']
};

const rootPersistReducer = persistReducer(configRootReducer, rootReducer(history));

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// preloadedState : state mac dinh luu vao store
const configStore = (preloadedState = {}) => {
  const store = createStore(
    rootPersistReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware
      )
    )
  );
  // run saga
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return { persistor, store, history };
}
export default configStore;