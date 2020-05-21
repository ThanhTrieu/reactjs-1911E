import React, {lazy, Suspense} from 'react';
import { Skeleton } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const HomeComponent = lazy(() => import('./components/home/Home'));
const ContactComponent = lazy(() => import('./components/contact/Contact'));

const LoginForm = lazy(() => import('./components/login/Login'));

const ResumeApp = () => {
  return(
    <>
      <Router>
        <Suspense
          fallback={<Skeleton active />}
        >
          <Switch>
            <Route exact path="/">
              <HomeComponent/>
            </Route>
            <Route path="/home">
              <HomeComponent/>
            </Route>
            <Route path="/contact">
              <ContactComponent/>
            </Route>
            <Route path="/login">
              <LoginForm/>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}
export default ResumeApp;