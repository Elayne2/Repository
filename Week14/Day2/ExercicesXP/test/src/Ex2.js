import React from 'react';
import ReactDOM from 'react-dom';
const sum = 5 + 5;
const HelloWorld = () => {
    return (
        <div>
            <h1>ex2</h1>
            <h2> Hello World!</h2>
            <h3>React is {sum} times better with JSX</h3>
        </div>
      );
  };
  
  
  ReactDOM.render(<HelloWorld />, document.getElementById('root'));
  

  export default HelloWorld;
  