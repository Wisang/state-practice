import React from "react";
import {useState} from "react";

function App() {

  const [currentTime, getTime] = useState("Start");

  function setTime() {
    getTime(new Date().toLocaleTimeString());
  }

  setInterval(setTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={setTime}>Get Time</button>
    </div>
  );
}

export default App;
