import React, { useState } from "react";
import { TodoCounter } from "./TodoCounter"
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton"
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
/*import './App.css';*/

export function AppUI({loading, error, completedTodos, totalTodos,
    searchValue, setSearchValue,
    searchedTodos,
    deleteTodos,
    completeTodo }) {
    return (
        <>
            <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <CreateTodoButton />
            <TodoList>
                {error && <p>Hubo un error</p>}
                {loading && <p>Estamos cargando, no te deseperes</p>}
                {(!loading && !searchedTodos.lenght) && <p>Sin datos</p>}

                {searchedTodos.map(todo => (
                    <TodoItem onDelete={() => deleteTodos(todo.text)} onCompleted={() => completeTodo(todo.text)} key={todo.text} text={todo.text} completed={todo.completed} />
                ))}
            </TodoList>

        </>
    )
}
