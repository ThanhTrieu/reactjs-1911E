import React, {lazy, Suspense} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Spinner} from 'react-bootstrap';
import {Provider} from 'react-redux';
import configStore from './store';

const { store } = configStore();

const PopularMovie = lazy(() => import('./page/popular/index'));
const SearchMovie = lazy(() => import('./page/seacrh/index'));

const AppMovie = () => {
  return (
    <>
      <Router>
        <Provider store={store}>
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
        </Provider>
      </Router>
    </>
  )
}
export default AppMovie;