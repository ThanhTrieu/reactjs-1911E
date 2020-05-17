import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    // khai bao states
    this.state = {
      count: 0
    }
  }

  decrementNumber = () => {
    // thay doi state giam xuong 1 don vi ( - 1)
    this.setState({
      ...this.state,
      count: this.state.count - 1
    })
  }

  incrementNumber = () => {
    // thay doi state tang len 1 don vi ( - 1)
    this.setState({
      ...this.state,
      count: this.state.count + 1
    })
  }

  render() {
    return(
      <>
        <button
          onClick={() => this.incrementNumber()}
        > + </button>
        <button
          onClick={() => this.decrementNumber()}
        > - </button>
        <h2>Ket Qua: {this.state.count}</h2>
      </>
    )
  }
}
export default Counter;