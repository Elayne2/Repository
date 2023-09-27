

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ageReducer from "./reducers";
import App from "./App";

const logAction = (store) => (next) => (action) => {
  console.log("Action:", JSON.stringify(action));
  return next(action);
};

const store = createStore(ageReducer, applyMiddleware(logAction));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);