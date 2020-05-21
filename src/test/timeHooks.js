import React,{useEffect, useState, useRef} from 'react';

const Clock = () => {
  const [timeString, setTimeString] = useState(null);
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const now = new Date();
      const hours = `0${now.getHours()}`.slice(-2);
      const minutes = `0${now.getMinutes()}`;
      const seconds = `0${now.getSeconds()}`;
      const currentTimeString = `${hours}:${minutes}:${seconds}`;
      setTimeString(currentTimeString);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div style={{ fontSize: '48px' }}>{timeString}</div>
  ); 
}

const ViewTime = () => {
  const [display, hideClock] = useState(true);
  return (
    <>
      <h2>your clock</h2>
      { display && <Clock/>}
      <button onClick={() => hideClock(!display)}>toggle clock</button>
    </>
  );
}

export default ViewTime;