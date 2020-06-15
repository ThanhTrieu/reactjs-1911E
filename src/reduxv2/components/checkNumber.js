import React, {useState} from 'react';
import {connect} from 'react-redux'
import {checkingNumber} from '../action/index';

const CheckNumber = (props)=> {
  const [number, setNumber] = useState(null);
  const changeInputNumber = (event) => {
    const val = event.target.value;
    setNumber(val);
  }
  console.log(props.check)
  return(
    <>
      <input type="text" onChange={changeInputNumber} />
      <button onClick={() => props.clickCheck(number)}>Check</button>
    </>
  )
}

const mapStateToProps = state => ({
  check: state.number.checking
});

const mapDispatchToProps = dispatch => ({
  clickCheck: (n) => dispatch(checkingNumber(n))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckNumber);
