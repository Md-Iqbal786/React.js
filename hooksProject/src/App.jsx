import { useState } from 'react'
import './App.css'
import { useCallback } from 'react'

function App() {
  const [length, setlength] = useState(4)
  const [number , setNumber] = useState(false)
  const [char , setChar] = useState(false)
  const [Password , setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let paswrd =""
    let strng = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) strng+="0123456789"
    if(char) strng+="!@#$%^&*()-_=+[]{};:,.<>?/|~"

    for (let i = 0; i <length; i++) {
      let char = Math.floor(Math.random()*strng.length + 1)
      paswrd+=char
    }
    setPassword(paswrd)

  },[length,number,char])


  return (
     <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg py-3 my-8 bg-gray-800 text-orange-400'>
            <h1 className='text-white text-center my-3'>Password generator</h1>
          
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input 
                value={Password}
                className="outline-none w-full py-1 px-3"
                placeholder="Password"
                readOnly
                type="text"
                 />
                 <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
            </div>
            
        </div>
     </>
  )
}

export default App
