import React, { useState, useCallback, useEffect } from 'react';

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += '0123456789';
    if (characterAllowed) str += "',./;][=-!#£$%^&*()";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  // Run passGen whenever length, numberAllowed, or characterAllowed changes
  useEffect(() => {
    passGen();
  }, [length, numberAllowed, characterAllowed, passGen]);

  

  return (
    <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 p-4'>
      <h1 className='text-xl font-bold mb-4'>PASSGENERATOR</h1>
      <div className='flex mb-4'>
        <input
          type='text'
          className='outline-none w-full py-2 px-3 mr-2'
          value={password}
          readOnly
          
        />
        <button
          className='bg-blue-600 text-white px-3 py-2'
          onClick={() => navigator.clipboard.writeText(password)}
        >
          Copy
        </button>
      </div>
      <div className='flex items-center mb-4'>
        <div className='flex items-center gap-x-2 mr-4'>
          <input
            type='checkbox'
            checked={numberAllowed}
            id='numberInput'
            onChange={() => setNumberAllowed(prev => !prev)}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input
            type='checkbox'
            checked={characterAllowed}
            id='characterInput'
            onChange={() => setCharacterAllowed(prev => !prev)}
          />
          <label htmlFor='characterInput'>Characters</label>
        </div>
        <div className='flex items-center gap-x-2 mx-4'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>
      </div>
    </div>
  );
};

export default App;
