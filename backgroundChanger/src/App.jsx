import { useState } from 'react'


import './App.css'

function App() {
  const [color, setColor] = useState("")

  return (
    
       <div className="min-h-screen flex flex-col items-center  bg-gray-100"
       style={{backgroundColor: color}}>
        
          <h1 id="header" className="text-4xl font-bold mb-6 text-blue-600">
              BG-Changer
          </h1>   

          <div className="container">
            <div className="px-10 flex flex-row justify-center py-3 ">
              <button 
              onClick={() => setColor("red")}
              className="px-7 py-2 mx-4 bg-red-500 text-xl text-white rounded-3xl hover:bg-red-700 transition">
                Red
              </button>
              <button 
              onClick={() => setColor("green")}
              className="px-7 py-2 mx-4 bg-green-500 text-xl text-white rounded-3xl hover:bg-green-700 transition">
                Green
              </button>
              <button 
              onClick={() => setColor("blue")}
              className="px-7 py-2 mx-4 bg-blue-500 text-xl text-white rounded-3xl hover:bg-blue-700 transition">
                Blue
              </button>
              <button 
              onClick={() => setColor("olive")}
              className="px-7 py-2 mx-4 bg-olive-500 text-xl text-white rounded-3xl hover:bg-olive-700 transition">
                Olive
              </button>
              <button 
              onClick={() => setColor("pink")}
              className="px-7 py-2 mx-4 bg-pink-500 text-xl text-white rounded-3xl hover:bg-pink-700 transition">
                Pink
              </button><button 
              onClick={() => setColor("black")}
              className="px-7 py-2 mx-4 bg-black-500 text-xl text-white rounded-3xl hover:bg-black-700 transition">
                Black
              </button>
              <button 
              onClick={() => setColor("yellow")}
              className="px-7 py-2 mx-4 bg-yellow-500 text-xl text-white rounded-3xl hover:bg-yellow-700 transition">
                Yellow
              </button>
            </div>
          </div>
      </div>
    
  )
}

export default App
