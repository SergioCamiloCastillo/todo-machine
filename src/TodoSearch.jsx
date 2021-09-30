import React,{useState} from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
        console.log(e.target.value);
    }
    return (
        <input value={searchValue} onChange={onSearchValueChange} className="TodoSearch" placeholder="Cebolla" />
 
    )
}

export { TodoSearch };
