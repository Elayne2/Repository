import React from "react";
import { connect } from "react-redux";
import { actions } from "../actions/transactionActions";

const TransactionList = ({ transactions, handleEdit, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Account Number</th>
          <th>FSC Name</th>
          <th>Amount</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.accountNumber}</td>
            <td>{transaction.FSCname}</td>
            <td>{transaction.amount}</td>
            <td>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </td>
            <td>
              <button onClick={() => handleDelete(transaction.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  transactions: state.list,
});

const mapDispatchToProps = {
  handleEdit: (index) => actions.handleEdit(index),
  handleDelete: (id) => actions.handleDelete(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);