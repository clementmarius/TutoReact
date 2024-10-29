import { useState } from "react";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(new FormData(e.target));
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstname"
      />
      <button>Envoyer</button>
    </form>
  );
}

export default App;
