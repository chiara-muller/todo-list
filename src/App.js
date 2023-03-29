import './App.css';
import { useState } from 'react';

function App() {
  //  create a state
  const [todos, setTodos] = useState([
    {id: 1, name: "ranger"},
    {id: 2, name: "boire 1L d'eau"}
  ]);

  // create another part of the state to handle the submit
  const [newTodo, setNewTodo] = useState("")

  // create components
  const handleDelete = (id) => {
    // create a copy of the state
    const todosCopy = [...todos]

    // manipulate that copy
    const todosCopyUpdated = todosCopy.filter(todo => todo.id !== id)

    // modify the state with the setter
    setTodos(todosCopyUpdated);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // add the new todo to the list
    // copy state
    const todosCopy = [...todos]

    // manipulate the copy
    const id = new Date().getTime()
    const name = newTodo
    todosCopy.push({id: id, name: name}) // as the id and the name have the same "name" we could have just said {id, name}

    // modify the state
    setTodos(todosCopy);
    setNewTodo("")
  }

  const handleChange = (event) => {
    setNewTodo(event.target.value)
  }

  // render
  return (
    <div>
      <h1>My todos</h1>
      <ul>
        {todos.map((todo) => {
          return (
          <div>
          <li key={todo.id}>{todo.name}</li>
          <button onClick={() => handleDelete(todo.id)}>x</button>
          </div>
        )
        })}
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={newTodo}
          type="text"
          placeholder="Add a todo"
          onChange={handleChange} />
        <button >Submit</button>
      </form>
    </div>
  );
}

export default App;
