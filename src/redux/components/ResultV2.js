import React from 'react';
import {connect} from 'react-redux';

const ResultCounter = (props) => {
  return (
    <>
      <h2>{props.count}</h2>
    </>
  )
}

const mapStateToProps = state => ({
  count: state.counter.count
})

export default connect(mapStateToProps,null)(ResultCounter);