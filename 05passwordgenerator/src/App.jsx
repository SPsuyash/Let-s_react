import { useEffect } from 'react';
import { useState,useCallback,useRef } from 'react'

function App() {
  const [length , setlength]=useState(8)
  const [numberAllowed,setnumberAllowed]=useState(false);
  const [charAllowed,setcharAllowed]=useState(false);
  const[password ,setpassword]=useState("")
//useRef hook
const passwordref=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*(){}~`"

    for (let i = 1; i < length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setpassword(pass)


  },[length,numberAllowed,charAllowed,setpassword])
//default passwordcopy
  const copyPasswordToClipboard = useCallback(()=>{
    passwordref.current?.select();
    // passwordref.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  //on page run
  useEffect(()=>{
    passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
     <div className='w-full max-w-23 mx-auto  rounded-lg px-4 my-14
      text-black-500 bg-yellow-50'>
        <h1 className='text-black text-center'>PASSWORD GENERATOR</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-9 my-4">
          <input type="text"
          value={password} 
          className='outline-none w-full py-1 px-6 '
          placeholder='password'
          readOnly
          ref={passwordref}
          />
          <button onClick={copyPasswordToClipboard} className=
          'outline-none bg-red-700 text-white px-3 py-0.5 shrink-0 hover:bg-sky-700 hover: px-2 py-1 '>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
            />
            <label>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setnumberAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={()=>{
              setcharAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
