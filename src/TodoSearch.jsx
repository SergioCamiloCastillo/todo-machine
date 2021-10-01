import React,{useContext, useState} from 'react';
import { TodoContext } from './TodoContext';
import './TodoSearch.css';

function TodoSearch() {
    const {searchValue, setSearchValue} = useContext(TodoContext);
    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
        console.log(e.target.value);
    }
    return (
        <input value={searchValue} onChange={onSearchValueChange} className="TodoSearch" placeholder="Busca una tarea..." />
 
    )
}

export { TodoSearch };
