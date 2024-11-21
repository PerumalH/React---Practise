import React, { useState } from "react";

const Greeting = () => {
  const [change, setChange] = useState(false);
  return (
    <div>
      <h2>Hello World!</h2>
      {!change ? <p>Testing In react With Jesting</p> : <p>it's true</p>}
      <button onClick={() => setChange((prev) => !prev)}>
        Click the Button
      </button>
    </div>
  );
};

export default Greeting;
