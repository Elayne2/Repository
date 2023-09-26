/*
EXERCICE1

import React from 'react';

function Car({ carInfo }) {
  return <h1>This car is {carInfo.model}</h1>;
}

export default Car;


    PART2

import React, { useState } from 'react';

function Car({ carInfo }) {
  const [color, setColor] = useState('red');

  return <h1>This car is {color} {carInfo.model}</h1>;
}

export default Car;


    PART3

    
import React, { useState } from 'react';
import Garage from './Garage';

function Car({ carInfo }) {
  const [color, setColor] = useState('red');

  return (
    <div>
      <h1>This car is {color} {carInfo.model}</h1>
      <Garage size="small" />
    </div>
  );
}

export default Car;

*/