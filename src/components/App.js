import React, { Component, useState } from "react";
import "./../styles/App.css";




function App() {
  const [showpara, setShowpara] = useState(true);
  const [btntoggle , setBtntoggle] = useState(false);


  function handleToggle(){
    setBtntoggle ((prev) => !prev)   
    setShowpara ((prev) => !prev) 
  }

  return (
    <div id="main">
      <button id="click" onClick={handleToggle}>
        {btntoggle ? 'Hide text' : 'show text'}
      </button>
      <p>{showpara ? ' ' : `Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.`}</p>
      {showpara}
    </div>
  );
}

export default App;
