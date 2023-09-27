import React from "react";
import { connect } from "react-redux";

const App = (props) => {
  const handleAgeUp = () => {
    props.onAgeUp();
  };

  const handleAgeDown = () => {
    props.onAgeDown();
  };

  return (
    <div>
      <h2>Age: {props.age}</h2>
      <button onClick={handleAgeUp}>Age Up</button>
      <button onClick={handleAgeDown}>Age Down</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  age: state.age
});

const mapDispatchToProps = (dispatch) => ({
  onAgeUp: () => dispatch({ type: "AGE_UP" }),
  onAgeDown: () => dispatch({ type: "AGE_DOWN" })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);