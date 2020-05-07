import React from 'react';
import './bt.css';

const ButtonNumber = (props) => {
  return (
    <>
      <button
        className="abc"
        onClick={() => props.click()}
      >{props.children}</button>
    </>
  )
}
export default React.memo(ButtonNumber);