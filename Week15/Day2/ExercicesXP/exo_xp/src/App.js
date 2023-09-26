import React, { useState } from 'react'
import './App.css';
import ErrorBoundary from './ErrorBoundary'
import {Color, Child} from './Color'


class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }), () => {
      if (this.state.counter === 5) {
        throw new Error('I crashed!');
      }
    });
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>
          {this.state.counter}
        </h1>
      </div>
    );
  }
}


function App() {
  
  const [showVal, setShowVal] = useState()

  const getshowVal = (showVal)=>{
    setShowVal(showVal)
  }

  const changeShowState = () =>{
    setShowVal(false)
    console.log(showVal)
  }
  

  return (
    <div className="">
      <p style={{ fontWeight: 'bold' }}>Click on the numbers to increase the counters.<br/>
      The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</p>
      <div className='section_1'>
        <hr/>
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <ErrorBoundary>
          <BuggyCounter/>
          <BuggyCounter/>
        </ErrorBoundary> 
      </div>

      <div className='section_2'>
        <hr/>
        <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
        <ErrorBoundary>
          <BuggyCounter/>
        </ErrorBoundary> 
        
        <ErrorBoundary>
          <BuggyCounter/>
        </ErrorBoundary> 
      </div>
      
      <div className='section_3'>
        <hr/>
        <p>This counter is not inside of boundary. So if crashes, all other components are deleted.</p>
        <BuggyCounter/>
      </div>

      <Color showVal = {showVal} getshowVal = {getshowVal} />
      {showVal === true ? <Child/> : ''}
      <button onClick={changeShowState}> Delete Header</button>
    </div>
  );
}

export default App;
