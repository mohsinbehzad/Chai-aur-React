import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Uses functional updates to ensure React uses the latest state value.
  // Even though we call setCount 4 times, React batches the updates, and the count increases by 4.
  function addValue(count) {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  //  Uses the stale value of `count` directly.
  // React will batch all 4 calls, but since `count` doesn't change during the render,
  // it will subtract 1 only once, not 4 times.
  function subtractValue() {
    setCount(count - 1);
    setCount(count - 1);
    setCount(count - 1);
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter Interview Question</h1>
      <p>Counter value: {count}</p>
      <button onClick={addValue}>Add Value: {count}</button>
      <br />
      <button onClick={subtractValue}>Subtract Value: {count}</button>
      <footer>Footer: {count}</footer>
    </>
  )
}

export default App
 