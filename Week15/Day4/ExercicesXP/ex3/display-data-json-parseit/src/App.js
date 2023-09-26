import React from 'react';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

class App extends React.Component {
  render() {
    return (
      <div>
        <Example1 />
        <Example2 />
        <Example3 />
      </div>
    );
  }
}

export default App;