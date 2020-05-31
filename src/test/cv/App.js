import React, {lazy, Suspense} from 'react';
import { Skeleton } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const AboutPage = lazy(() => import('./components/about/AboutPage'));
const Resume = lazy(() => import('./components/resume/Resume'));
const Jobs = lazy(() => import('./components/jobs/Jobs'));
const Contact = lazy(() => import('./components/contact/Contact'));

const AppResumePage = () => {
  return (
    <>
      <Router>
        <Suspense
          fallback={<Skeleton active/>}
        >
          <Switch>
            <Route exact path="/">
              <AboutPage/>
            </Route>
            <Route path="/resume">
              <Resume/>
            </Route>
            <Route path="/works">
              <Jobs/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default AppResumePage;