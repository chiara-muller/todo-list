import './App.css';
import { useState } from 'react';

function App() {
  //  create a state
  const [todos, setTodos] = useState([
    // {id: 1, name: "ranger"},
    // {id: 2, name: "boire 1L d'eau"}
  ]);

  // create another part of the state to handle the submit
  const [newTodo, setNewTodo] = useState("")

  const [completedTodo, setCompletedTodo] = useState(false)

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

  const handleCompletedChange = (event) => {
    setCompletedTodo(event.target.checked)
  }

  // render
  return (
    <body>
      <div class="container">
        <h1 class="title">My Todos</h1>
        <form
          class="todo-form"
          action="submit"
          onSubmit={handleSubmit}>
          <input
            value={newTodo}
            type="text"
            placeholder="New todo"
            onChange={handleChange}
          />
          <button class="submit-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </form>
        <ul class="todo-list">
          {todos.map((todo) => {
            return (
            <div class="todo-list-item">
            <li class="item-name" key={todo.id}>{todo.name}</li>
            <div class="item-button">
              <input
                class="check-button"
                type="checkbox"
                checked={completedTodo}
                onChange={handleCompletedChange}
              />
              <button
                class="delete-button"
                onClick={() => handleDelete(todo.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
            </div>
          )
          })}
        </ul>
      </div>
    </body>
  );
}

export default App;
