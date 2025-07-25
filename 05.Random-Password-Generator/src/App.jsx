import { useCallback, useEffect, useState, useRef } from 'react'


function App() {
  const [passwordLength, setPasswordLength] = useState(8)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [generatedPassword, setGeneratedPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (includeNumbers) str += "0123456789"
    if (includeSymbols) str += "!@#$%^&*-_+=[]{}~`()"

    for (let i = 0; i < passwordLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setGeneratedPassword(pass)
  }, [passwordLength, includeNumbers, includeSymbols, setGeneratedPassword])

  useEffect(() => {
    passwordGenerator()
  }, [passwordLength, includeNumbers, includeSymbols])

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(generatedPassword)
    passwordRef.current?.select();     // visual representation
    passwordRef.current?.setSelectionRange(0, 50)   // 50 character range will be visibly shown to copy, but deep inside more than 50 will be copied 
  }, [generatedPassword])

  const passwordRef = useRef(null)

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-teal-300 text-violet-700'>
      <h1 className='text-violet-700 my-3 text-center font-semibold text-xl'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={generatedPassword}
          className='outline-none w-full py-1 px-3'
          placeholder='Generated Password'
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 hover:bg-violet-600'>
          copy</button>
      </div>

      <div className='flex text-sm gap-x-4'>
        <div className='flex items-center gap-x-2'>
          <input
            type="range"
            min={8}
            max={100}
            value={passwordLength}
            className='cursor-pointer'
            onChange={(e) => { setPasswordLength(e.target.value) }}
          />
          <label>Length: {passwordLength}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={includeNumbers}
            id="numberInput"
            onChange={() => {
              setIncludeNumbers((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            id='symbolInput'
            defaultChecked={includeSymbols}
            onChange={() => {
              setIncludeSymbols((prev) => !prev)
            }}
          />
          <label htmlFor="symbolInput">Symbols</label>
        </div>
      </div>
    </div>
  )
}

export default App
