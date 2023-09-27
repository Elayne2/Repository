import React, { useState } from "react";
import { connect } from "react-redux";
import { actions } from "../actions/transactionActions";

const TransactionForm = ({ accountNumber, FSCname, amount, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Account Number:
        <input type="text" name="accountNumber" value={accountNumber} onChange={handleInputChange} />
      </label>
      <label>
        FSC Name:
        <input type="text" name="FSCname" value={FSCname} onChange={handleInputChange} />
      </label>
      <label>
        Amount:
        <input type="text" name="amount" value={amount} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  accountNumber: state.list[state.currentIndex]?.accountNumber || "",
  FSCname: state.list[state.currentIndex]?.FSCname || "",
  amount: state.list[state.currentIndex]?.amount || "",
});

const mapDispatchToProps = {
  handleInputChange: (event) => actions.handleInputChange(event),
  handleSubmit: (event) => actions.handleSubmit(event),
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);