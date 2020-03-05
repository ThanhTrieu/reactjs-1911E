import React from 'react';

// function component
const Header = (props) => {
  return(
    <>
      <h2>This is Header - {props.title} </h2>
    </>
  );
}
export default Header;