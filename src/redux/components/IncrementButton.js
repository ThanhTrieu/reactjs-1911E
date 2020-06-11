import React from 'react';

const IncrementButton = (props) => {
  return (
    <>
      <button onClick={() => props.click() }>{props.children}</button>
    </>
  )
}
export default React.memo(IncrementButton);