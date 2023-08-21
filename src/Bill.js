export default function ({ bill, billHandle }) {
  return (
    <div>
      <p>How much was the bill?: </p>
      <input type="number" value={bill} onChange={billHandle} />
    </div>
  );
}
