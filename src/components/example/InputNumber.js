import React from 'react';

const InputNumber = (props) => {
  return(
    <React.Fragment>
      <input
        type={props.type}
        name={props.name}
        onChange={props.change}
      />
    </React.Fragment>
  )
}
export default React.memo(InputNumber)