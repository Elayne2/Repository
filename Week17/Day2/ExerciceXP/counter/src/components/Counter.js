import React from "react";
import { connect } from "react-redux";

const Counter = (props) => {
  const handleIncrement = () => {
    props.dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    props.dispatch({ type: "DECREMENT" });
  };

  const incrementIfOdd = () => {
    if (props.count % 2 !== 0) {
      props.dispatch({ type: "INCREMENT" });
    }
  };

  const incrementWithDelay = () => {
    setTimeout(() => {
      props.dispatch({ type: "INCREMENT" });
    }, 1000);
  };

  return (
    <div>
      <h2>Counter: {props.count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={incrementIfOdd}>Increment if Odd</button>
      <button onClick={incrementWithDelay}>Increment with Delay</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count
});

export default connect(mapStateToProps)(Counter);