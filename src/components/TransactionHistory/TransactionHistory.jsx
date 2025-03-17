import css from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={css.transactionsTable}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.tableData}>Type</th>
          <th className={css.tableData}>Amount</th>
          <th className={css.tableData}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.tableRow} key={id}>
              <td className={css.tableData}>{type}</td>
              <td className={css.tableData}>{amount}</td>
              <td className={css.tableData}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
