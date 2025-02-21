// export default function Transactions({ type, amount, currency }) {

export default function Transactions({ items: { type, amount, currency } }) {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}
