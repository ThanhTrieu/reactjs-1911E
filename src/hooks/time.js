import React, {useState, useEffect} from 'react';

const CountTimer = () => {
  const [time, setTime] = useState(1);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let count = setInterval(() => {
      setTime(time+1)
    }, 1000);

    return () => {
      // clean up
      console.log('AAA');
      clearInterval(count);
    }
  },[time])

  const removeTime = () => {
    setShow(false);
  }

  return(
    <>
      {show ? (<h1>{time}</h1>) : null }
      <button onClick={()=>removeTime()}>Xoa time</button>
    </>
  )
}
export default CountTimer;