import React, {useState, useEffect} from 'react';

const CountTimer = () => {
  const [timeString, setTimeString] = useState(null);
  useEffect(() => {
    let count = setInterval(() => {
      const now = new Date();
      const hours = `0${now.getHours()}`.slice(-2);
      const minutes = `0${now.getMinutes()}`.slice(-2);
      const seconds = `0${now.getSeconds()}`.slice(-2);
      const newTimeString = `${hours} : ${minutes} : ${seconds}`;
      setTimeString(newTimeString);
    }, 1000);

    return () => {
      // clean up hooks
      clearInterval(count);
    }
  } , []);

  return(
    <>
      <h1>{timeString}</h1>
    </>
  )
}

const ShowTime = () => {
  const [display, setDisplay] = useState(true);
  return(
    <>
      {display && <CountTimer/>}
      <button onClick={() => setDisplay(!display)}>Toggle CountTimer</button>
    </>
  )
}

export default ShowTime;