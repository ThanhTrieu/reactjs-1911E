import React, {useState} from 'react';

const Counter = () => {
  // dinh nghia state
  const [count, setCount] = useState(0);
  // count : la mot state
  // setCount : 1 function de cap nhat lai state

  const decrementNumber = () => {
    setCount(count - 1);
    // this.setState
  }

  const incrementNumber = () => {
    setCount(count + 1);
  }

  return (
    <>
      <button
          onClick={() => incrementNumber()}
        > + </button>
        <button
         onClick={() => decrementNumber()}
        > - </button>
        <h2>Ket Qua: {count}</h2>
    </>
  )
}
export default Counter;