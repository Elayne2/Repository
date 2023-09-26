import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const h1Element = React.createElement('h1', null, "Je n'utilise pas JSX");


  return h1Element;
};
export default App;

ReactDOM.render(<App />, document.getElementById('root'));