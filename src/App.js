import React, { useState } from "react";
import "./App.css";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const App = () => {
  const [outputString, setOutputString] = useState("");

  const handleClick = (letter) => {
    let newOutput = outputString + letter;

    // Function to replace consecutive letters
    const replaceConsecutiveLetters = (str) => {
      return str.replace(/(\w)\1{2,}/g, (match) => "_".repeat(match.length));
    };

    newOutput = replaceConsecutiveLetters(newOutput);

    setOutputString(newOutput);
  };

  return (
    <div className="App">
      <div className="grid-container">
        {alphabet.map((letter) => (
          <div
            key={letter}
            className="tile"
            onClick={() => handleClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
      <div id="outputString">{outputString}</div>
    </div>
  );
};

export default App;
