import React from 'react';
import DecrementButton from './DecrementButton';
import IncrementButton from './IncrementButton';
import ResultCounter from './Result';

export default class AppCounter extends React.PureComponent {

  render() {
    return (
      <>
        <DecrementButton
          click={() => this.props.clickDecrement(this.props.count)}
        > - </DecrementButton>
        <IncrementButton
          click={() => this.props.clickIncrement(this.props.count)}
        > + </IncrementButton>
        <ResultCounter result={this.props.count}/>
      </>
    )
  }
}