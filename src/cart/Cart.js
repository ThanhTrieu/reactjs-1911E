import React, {lazy, Suspense} from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import {Spinner} from 'react-bootstrap';
import configStore from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router'

const { persistor, store, history } = configStore();

const HomePage = lazy(() => import('./pages/home/index'));
const CartPage = lazy(() => import('./pages/cart/index'));

const AppCart = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate
          loading={<Spinner animation="border" />}
          persistor={persistor}
        >
          <ConnectedRouter history={history}>
            <Suspense
              fallback={<Spinner animation="border" />}
            >
              <Switch>
                <Route exact path="/">
                  <HomePage/>
                </Route>
                <Route path="/cart">
                  <CartPage/>
                </Route>
              </Switch>
            </Suspense>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </>
  )
}
export default AppCart;