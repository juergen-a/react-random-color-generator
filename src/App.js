// Import stylesheet
import './App.css';
// Import Libraries and modules
import randomColor from 'node-random-color';
import { useState } from 'react';

// Components
export default function App() {
  //  Set initial color within useState -> ensuring, initial function running only on first render
  const [color, setColor] = useState(() => randomColor().toLowerCase());

  // Set background color with global CSS variable to useState 'color' variable (hex-value)
  // On-click-function -> Alternative to arrow-function, usable especially when having to apply >1 operation !!
  function handleOnClick() {
    const newColor = randomColor();
    setColor(newColor.toLowerCase());
  }

  const style = { '--bgColor': color };

  console.log('Div:', style);
  console.log('State Var Color:', color);

  return (
    <div className="App">
      <div style={style} className="AppContainer">
        <button className="Btn" onClick={handleOnClick}>
          Generate
        </button>
        <div style={style} className="ColorName">
          Generated Color: {color}
        </div>
      </div>
    </div>
  );
}
