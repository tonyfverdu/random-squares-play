import { useState } from 'react'
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
  const [color, setColor] = useState(colorsCSS);
  const [arrayRandomColors, setArrayRandomColors] = useState([]);

  // let arrayRandomColors = chooseRandomElement(colorsCSS, 6);

  function handleClick() {
    const newArrayRandomColors = chooseRandomElement(colorsCSS, 6);
    setArrayRandomColors(prevArrayRandomColors => newArrayRandomColors);

    for(let i = 0; i < arraySquare.length; i++) {
      arraySquare[i].color = arrayRandomColors[i].color
      arraySquare[i].colorHEX = arrayRandomColors[i].colorHEX
      arraySquare[i].colorRGB = arrayRandomColors[i].colorRGB
    }

    // for (let i = 0; i < arraySquare.length; i++) {
    //   setColor(prevColor => {
    //     return arrayRandomColors.map(color => {
    //       if (color.id === randomColor) {
    //         arrayRandomColors = chooseRandomElement(arrayRandomColors, 1);
    //         color.color = arrayRandomColors[randomColor].color
    //         color.colorHEX = arrayRandomColors[randomColor].colorHEX
    //         color.colorRGB = arrayRandomColors[randomColor].colorRGB
    //       }
    //       return color
    //     })
    //   })
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
                color={randomColor(color)}
              />
            ))
          }
        </div>

          <div className="contSelectColor">
            <label htmlFor="selectColor" className="labelSelect">Selecciona un color de la lista</label>
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




