import { useState } from 'react'
import Card from './components/card'
import './App.css'
import Btn from './components/btn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Tailwind Test</h1>
      <Card/>
      <Btn name="Iqbal"/>
    </>
  )
}

export default App
