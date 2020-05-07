import React from 'react';

const ResultNumber = (props) => (
  <>
    <h4>{props.result}</h4>
  </>
);

export default React.memo(ResultNumber);