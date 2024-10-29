import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  return (
    <>
      <p>Compteur : {count}</p>
      <button onClick={increment}>Incrementer</button>
    </>
  );
}

export default App;
