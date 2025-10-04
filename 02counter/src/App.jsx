import { useState } from 'react' //this is use for hook 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  
const [count , setCount] = useState(0);
const addValue = function addvalue() {
  if(count>=20) return;
  setCount(count + 1);
}

const removeValue = function addvalue() {
  if(count<=0) return;
  setCount(count - 1);
}


  return (
    <>
      
      <h1>Counter clock</h1>
      <h3>count : {count}</h3>
      <button onClick={addValue}>addValue</button>
      <button onClick={removeValue}>removeValue</button>

    </>
  )
}

export default App
