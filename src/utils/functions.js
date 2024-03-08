export const createArray = (parLength) => {
  const arr = [];
  for (let i = 0; i < parLength; i++) {
    arr.push({ i: i });
  }
  return arr;
};

export const randomColor = (parArrayColors) => {
  const indexColorRandomSquare = Math.floor(Math.random() * parArrayColors.length);

  return parArrayColors[indexColorRandomSquare]
}

export function chooseRandomElement(parArray, parLength) {
  const arrayResult = [];
  while (arrayResult.length < parLength) {
    let randomIndex = Math.floor(Math.random() * parArray.length);
    let randomElement = parArray[randomIndex];

    if (!arrayResult.includes(randomElement)) {
      arrayResult.push(randomElement);
    }
  }
  return arrayResult; // return the array result;
}