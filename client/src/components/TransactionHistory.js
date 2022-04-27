import Transaction from './Transaction';

const TransactionHistory = ({
  transactions,
  handleDeleteTransaction,
  handleedit,
  month,
}) => {
  return (
    <div className="transactTable">
      {transactions.length === 0 && <div>No transactions</div>}
      <table>
        {transactions.length !== 0 && (
          <thead>
            <tr>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {transactions
            .filter((transact) => {
              return (
                transact.date.month === month.month &&
                transact.date.year === month.year
              );
            })
            .map((item, key) => {
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
