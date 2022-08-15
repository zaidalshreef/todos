import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  function  addTask(event) {
    event.preventDefault();
    if(task !== "") {
    setTodos((todos) => {
      setTask("");
    return [...todos, task]
  });
}
  }

  function deleteTask(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <header className="App-header">best todo app ever</header>
      <form >
      <input
        type="text"
        placeholder="Enter your task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button type="submit" onClick={addTask}>
        Submit
      </button>
      </form>
      
      <ul>
        {todos.map((todo,index) => (
          <li onClick={() => deleteTask(index)}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
