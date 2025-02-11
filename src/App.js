// Import stylesheet
import './App.css';
// Import Libraries and modules
import randomColor from 'node-random-color';
import { useState } from 'react';

// Components
export default function App() {
  // const initialColor = randomColor();
  const [color, setColor] = useState('');
  // Set background color with global CSS variable to useState 'color' variable (hex-value)

  // On-click
  function handleOnClick() {
    const newColor = randomColor();
    document.documentElement.style.setProperty('--bgColor', newColor);
    setColor(newColor);
  }

  return (
    <div className="AppContainer">
      <button className="Btn" onClick={handleOnClick}>
        Generate
      </button>
      <div className="ColorName">Generated Color: {color}</div>
    </div>
  );
}
