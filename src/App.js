import { AppUI } from "./AppUI";
import react, { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          //no hay datos en localstorage
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          //Nuestro localstaorage tiene datos registrados antes
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (err) {
        setError(err);
      }

    }, 5000);

  })




  const saveItem = (newTodos) => {

    try {
      const stringifyTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringifyTodos);
      setItem(newTodos);
    } catch (err) {
      setItem(err);
    }
  }
  return {
    item, saveItem, loading, error
  }
}


function App() {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');
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
  const deleteTodos = (text) => { //cambiar tarea completada
    const todoIndex = todos.findIndex(todo => todo.text === text);//examinar todo por todo cual tiene el mismo texto, y nos vota la posicion donde esta
    const newTodos = [...todos];//en newtodos trae una copia de lo que haya en el estado todos
    newTodos.splice(todoIndex, 1) // cambiar en la posicion index el campo completed a true
    saveTodos(newTodos); //asigna a el estado settodos los nuevos todos con completed = true

  }


  return (
    <AppUI
      completedTodos={completedTodos} totalTodos={totalTodos}
      searchValue={searchValue} setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      deleteTodos={deleteTodos}
      completeTodo={completeTodo}
      loading={loading}
      error={error}

    />
  );
}

export default App;
