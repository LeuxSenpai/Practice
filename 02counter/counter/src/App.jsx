import { useState } from 'react'
import './App.css'

function App() {
 const [counter,setcounter] = useState(0);

const addCounter = () => {
  setcounter(counter+1)
  console.log('clicked',Math.random())
}
const removeCounter = () => {
  if (counter > 0) { 
  setcounter(counter - 1);
  console.log('clicked', Math.random());
} 

}

  return (
    <>
      <h1>Counter: {counter}</h1>
      <h2>nigga please</h2>
      <button onClick={addCounter}>add Counter</button>
      <button onClick={removeCounter}>remove Counter</button>
    </>
  )
  }

export default App
