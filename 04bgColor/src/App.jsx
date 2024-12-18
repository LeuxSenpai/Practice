import { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}></div>

      <div className='fixed inset-10 flex items-center justify-center'>
        <div className='bg-white p-4 rounded-lg shadow-lg border border-gray-300 flex flex-wrap justify-center gap-3'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 hover:bg-red-700 bg-red-500 text-white shadow-lg'>Red</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 text-white hover:bg-blue-700 bg-blue-500 shadow-lg'>Blue</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 text-white hover:bg-green-700 bg-green-500 shadow-lg'>Green</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 text-white hover:bg-yellow-700 bg-yellow-500 shadow-lg'>Yellow</button>
          <button onClick={() => setColor("black")} className='outline-none px-4 py-1 hover:bg-gray-700 bg-black text-white shadow-lg'>Black</button>
        </div>
      </div>
    </>
  );
}

export default App;
