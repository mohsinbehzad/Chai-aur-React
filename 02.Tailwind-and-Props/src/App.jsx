import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <div className='flex flex-col justify-center'>
        <div className='max-w-xs w-full'>
          <h1 className='text-center bg-green-300 m-2 rounded-2xl p-2 border border-orange-700'> Tailwind & Props</h1>
          <Card username='Ronaldo' btnText='Visit me'></Card>
          <Card username='Segio Ramos'></Card>
        </div>
      </div>
    </>
  )
}

export default App
