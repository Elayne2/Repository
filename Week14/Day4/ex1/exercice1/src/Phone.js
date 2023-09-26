/*
-----------PART1

import React, { useState } from 'react';

const Phone = () => {
  const [brand, setBrand] = useState("Samsung");
  const [model, setModel] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year, setYear] = useState(2020);

  return (
    <div>
      <h1>Brand: {brand}</h1>
      <h1>Model: {model}</h1>
      <h1>Color: {color}</h1>
      <h1>Year: {year}</h1>
    </div>
  );
};

export default Phone;

-----------PART2


import React, { useState } from 'react';

const Phone = () => {
  const [brand, setBrand] = useState("Samsung");
  const [model, setModel] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year, setYear] = useState(2020);

  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <h1>Brand: {brand}</h1>
      <h1>Model: {model}</h1>
      <h1>Color: {color}</h1>
      <h1>Year: {year}</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Phone;
*/