import React from 'react';
import DecrementButton from './DecrementButton';
import IncrementButton from './IncrementButton';
import ResultCounter from './Result';
import { counterReselect } from '../reselect/countReselect';
import { useSelector, useDispatch } from 'react-redux';
import { incrementNumber, decrementNumber } from '../action/index';
import { createStructuredSelector } from 'reselect';

const AppIndex = () => {

  const {count} = useSelector(createStructuredSelector({
    count: counterReselect
  }));

  const dispatch = useDispatch();

  const clickIncrement = (val) => {
    dispatch(incrementNumber(val));
  }

  return (
    <>
      <DecrementButton> - </DecrementButton>
      <IncrementButton
        click={() => clickIncrement(count)}
      > + </IncrementButton>
      <ResultCounter result={count}/>
    </>
  )
}

export default AppIndex;