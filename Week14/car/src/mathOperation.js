import React from 'react';

class MathOperation extends React.Component {

  constructor(props){
    super(props)
    const {numerator,denominator} = this.props;

  }
  divide = (numerator, denominator) => {
    if (denominator === 0) {
      throw new Error("Division by zero is not allowed");
    }
    
    return numerator / denominator;
  }

  render(){
    return(
      <button onClick={ () => {
       
        const result= this.divide(numerator,denominator);
  
      }}> 
        divide
        </button>
       )
  }

};


 
export default MathOperation;