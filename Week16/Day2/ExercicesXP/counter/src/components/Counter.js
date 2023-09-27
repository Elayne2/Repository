import React from "react";
import { connect } from "react-redux";
import { INCREASE_COUNT, DECREASE_COUNT } from "../actions";

const Counter = (props) => {
  const handleIncrease = () => {
    props.dispatch({ type: INCREASE_COUNT });
  };

  const handleDecrease = () => {
    props.dispatch({ type: DECREASE_COUNT });
  };

  return (
    <div>
      <h2>Count: {props.count}</h2>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count
});

export default connect(mapStateToProps)(Counter);