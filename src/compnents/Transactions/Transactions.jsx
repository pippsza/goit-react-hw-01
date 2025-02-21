import css from "./Transactions.module.css";
export default function Transactions({ items: { type, amount, currency } }) {
  return (
    <>
      <td className={css.tableRow}>{type}</td>
      <td className={css.tableRow}>{amount}</td>
      <td className={css.tableRow}>{currency}</td>
    </>
  );
}
