import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)

  function increaseValue() {
    if (counter >= 0 && counter < 50) {
      setCounter(counter + 1);
    }
  }

  const decreaseValue = () => {
    if (counter > 0 && counter <= 50) {
      counter = counter - 1;
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>Counter</h1>
      <h3>Value: {counter}</h3>
      <button onClick={increaseValue}>increase value: {counter}</button>
      <br />
      <button onClick={decreaseValue}>decrease value: {counter}</button>
      <footer>footer: {counter}</footer>
    </>
  )
}

export default App
