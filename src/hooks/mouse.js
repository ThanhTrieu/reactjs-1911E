import React, {useState, useEffect} from 'react';
import MouseHook from './mouseHook';

const MouseApp = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle Toa do chuot</button>
      {show && <MouseHook/>}
    </>
  )
}
export default MouseApp;