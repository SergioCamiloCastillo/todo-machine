import React,{useState} from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
const [searchValue, setSearchValue] = useState('');
const [openModal, setOpenModal] = useState(false);
const completedTodos = todos.filter(todo => !!todo.completed).length;
const totalTodos = todos.length;

let searchedTodos = [];
if (!searchValue.length >= 1) {
    searchedTodos = todos;
} else {
    searchedTodos = todos.filter(todo => {

        const todoText = todo.text.toLowerCase();//estamos convirtiendo cada todo y conviertiendolo en minuscula para compararlo
        const searchText = searchValue.toLowerCase();//convertir en minuscula lo que escribamos en el search
        return todoText.includes(searchText); // en cuales de todos los todos incluyen alguna letra de search text

    });
}

const completeTodo = (text) => { //cambiar tarea completada
    const todoIndex = todos.findIndex(todo => todo.text === text);//examinar todo por todo cual tiene el mismo texto, y nos vota la posicion donde esta
    const newTodos = [...todos];//en newtodos trae lo que haya en el estado todos
    newTodos[todoIndex].completed = true; // cambiar en la posicion index el campo completed a true
    saveTodos(newTodos); //asigna a el estado settodos los nuevos todos con completed = true

}
const deleteTodo = (text) => { //cambiar tarea completada
    const todoIndex = todos.findIndex(todo => todo.text === text);//examinar todo por todo cual tiene el mismo texto, y nos vota la posicion donde esta
    const newTodos = [...todos];//en newtodos trae una copia de lo que haya en el estado todos
    newTodos.splice(todoIndex, 1) // cambiar en la posicion index el campo completed a true
    saveTodos(newTodos); //asigna a el estado settodos los nuevos todos con completed = true

}
const addTodo = (text) => { 
    const newTodos = [...todos];
    newTodos.push({
      
        completed:false,
        text
    });
    saveTodos(newTodos);


}
    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            deleteTodo,
            completeTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}

        </TodoContext.Provider>
    )
}
export {TodoContext, TodoProvider}