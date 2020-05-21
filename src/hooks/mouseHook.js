import React, {useState, useEffect} from 'react';

const MouseHook = () => {
  const [mouseX, setMouseX] = useState(null);
  const [mouseY, setMouseY] = useState(null);

  // lay toa do
  const layToaDoChuot = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  }

  useEffect(() => {
    // gan su kien
    window.addEventListener('mousemove', layToaDoChuot);
    // clean up 
    return () => {
      window.removeEventListener('mousemove', layToaDoChuot);
    }
  }, [])

  return(
    <>
      <h1>Toa Do X : {mouseX} - Toa do Y : {mouseY}</h1>
    </>
  )
}
export default MouseHook;