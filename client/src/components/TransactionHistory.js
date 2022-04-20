import React from 'react';

const TransactionHistory = ({ transactions, handleDeleteTransaction }) => {
  return (
    <div className="list">
      {transactions.length === 0 && <div className="row">No transactions</div>}
      {transactions.map((item) => {
        return (
          <div className="row">
            <div className="row-info">
              {item.name}
              <span>{item.amt}</span>
            </div>
            <button
              className="del-button"
              onClick={() => handleDeleteTransaction(item.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionHistory;
