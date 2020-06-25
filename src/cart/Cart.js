import React, {lazy, Suspense} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Spinner} from 'react-bootstrap';
import configStore from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const { persistor, store } = configStore();

const HomePage = lazy(() => import('./pages/home/index'));

const AppCart = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate
          loading={<Spinner animation="border" />}
          persistor={persistor}
        >
          <Router>
            <Suspense
              fallback={<Spinner animation="border" />}
            >
              <Switch>
                <Route exact path="/">
                  <HomePage/>
                </Route>
              </Switch>
            </Suspense>
          </Router>
        </PersistGate>
      </Provider>
    </>
  )
}
export default AppCart;