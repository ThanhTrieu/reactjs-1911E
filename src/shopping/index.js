import React, {lazy, Suspense} from 'react';
import { Skeleton } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const HomePage = lazy(() => import('./components/home/Home'));
const DetailPage = lazy(() => import('./components/product/Detail'));
const LoginPage = lazy(() => import('./components/login/Login'));

const Shopping = () => {
  return (
    <>
      <Router>
        <Suspense
          fallback={<Skeleton active />}
        >
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="/home">
              <HomePage/>
            </Route>
            <Route path="/product/:id">
              <DetailPage/>
            </Route>
            <Route path="/login">
              <LoginPage/>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}
export default Shopping;