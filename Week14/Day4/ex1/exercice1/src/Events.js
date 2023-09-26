/*-----------Part1
import React from 'react';

const Events = () => {
  const clickMe = () => {
    alert('I was clicked');
  };

  return (
    <div>
      <button onClick={clickMe}>Click Me</button>
    </div>
  );
};

export default Events;

----------Part2


import React from 'react';

const Events = () => {
  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert('Enter key pressed with value: ' + event.target.value);
    }
  };

  return (
    <div>
      <button onClick={clickMe}>Click Me</button>
      <br />
      <input type="text" onKeyDown={handleKeyDown} />
    </div>
  );
};

export default Events;

----------Part3

import React, { useState } from 'react';

const Events = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert('Enter key pressed with value: ' + event.target.value);
    }
  };

  const toggleState = () => {
    setIsToggleOn((prevToggle) => !prevToggle);
  };

  return (
    <div>
      <button onClick={clickMe}>Click Me</button>
      <br />
      <input type="text" onKeyDown={handleKeyDown} />
      <br />
      <button onClick={toggleState}>{isToggleOn ? 'ON' : 'OFF'}</button>
    </div>
  );
};

export default Events;
*/