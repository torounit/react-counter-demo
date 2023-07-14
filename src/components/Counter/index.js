export function Counter({ value, onClick }) {
  return (
    <>
      <div>Current Value</div>
      <strong>{value}</strong>
      <p>
        <button onClick={onClick}>Count up!!</button>
      </p>
    </>
  );
}
