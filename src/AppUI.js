import React, { useState, useContext } from "react";
import { TodoCounter } from "./TodoCounter"
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton"
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoContext } from "./TodoContext";
import { TodoForm } from "./TodoForm";
import Modal from "./Modal";
/*import './App.css';*/
function AppUI() {
    const { error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo, openModal, setOpenModal } = useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {
                !!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>

                )
            }

            <CreateTodoButton setOpenModal={setOpenModal} />
        </React.Fragment>
    );
}

export { AppUI };