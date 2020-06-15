import React from 'react';
import NavbarPage from './Navbar';

const PageLayout = (props) => {
  return(
    <>
      <NavbarPage/>
      <div className="container-fluid">
        {props.children}
      </div>
    </>
  )
}
export default PageLayout;