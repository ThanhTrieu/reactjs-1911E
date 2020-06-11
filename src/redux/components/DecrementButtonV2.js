import React from 'react';

const DecrementButton = (props) => {
  return (
    <>
      <button onClick={() => props.click() }>{props.children}</button>
    </>
  )
}
export default React.memo(DecrementButton);