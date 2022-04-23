import Transaction from "./Transaction";

const TransactionHistory = ({ transactions, handleDeleteTransaction, handleedit}) => {
  return (
    <>
    <div className="transactTable">
      {transactions.length === 0 && <div className="row">No transactions</div>}
      <table>
      {transactions.length !== 0 && <thead><tr>
        <th>Description</th>
        <th>Amount</th>
        <th></th><th></th></tr></thead>}
      <tbody>
      {transactions.map((item, index) => (<Transaction key={index} 
        transact={item} handleDelete={handleDeleteTransaction} handleEdit={handleedit}/>))}
      </tbody>
      </table>
    </div>
    </>
  );
};

export default TransactionHistory;
