import { useEffect, useState } from "react";

const App = () => {
  const [counter, setcounter] = useState(0);

  useEffect(() => {
    console.log("Cambió el counter");
  }, [counter]);

  return (
    <>
      <h1>UseEffect</h1>
      <button onClick={() => setcounter(counter + 1)}>
        Counter: {counter}
      </button>
    </>
  );
};

export default App;
