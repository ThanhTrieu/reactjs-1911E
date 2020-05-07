import React from 'react';
import InputNumber from '../components/example/InputNumber';
import ButtonNumber from '../components/example/ButtonNumber';
import ResultNumber from '../components/example/ResultNumber';
import PropTypes from 'prop-types';

export default class SumNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n1: null,
      n2: null,
      result: ""
    }
  }

  getNumberInput = (event) => {
    let nameInput = event.target.name;
    if(nameInput === 'number1'){
      let valN1 = event.target.value;
      this.setState({
        ...this.state,
        n1: valN1
      })
    } else if(nameInput === 'number2') {
      let valN2 = event.target.value;
      this.setState({
        ...this.state,
        n2: valN2
      })
    }
  }

  totalNumber = () => {
    let number1 = parseFloat(this.state.n1);
    let number2 = parseFloat(this.state.n2);
    let sum = number1 + number2;
    this.setState({
      ...this.state,
      result: sum
    })
  }

  render() {

    return(
      <>
        <InputNumber
          type="text"
          name="number1"
          change={this.getNumberInput}
        />
        <InputNumber
          type="text"
          name="number2"
          change={this.getNumberInput}
        />
        <ButtonNumber
          click={this.totalNumber}
        > Tong hai so </ButtonNumber>
        <ResultNumber
          result={this.state.result}
        />
      </>
    )
  }
}

SumNumber.defaultProps = {
  type: "number",
  name: "number",
  result: 0
}

SumNumber.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  change: PropTypes.func,
  click: PropTypes.func,
  result: PropTypes.number
}