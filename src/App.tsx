import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount++)}>
        increment
      </button>
    </main>
  );
}

export default App;
