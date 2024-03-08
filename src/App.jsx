import { useState, useEffect } from 'react'
import Header from './componets/Header.jsx';
import Image from './componets/Image.jsx';
import Square from './componets/Square.jsx';
import Button from './componets/Button.jsx';

import { randomColor, chooseRandomElement } from './utils/functions.js'
import { arraySquare } from './utils/constants.js'
import reactLogo from './assets/react.svg'
import colorsCSS from './assets/data/colorsNameJSON.js';
import './App.css';

function App() {
  const [arrayRandomColors, setArrayRandomColors] = useState(chooseRandomElement(colorsCSS, 6));

  // useEffect(() => {
  //   for (let i = 0; i < arraySquare.length; i++) {
  //     arraySquare[i].color = arrayRandomColors[i].color
  //     arraySquare[i].colorHEX = arrayRandomColors[i].colorHEX
  //     arraySquare[i].colorRGB = arrayRandomColors[i].colorRGB
  //   }
  // }, [arrayRandomColors]);

  function handleClick() {
    for (let i = 0; i < arraySquare.length; i++) {
      arraySquare[i].color = arrayRandomColors[i].color
      arraySquare[i].colorHEX = arrayRandomColors[i].colorHEX
      arraySquare[i].colorRGB = arrayRandomColors[i].colorRGB
    }

    setArrayRandomColors(chooseRandomElement(colorsCSS, 6));
  }

  return (
    <div className="contCentral">

      <div className="contHeader">
        <Header
          title="Random Color Squares Play"
          subtitle="Created by: José Antonio Fernández Verdú"
        />
        <Image
          img={reactLogo}
          alt="React Logo"
          width="50px"
          height="50px"
          color="white"
        />
      </div>

      <div className="contBody">
        <div className="contCards">
          {
            arraySquare.map(square => (
              <Square
                key={square.i}
                color={randomColor(arrayRandomColors)}
              />
            ))
          }
        </div>

        <div className="contSelectColor">
          <label htmlFor="selectColor" className="labelSelect">Selecciona un color</label>
          <select name="select" id="selectColor" className="selectColor">
            {
              arrayRandomColors.map(color => (
                <option
                  key={color.id}
                  value={color.id}
                >
                  {color.nameCSS}
                </option>
              ))
            }
          </select>
        </div>
        <p id="message"></p>

        <div className="groupButtons">
          <Button
            textButton="Random Colors"
            onClick={handleClick}
          />
        </div>
      </div>

    </div>
  )
}

export default App;

/*
 function handleClick() {
    const newArrayRandomColors = chooseRandomElement(colorsCSS, 6);
    console.log("newArrayRandomColors:", newArrayRandomColors)
    

    for(let i = 0; i < arraySquare.length; i++) {
      arraySquare[i].color = newArrayRandomColors[i].color
      arraySquare[i].colorHEX = newArrayRandomColors[i].colorHEX
      arraySquare[i].colorRGB = newArrayRandomColors[i].colorRGB

      setColor(prevColor => {
        return newArrayRandomColors.map(color => {
          if (color.id === randomColor) {
            // newArrayRandomColors = chooseRandomElement(arrayRandomColors, 1);
            color.color = newArrayRandomColors[randomColor].color
            color.colorHEX = newArrayRandomColors[randomColor].colorHEX
            color.colorRGB = newArrayRandomColors[randomColor].colorRGB
          }
          return color
        })
      })
    }
    setArrayRandomColors(newArrayRandomColors);
  }
*/




