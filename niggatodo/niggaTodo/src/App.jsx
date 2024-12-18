import { useRef } from 'react';
import './App.css';
import React, { useState } from 'react';

function App() {
  // State management
  const [userInput, setUserInput] = useState("");
  const [allTodos, setAllTodos] = useState([]);

  // Handle input changes
  const handleChange = (event) => {
    setUserInput(event.target.value);
  }

  // Add a new todo
  const addTodo = () => {
    if (userInput.trim() === "") return; // Prevent adding empty todos
    setAllTodos([...allTodos, userInput]);
    setUserInput(""); // Clear input after adding
  }

  // Update a todo
  const updateTodo = (index) => {
    const updatedTask = prompt("Update your task:", allTodos[index]);
    if (updatedTask !== null && updatedTask.trim() !== "") {
      const newTodos = allTodos.map((todo, i) => (i === index ? updatedTask : todo));
      setAllTodos(newTodos);
    }
  }

  // Delete a todo
  const deleteTodo = (index) => {
    const newTodos = allTodos.filter((_, i) => i !== index);
    setAllTodos(newTodos);
  }

  

  return (
    <div className='main'>
      <div className="user">
        <input
          type="text"
          className="" 
          id="textbox"
          value={userInput}
          placeholder='Enter Your Task'
          onChange={handleChange}
        />
        <button onClick={addTodo}>Add Task</button>
      </div>
      <div className="todos">
        <ul>
          {allTodos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => updateTodo(index)}>Update</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
