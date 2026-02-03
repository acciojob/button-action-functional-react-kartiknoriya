import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [showPara, setShowPara] = useState(false);

  function handleToggle() {
    setShowPara((prev) => !prev);
  }

  return (
    <div id="main">
      <button id="click" onClick={handleToggle}>
        {showPara ? "Hide text" : "Show text"}
      </button>

      {showPara && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me
          so happy.
        </p>
      )}
    </div>
  );
}

export default App;

