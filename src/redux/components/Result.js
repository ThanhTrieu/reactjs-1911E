import React from 'react';

const ResultCounter = (props) => {
  return (
    <>
      <h2>{props.result}</h2>
    </>
  )
}
export default React.memo(ResultCounter);