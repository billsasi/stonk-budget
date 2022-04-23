import Transaction from './Transaction';

const TransactionHistory = ({
  transactions,
  handleDeleteTransaction,
  handleedit,
}) => {
  console.log(transactions.length);

  return (
    <div className="transactTable">
      {transactions.length === 0 && <div>No transactions</div>}
      <table>
        {transactions.length !== 0 && (
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {transactions.map((item, key) => {
            return (
              <Transaction
                key={key}
                transact={item}
                handleDelete={handleDeleteTransaction}
                handleEdit={handleedit}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
