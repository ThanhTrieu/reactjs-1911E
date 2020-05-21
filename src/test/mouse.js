import React, { useState } from "react";
import Hook from "./hooks/mouseHook";

function MouseContainer() {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <Hook />}
    </div>
  );
}

export default MouseContainer;
