import React from 'react';
import {connect} from 'react-redux';
import {incrementNumber} from '../action/index';

const IncrementButton = (props) => {
  return (
    <>
      <button onClick={() => props.clickIncrement(props.count)}>{props.children}</button>
    </>
  )
}

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => ({
  clickIncrement: (val) => dispatch(incrementNumber(val))
})

export default connect(mapStateToProps,mapDispatchToProps)(IncrementButton);