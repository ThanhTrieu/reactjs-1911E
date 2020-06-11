import React from 'react';
import DecrementButton from './DecrementButtonV2';
import IncrementButton from './IncrementButtonV2';
import ResultCounter from './ResultV2';

export default class AppCounter extends React.PureComponent {

  render() {
    return (
      <>
        <DecrementButton> - </DecrementButton>
        <IncrementButton> + </IncrementButton>
        <ResultCounter/>
      </>
    )
  }
}
