import React, {lazy, Suspense} from 'react';
import { Skeleton } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {helper} from './helper/userLogin';

const isLogined = helper.getInfoUserLogin();

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
              {isLogined ? <HomePage/> : <Redirect to="/login" />}
            </Route>
            <Route path="/home">
              <HomePage/>
              {isLogined ? <HomePage/> : <Redirect to="/login" />}
            </Route>
            <Route path="/product/:id">
              {isLogined ? <DetailPage/> : <Redirect to="/login" />}
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