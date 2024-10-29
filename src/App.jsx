import { useState } from "react";

function App() {

  const [firstName, setFirstName] = useState('John doe')

  return (
    <form>
      <input type="text" name="firstname" value={firstName} />
    </form>
  );
}

export default App;
