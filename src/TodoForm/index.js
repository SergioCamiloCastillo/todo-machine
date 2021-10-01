import React, { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext'

export function TodoForm() {
    const [newTodoValue, setNewTodoValue] = useState('');
    const {
        addTodo,
        setOpenModal
    } = useContext(TodoContext);

    const onCancel = () => {
        //
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);

    }

    return (
        <form onSubmit={onAdd}>
            <label>...</label>
            <textarea value={newTodoValue} onChange={onChange} placeholder='Escribe la tarea' />
            <div>
                <button type='button' onClick={onCancel}>Cancelar</button>
                <button type='submit'>Añadir</button>
            </div>
        </form>
    )
}

