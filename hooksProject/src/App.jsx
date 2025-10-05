import { useState } from 'react'
import './App.css'
import { useCallback ,useEffect , useRef} from 'react'

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
      paswrd+=strng.charAt(char);
    }
    setPassword(paswrd)

  },[length,number,char])

  const reference = useRef(null)

  const copyToClipBorad = useCallback(()=>{
      reference.current?.select();
      reference.current?.setSelectionRange(0, 999);
      window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, char, passwordGenerator])



  return (
     <>
        <div className='max-w-md  mx-auto shadow-md rounded-lg py-3 my-8 bg-gray-800 text-orange-400'>
            <h1 className='text-white text-center my-3'>Password generator</h1>
          
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input 
                value={Password}
                className="outline-none w-full py-1 px-3"
                placeholder="Password"
                readOnly
                type="text"
                ref={reference}
                 />
                 <button className='outline-none bg-blue-700 hover:bg-blue-900 text-white px-3 py-0.5 shrink-0'
                 onClick={copyToClipBorad}
                 >copy</button>
            </div>

            <div className='flex text-sm items-center justify-center gap-x-5'>
              <div className='flex items-center gap-x-1'>
                <input
                    type="range"
                    min={4}
                    max={60}  
                    value={length} // iska mtlb hai ki deafault value usme length show krega
                    className='cursor-pointer'
                    onChange={(e)=>{
                      setlength(e.target.value);
                    }}                    
                />
                 <label>Length: {length}</label>
              </div>
              <div className="flex items-center gap-x-1">
                    <input
                       type="checkbox"
                       defaultChecked={number}
                       id='numberInput'
                       onChange={(e)=>{
                          setNumber((number)=>!number) //if number is false make it true,vice-versa
                       }}

                     />
                     <label htmlFor='numberInput'>Numbers</label>
              </div>

              <div className="flex items-center gap-x-1">
                    <input
                       type="checkbox"
                       defaultChecked={char}
                       id='charInput'
                       onChange={(e)=>{
                          setChar((char)=>!char) //if number is false make it true,vice-versa
                       }}

                     />
                     <label htmlFor='charInput'>Characters</label>
              </div>

            </div>
            
        </div>
     </>
  )
}

export default App
