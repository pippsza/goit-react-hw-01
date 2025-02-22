import Transactions from "../Transactions/TransactionHistory";
import css from "./Transactions.module.css";

export default function transactionTable({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <Transactions items={item}></Transactions>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
