import { useState } from "react"


function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >

      <div className="fixed flex flex-wrap w-fit justify-center gap-3 mx-auto inset-x-0 bottom-12 px-3 py-2 shadow-lg bg-white rounded-3xl">
        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}
        >Red</button>
        <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "yellow" }}
        >Yellow</button>
        <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "green" }}
        >Green</button>
        <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "pink" }}
        >Pink</button>
        <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "blue" }}
        >Blue</button>
        <button
          onClick={() => setColor("aqua")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "aqua" }}
        >Aqua</button>
      </div>
    </div>
  )
}

export default App