import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1 className="text-red-500 font-bold text-2xl">{count}</h1>
      <button
        className="border rounded p-2"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        increment
      </button>
    </main>
  );
}

export default App;
