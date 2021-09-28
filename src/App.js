import logo from './logo.svg';
import React from "react";
import { TodoCounter } from "./TodoCounter"
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton"
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
/*import './App.css';*/
const todos = [
  {
    text: "Cortar Cebolla",
    completed: false
  },
  {
    text: "Tomar gaseosa",
    completed: false
  },
  {
    text: "Ver volver al futuro",
    completed: false
  }
]
function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
