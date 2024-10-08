import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 5;

  const addValue = () => {
    // counter = counter+1;
    // setCounter(counter);
    if (counter < 20) {
      // setCounter(counter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Increment Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrement Value {counter}</button>
      <p>Footer : {counter}</p>
    </>
  );
}

export default App;
