/*import React from 'react';
import Car from './Components/Car';

const carInfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div className="App">
      <Car carInfo={carInfo} />
    </div>
  );
}

export default App;

--------------->Exercice2

import React from 'react';
import Events from './Events';

function App() {
  return (
    <div className="App">
      <Events />
    </div>
  );
}

export default App;

--------------->Exercice3

import React from 'react';
import Phone from './Phone';

function App() {
  return (
    <div className="App">
      <Phone />
    </div>
  );
}

export default App;


--------------->Exercice4

// App.js
import React from 'react';
import Color from './Color';

function App() {
  return (
    <div className="App">
      <Color />
    </div>
  );
}

export default App;

--------------->Daily


import React, { useState } from 'react';

const App = () => {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const handleVote = (language) => {
    setLanguages((prevLanguages) =>
      prevLanguages.map((lang) =>
        lang.name === language ? { ...lang, votes: lang.votes + 1 } : lang
      )
    );
  };

  return (
    <div className="App">
      {languages.map((language) => (
        <div key={language.name}>
          <button onClick={() => handleVote(language.name)}>Vote</button>
          <span>{language.name}: {language.votes}</span>
        </div>
      ))}
    </div>
  );
};

export default App;


*/