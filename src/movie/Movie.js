import React, {lazy, Suspense} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import {Spinner} from 'react-bootstrap';
import { Spin } from 'antd';
import {Provider} from 'react-redux';
import configStore from './store';

const { persistor, store } = configStore();

const PopularMovie = lazy(() => import('./page/popular/index'));
const SearchMovie = lazy(() => import('./page/seacrh/index'));

const AppMovie = () => {
  return (
    <>
      <Router>
        <Provider store={store}>
          <PersistGate
            loading={<Spin size="large" />}
            persistor={persistor}
          >
            <Suspense
              fallback={<Spinner animation="border" />}
            >
              <Switch>
                <Route exact path="/">
                  <PopularMovie/>
                </Route>
                <Route path="/popular-movie">
                  <PopularMovie/>
                </Route>
                <Route path="/search-movie">
                  <SearchMovie/>
                </Route>
              </Switch>
            </Suspense>
          </PersistGate>
        </Provider>
      </Router>
    </>
  )
}
export default AppMovie;