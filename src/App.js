// Import stylesheet
import './App.css';
// Import Libraries and modules
import randomColor from 'node-random-color';
import { useState } from 'react';

// Components
export default function App() {
  const initialColor = randomColor();
  const [color, setColor] = useState(initialColor);
  // Set background color with global CSS variable to useState 'color' variable (hex-value)
  document.documentElement.style.setProperty('--bgColor', color);

  return (
    <div className="App">
      <div className="AppContainer">
        <button
          className="Btn"
          onClick={() => {
            const newColor = randomColor();
            setColor(newColor);
          }}
        >
          Generate
        </button>
        <div className="ColorName">Generated color: {color}</div>
      </div>
    </div>
  );
}
