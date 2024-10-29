function App() {
  let count = 0;

  const increment = () => {};

  return (
    <>
      <p>Compteur : {count}</p>
      <button onClick={increment}>Incrementer</button>
    </>
  );
}

export default App;
