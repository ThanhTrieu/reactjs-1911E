import React from 'react';
import HeaderPage from './partials/HeaderPage';
import FooterPage from './partials/FooterPage';

const PageLayout = (props) => {
  return(
    <>
      <HeaderPage/>
      {props.children}
      <FooterPage/>
    </>
  )
}

export default PageLayout;